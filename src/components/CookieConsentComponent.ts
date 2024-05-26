import { type PersistenceProviderImpl, getStorage } from "simply-persist-sync";
import {
	type CookieCategory,
	type CookieConsentConfig,
	type CookieConsentState,
	type CookieOrigin,
	type Language,
	type Translation,
	categories,
	languageNames,
	translations,
} from "./CookieConsent";

let CookieConsentClass;

if (typeof HTMLElement !== "undefined") {
	/**
	 * yeah, yeah I know what you think about this class replacing the DOM in-place without
	 * partially updating and fancy algorithms. But you know what? Old is gold! ;))
	 * (no dependency hell, no complexity, fast engough, super-tiny code base, no hassle, no worries)
	 */
	class CookieConsentImpl extends HTMLElement {
		public tpl: HTMLTemplateElement;
		public root: ShadowRoot;
		public lang: Language;
		public tr: Translation;
		public contentNode: Node;
		public state: CookieConsentState;
		public config: CookieConsentConfig;
		public cookieConsentCookieName: string;
		public storage: PersistenceProviderImpl<CookieConsentState>;

		public languageChangeListener: EventListener;
		public acceptButtonListener: EventListener;
		public denyButtonListener: EventListener;
		public saveButtonListener: EventListener;
		public moreInfoLinkListener: EventListener;
		public closeButtonListener: EventListener;
		public privacyButtonListener: EventListener;
		public categoriesTabListener: EventListener;
		public servicesTabListener: EventListener;
		public categoryActivationChangeListener: EventListener;
		public serviceActivationChangeListener: EventListener;

		constructor() {
			super();
			this.cookieConsentCookieName = "cookie-consent";
			this.storage = getStorage<CookieConsentState>("local");
			this.config = {
				defaultLanguage: "en",
				showFloatingButton: true,
				cookieOrigins: [],
				...(window.astroCookieConsentConfig || {}),
			};
			this.populateGlobalState(this.getState());
			this.tpl = document.createElement("template");
			this.root = this.attachShadow({ mode: "open" });
			this.state = this.getState();

			const lang = document.documentElement.lang;
			if (Object.keys(languageNames).includes(lang)) {
				this.setLanguage(lang as Language);
			} else {
				this.setLanguage(this.state.language);
			}
			this.checkConfig();

			requestAnimationFrame(() => {
				if (!this.state.decisionMade) {
					this.initServicesActivationStatus();
				}
			});

			this.installGlobalFunctions();
			this.injectGlobalStyle();
			this.updateTagsActivation();
		}

		getState() {
			return this.storage.get(this.cookieConsentCookieName, {
				modalOpen: true,
				decisionMade: false,
				moreInfoActive: false,
				acceptAll: false,
				denyAll: false,
				language: this.config.defaultLanguage,
				moreCategoriesTabActive: true,
				moreServicesTabActive: false,
				acceptedServices: [],
				acceptedCategories: ["essential", "other"],
				uncommittedChangePending: false,
			} as CookieConsentState);
		}

		populateGlobalState(state: CookieConsentState) {
			globalThis.astroCookieConsent = {
				...globalThis.astroCookieConsent,
				...state,
			};
		}

		injectGlobalStyle() {
			const style = document.createElement("style");
			style.innerHTML = `
                .astro-cookie-consent-iframe-container {
                    position: relative;
                    display: block;
                }

                .astro-cookie-consent-action-button {
                    display: block;
                    border-radius: 0.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                .astro-cookie-consent-iframe-overlay {
                    position: absolute;
                    border: 2px dashed #ccc;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    z-index: 10;
                }

                :root {
                    --cookie-consent-modal-padding: 2rem;
                    --cookie-consent-bg: #fff;
                    --cookie-consent-text: #333;
                    --cookie-consent-link: #555; 
                    --cookie-consent-link-hover: #555;
                    --cookie-consent-primary-color: rgb(32, 76, 147);

                    --cookie-consent-chip-bg: #eee;;
                    --cookie-consent-chip-text: #555;

                    --cookie-consent-button-bg: #000;
                    --cookie-consent-button-size: 3rem;
                    --cookie-consent-button-text: #fff;
                    --cookie-consent-button-text-size: 0.9rem;
                    --cookie-consent-button-border-radius: 0.5rem;
                    --cookie-consent-button-bg-deny: #555;
                    --cookie-consent-button-bg-accept: #489320;
                    --cookie-consent-button-bg-save: #333;

                    --cookie-consent-border-radius: 0.5rem;
                    --cookie-consent-box-shadow: 0px 4px 16px rgba(0, 0, 0, .12);
                    --cookie-consent-transition: all .3s;
                    
                    --cookie-consent-privacy-button-bg: rgb(32, 76, 147);
                    --cookie-consent-privacy-button-text: #fff;
                    --cookie-consent-privacy-button-size: 2rem;
                    --cookie-consent-privacy-button-distance: 1rem;
                }
            `;
			document.head.appendChild(style);
		}

		installGlobalFunctions() {
			window.updateTagsActivation = this.updateTagsActivation.bind(this);

			/** allows to programmatically open the cookie consent */
			window.openAstroCookieConsent = () => {
				this.setState("modalOpen", true);
				this.commitStateAndRerender();
			};

			/** allows to programmatically accept a specific service */
			window.astroCookieAcceptService = (serviceId: string) => {
				const acceptedServices = [...this.state.acceptedServices];

				//console.log('astroCookieAcceptService serviceId', serviceId)

				if (!acceptedServices.includes(serviceId)) {
					acceptedServices.push(serviceId);
				}
				const serializedRelevantState = this.getSerializedRelevantState();
				console.log("serializedRelevantState", serializedRelevantState);
				console.log("acceptedServices", acceptedServices);

				this.setState("acceptedServices", acceptedServices);
				this.commitStateAndRerender(serializedRelevantState);
			};

			/** allows to check for a specific service acceptance */
			window.astroCookieIsServiceAccepted = this.isServiceAccepted.bind(this);
		}

		isServiceAccepted(serviceId: string) {
			return this.state.acceptedServices.includes(serviceId);
		}

		checkConfig() {
			if (
				!this.config.cookieOrigins ||
				this.config.cookieOrigins.length === 0
			) {
				throw new Error(
					"No cookie origins configured. Please provide a list of cookie origins in the window.astroCookieConsentConfig.cookieOrigins array.",
				);
			}

			this.config.cookieOrigins.forEach((origin) => {
				// check for dataCollected
				if (
					!origin.dataCollected ||
					!Array.isArray(origin.dataCollected[this.lang])
				) {
					throw new Error(
						`No dataCollected configured for origin ${origin.id} in language ${this.lang}. Please provide a dataCollected array for this origin in the window.astroCookieConsentConfig.cookieOrigins array.`,
					);
				}

				// check for url
				if (!origin.url || !origin.url[this.lang]) {
					throw new Error(
						`No url configured for origin ${origin.id} in language ${this.lang}. Please provide a url for this origin in the window.astroCookieConsentConfig.cookieOrigins array.`,
					);
				}

				// check for description
				if (!origin.description || !origin.description[this.lang]) {
					throw new Error(
						`No description configured for origin ${origin.id} in language ${this.lang}. Please provide a description for this origin in the window.astroCookieConsentConfig.cookieOrigins array.`,
					);
				}

				// check for name
				if (!origin.name) {
					throw new Error(
						`No name configured for origin ${origin.id} in language ${this.lang}. Please provide a name for this origin in the window.astroCookieConsentConfig.cookieOrigins array.`,
					);
				}

				// check for category
				if (!origin.category) {
					throw new Error(
						`No category configured for origin ${origin.id} in language ${this.lang}. Please provide a category for this origin in the window.astroCookieConsentConfig.cookieOrigins array.`,
					);
				}

				// check for id
				if (!origin.id) {
					throw new Error(
						`No id configured for origin ${origin.id} in language ${this.lang}. Please provide an id for this origin in the window.astroCookieConsentConfig.cookieOrigins array.`,
					);
				}
			});
		}

		initServicesActivationStatus() {
			this.config.cookieOrigins.forEach((origin: CookieOrigin) => {
				if (
					this.state.acceptedCategories.includes(origin.category) &&
					!this.isServiceAccepted(origin.id)
				) {
					this.state.acceptedServices.push(origin.id);
				}
			});
			this.commitStateAndRerender(JSON.stringify({}));
		}

		updateTagsActivation() {
			const relevantTags: Array<HTMLElement> = Array.from(
				document.querySelectorAll("[data-astro-cookie-consent]"),
			);

			//console.log('relevantTags', relevantTags)
			if (relevantTags.length > 0) {
				for (const tag of relevantTags) {
					const tagId = tag.getAttribute("data-astro-cookie-consent");
					const origin = this.config.cookieOrigins.find(
						(origin: CookieOrigin) => origin.id === tagId,
					);

					if (tagId) {
						if (this.isServiceAccepted(tagId)) {
							this.activateTag(tag);
						} else {
							this.deactivateTag(tag, origin!);
						}
					}
				}
			}
		}

		activateTag(tag: HTMLElement) {
			let hasActivation = false;

			if (tag.tagName === "SCRIPT") {
				if (tag.getAttribute("type") === "text") {
					tag.setAttribute("type", "text/javascript");
					hasActivation = true;
				}
			}

			if (tag.tagName === "IFRAME") {
				const consentSrc = tag.getAttribute("consent-src")!;
				if (consentSrc) {
					tag.setAttribute("src", consentSrc);
					tag.removeAttribute("consent-src");
					hasActivation = true;
				}
			}

			if (hasActivation) {
				this.reinjectNode(tag);
				if (tag.tagName === "IFRAME") {
					this.removeIframeOverlay(tag);
				}
			}
		}

		removeIframeOverlay(tag: HTMLElement) {
			const container = document.querySelector(
				`.astro-cookie-consent-iframe-container[data-for="${tag.dataset.astroCookieConsentId}"]`,
			);

			if (container) {
				const overlay = container.querySelector(
					".astro-cookie-consent-iframe-overlay",
				)!;

				// replace container by iframe and restore style and className on iframe (that has been set to the container before)
				const iframe = container.querySelector("iframe")!;

				// replace container by iframe
				container.parentElement!.replaceChild(iframe, container);

				// restore style and className on iframe
				iframe.className = container.className;
				iframe.setAttribute("style", container.getAttribute("style") || "");

				overlay.remove();
			}
		}

		overlayIframeWithConsent(tag: HTMLElement, origin: CookieOrigin) {
			// If the tag doesn't have the data-astro-cookie-consent-id, assign one
			if (!tag.dataset.astroCookieConsentId) {
				tag.dataset.astroCookieConsentId = this.generateUniqueId();
			}

			// Check if an overlay already exists for this tag
			if (
				document.querySelector(
					`.astro-cookie-consent-iframe-container[data-for="${tag.dataset.astroCookieConsentId}"]`,
				)
			) {
				return;
			}

			// Wrap the iframe in a container
			const container = document.createElement("div");
			container.className = `astro-cookie-consent-iframe-container ${tag.className}`;
			container.setAttribute("style", tag.getAttribute("style") || "");
			container.setAttribute("data-for", tag.dataset.astroCookieConsentId!);
			tag.className = "";
			container.removeAttribute("style");
			tag.parentElement!.insertBefore(container, tag);
			container.appendChild(tag);

			// Create the overlay div
			const overlay = document.createElement("div");
			overlay.className = "astro-cookie-consent-iframe-overlay";

			const heading = document.createElement("h3");
			heading.innerHTML = `${origin.name}-${this.tr.integration}`;
			overlay.appendChild(heading);

			// Add the consent text
			const text = document.createElement("p");
			text.innerHTML = `${origin.name} ${this.tr.isDeactivatedMessage}`;
			overlay.appendChild(text);

			// Add the activation button
			const activateServiceButton = document.createElement("button");
			activateServiceButton.innerHTML = this.tr.activate;
			activateServiceButton.className = "astro-cookie-consent-action-button";
			activateServiceButton.onclick = () => {
				//console.log("activate");
				window.astroCookieAcceptService(origin.id);
			};
			overlay.appendChild(activateServiceButton);

			// Add privacy settings link
			const privacySettingsLink = document.createElement("button");
			privacySettingsLink.innerHTML = this.tr.privacySettingsButtonText;
			privacySettingsLink.className = "astro-cookie-consent-action-button";
			privacySettingsLink.onclick = () => {
				window.openAstroCookieConsent();
			};
			overlay.appendChild(privacySettingsLink);

			// Append the overlay to the container
			container.appendChild(overlay);
		}

		deactivateTag(tag: HTMLElement, origin: CookieOrigin) {
			let hasDeactivation = false;

			if (tag.tagName === "SCRIPT") {
				if (tag.getAttribute("type") === "text/javascript") {
					tag.setAttribute("type", "text");
					hasDeactivation = true;
				}
			}

			if (tag.tagName === "IFRAME") {
				const consentSrc =
					tag.getAttribute("consent-src")! || tag.getAttribute("src")!;

				if (consentSrc) {
					tag.setAttribute("consent-src", consentSrc);
					tag.removeAttribute("src");
					hasDeactivation = true;
				}
			}

			if (hasDeactivation) {
				const newNode = this.reinjectNode(tag);

				if (newNode.tagName === "IFRAME") {
					this.overlayIframeWithConsent(newNode, origin);
				}
			}
		}

		reinjectNode(tag: HTMLElement): HTMLElement {
			const newNode = tag.cloneNode(true);
			tag.parentNode!.replaceChild(newNode, tag);
			tag.remove();
			return newNode as HTMLElement;
		}

		setLanguage(language: Language) {
			this.setState("language", language);
			this.lang = language;
			const messages = {
				...translations,
				...window.astroCookieConsentTranslations,
			};
			this.tr = messages[this.lang];
		}

		getChangeRelevantState() {
			return {
				decisionMade: this.state.decisionMade,
				acceptedServices: this.state.acceptedServices,
				acceptedCategories: this.state.acceptedCategories,
				acceptAll: this.state.acceptAll,
				denyAll: this.state.denyAll,
			};
		}

		setState(property: keyof CookieConsentState, value: any) {
			this.state[property as any] = value;
		}

		generateUniqueId(prefix = "iframe") {
			return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
		}

		renderStyleTag() {
			return `
            <style>
                .modal {
                    display: ${this.state.modalOpen ? "flex" : "none"};
                    z-index: 2147483646;
                    width: 100%;
                    max-width: 625px;
                    position: fixed;
                    max-height: 100vh;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: var(--cookie-consent-bg);
                    color: var(--cookie-consent-text);
                    font-size: 1rem;
                    font-family: sans-serif;
                    transition: var(--cookie-consent-transition);
                    box-shadow: var(--cookie-consent-box-shadow);
                    border-radius: var(--cookie-consent-border-radius);
                    flex-direction: column;
                    padding: var(--cookie-consent-modal-padding);
                }

                .privacyButton {
                    display: ${
											!this.config.showFloatingButton
												? "none"
												: this.state.modalOpen
												  ? "none"
												  : "flex"
										};
                    width: var(--cookie-consent-privacy-button-size);
                    height: var(--cookie-consent-privacy-button-size);
                    color: var(--cookie-consent-privacy-button-text);
                    background: var(--cookie-consent-privacy-button-bg);
                    z-index: 2147483640;
                    position: fixed;
                    left: var(--cookie-consent-privacy-button-distance);
                    bottom:  var(--cookie-consent-privacy-button-distance);
                    border-radius: 100%;
                    font-size: 1.5rem;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                header, footer {
                    display: flex;
                    align-items: stretch;
                    flex-direction: row;
                    width: 100%;
                    gap: 0.5rem;
                }

                footer {
                    margin-top: 1rem;
                }

                main {
                    font-size: 0.8rem;
                }

                .actions {
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: row;
                    align-items: center;
                }

                .title {
                    display: flex;
                    width: 100%;
                    font-weight: bold;
                }

                select {
                    border: 0;
                    cursor: pointer;
                }

                #languageSelector {
                    display: flex;
                    margin-left: auto;
                }

                button {
                    border-radius: var(--cookie-consent-button-border-radius);
                    cursor: pointer;
                    border: 0;
                    color: var(--cookie-consent-button-text);
                    font-size: var(--cookie-consent-button-text-size);
                    flex: 1;
                    padding: 0.5rem;
                    text-align: center;
                }

                .denyButton {
                    display: block;
                    background: var(--cookie-consent-button-bg-deny);
                }

                .acceptButton {
                    font-weight: bold;
                    background: var(--cookie-consent-button-bg-accept);
                }

                .saveButton {
                    background: var(--cookie-consent-button-bg-save);
                    display: ${this.state.moreInfoActive ? "block" : "none"};
                }

                .moreInfoLink, a {
                    color: var(--cookie-consent-link);
                    text-decoration: none;
                    border: 0;
                    background: transparent;
                    display: inline;
                    font-size: 0.7rem;
                    padding: 0;
                    margin: 0;
                    padding-right: 0.5rem;
                    cursor: pointer;
                }

                .moreInfoLink:hover, a:hover {
                    color: var(--cookie-consent-link-hover);
                    text-decoration: underline;
                }

                .closeButton {
                    display: ${this.state.moreInfoActive ? "flex" : "none"};
                    background: transparent;
                    border: 0;
                    cursor: pointer;
                    font-size: 1rem;
                    padding: 0;
                    margin: 0;
                    margin-left: 0.5rem;
                    color: #000;
                    line-height: inherit;
                }

                .mainDefault {
                    display: ${this.state.moreInfoActive ? "none" : "flex"};
                    flex-direction: column;
                }

                .mainMoreInfo {
                    display: ${this.state.moreInfoActive ? "flex" : "none"};
                    flex-direction: column;
                }

                .tabBar {
                    margin-top: 0.5rem;
                    display: flex;
                    gap: 0.25rem;
                    align-items: stretch;
                    flex-direction: row;
                    border-bottom: 1px solid #ddd;
                }

                .tabBar button {
                    color: var(--cookie-consent-text);
                    border-radius: 0.5rem 0.5rem 0 0;
                }

                .tabBar button.active {
                    color: var(--cookie-consent-primary-color);
                    border-bottom: 2px solid var(--cookie-consent-primary-color);
                    font-weight: bold;
                }

                .links {
                    margin-bottom: 0.5rem;
                }

                .categories {
                    display: ${
											this.state.moreCategoriesTabActive ? "block" : "none"
										};
                }

                .services {
                    display: ${
											this.state.moreServicesTabActive ? "block" : "none"
										};
                }

                .categories, .services {
                    max-height: 30vh;
                    overflow-y: auto;
                }

                label {
                    font-size: 0.7rem;
                }

                h3 {
                    font-size: 0.8rem;
                    padding: 0;
                    margin: 0;
                    margin-top: 0.5rem;
                    display: flex;
                    align-items: center;
                }

                .data-collected {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 0.25rem;
                    margin-top: 0.5rem;
                }

                .chip {
                    color: var(--cookie-consent-chip-text);
                    background: var(--cookie-consent-chip-bg);
                    padding: 0.25rem;
                    border-radius: 0.5rem;
                    font-size: 0.7rem;
                    padding-left: 0.5rem;
                    padding-right: 0.5rem;
                }
                
                .origin-more-info-link {
                    display: block;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                }

                .third-party-note {
                    font-size: 0.7rem;
                    display: block;
                }

                @media (max-width: 768px) {
                    .modal {
                        max-width: 90%;
                    }
                    footer {
                        flex-direction: column;
                    }
                }
            </style>`;
		}

		renderPrivacyLinks() {
			return `${
				this.config.privacyPolicyUrl?.[this.lang]
					? `<a href="${
							this.config.privacyPolicyUrl[this.lang]
					  }" target="_blank">${this.tr.privacyPolicyLinkText}</a>`
					: ""
			}
            ${
							this.config.legalNoticeUrl?.[this.lang]
								? `<a href="${
										this.config.legalNoticeUrl[this.lang]
								  }" target="_blank">${this.tr.legalNoticeLinkText}</a>`
								: ""
						}`;
		}

		isRequiredService(category: CookieCategory) {
			return category === "essential" || category === "other";
		}

		renderModal() {
			//console.log("renderModal");

			// remove orphan event listeners
			const languageSelector = this.root.querySelector("#languageSelector");
			if (languageSelector) {
				languageSelector.removeEventListener(
					"change",
					this.languageChangeListener,
				);
			}

			const acceptButton = this.root.querySelector(".acceptButton");
			if (acceptButton) {
				acceptButton.removeEventListener("click", this.acceptButtonListener);
			}

			const denyButton = this.root.querySelector(".denyButton");
			if (denyButton) {
				denyButton.removeEventListener("click", this.denyButtonListener);
			}

			const saveButton = this.root.querySelector(".saveButton");
			if (saveButton) {
				saveButton.removeEventListener("click", this.saveButtonListener);
			}

			const moreInfoLink = this.root.querySelector(".moreInfoLink");
			if (moreInfoLink) {
				moreInfoLink.removeEventListener("click", this.moreInfoLinkListener);
			}

			const closeButton = this.root.querySelector(".closeButton");
			if (closeButton) {
				closeButton.removeEventListener("click", this.closeButtonListener);
			}

			const categoriesTab = this.root.querySelector(".categoriesTab");
			if (categoriesTab) {
				categoriesTab.removeEventListener("click", this.categoriesTabListener);
			}

			const servicesTab = this.root.querySelector(".servicesTab");
			if (servicesTab) {
				servicesTab.removeEventListener("click", this.servicesTabListener);
			}

			this.root
				.querySelectorAll(".category input")!
				.forEach((input: HTMLInputElement) => {
					input.removeEventListener(
						"change",
						this.categoryActivationChangeListener,
					);
				});

			this.root
				.querySelectorAll(".service input")!
				.forEach((input: HTMLInputElement) => {
					input.removeEventListener(
						"change",
						this.serviceActivationChangeListener,
					);
				});

			// Clear the current content inside the shadow root
			this.root.innerHTML = "";

			const tmpEl = document.createElement("div");

			const tpl = `
                ${this.renderStyleTag()}

                <button class="privacyButton">
                    🍪
                </button>

                <div class="modal">
                    <header>
                        <span class="title">${
													this.state.moreInfoActive
														? this.tr.moreTitle
														: this.tr.titleText
												}</span>

                        <div class="actions">
                            <select id="languageSelector" value="${
															this.state.language
														}" aria-label="Language">
                                ${Object.keys(languageNames)
																	.map(
																		(languageName: Language) =>
																			`<option value="${languageName}" ${
																				this.lang === languageName
																					? "selected"
																					: ""
																			}>${
																				languageNames[languageName]
																			}</option>`,
																	)
																	.join("\n")}
                            </select>
                            <button class="closeButton">X</button>
                        </div>
                    </header>
                    <main>
                        <div class="mainDefault">
                            <p>
                                ${this.tr.text}
                            </p>
                            <span class="links">
                                ${this.renderPrivacyLinks()}
                                <button class="moreInfoLink">${
																	this.tr.moreInformationLinkText
																}</button>
                            </span>
                        </div>
                        <div class="mainMoreInfo">
                            <p>
                                ${this.tr.moreText}
                            </p>
                            <span class="links">
                                ${this.renderPrivacyLinks()}
                            </span>
                            <div class="tabBar">
                                <button class="categoriesTab ${
																	this.state.moreCategoriesTabActive
																		? "active"
																		: ""
																}">${this.tr.categoriesTabTitleText}</button>
                                <button class="servicesTab ${
																	this.state.moreServicesTabActive
																		? "active"
																		: ""
																}">${this.tr.serivcesTabTitleText}</button>
                            </div>
                            <div class="categories">
                                ${categories
																	.map((category: CookieCategory) => {
																		return `<div class="category">
                                            <h3><input ${
																							this.isRequiredService(category)
																								? "disabled"
																								: ""
																						} type="checkbox" id="${category}" ${
																							this.state.acceptedCategories.includes(
																								category,
																							)
																								? "checked"
																								: ""
																						} /> ${
																							this.tr.categories[`${category}`]
																						}</h3>
                                            <label for="${category}">${
																							this.tr.categories[
																								`${category}Text`
																							]
																						}</label>
                                        </div>`;
																	})
																	.join("\n")}
                            </div>
                            <div class="services">
                                ${this.config.cookieOrigins
																	.map((origin: CookieOrigin) => {
																		return `<div class="service">
                                            <h3><input type="checkbox" ${
																							this.isRequiredService(
																								origin.category,
																							)
																								? "disabled"
																								: ""
																						} id="${origin.id}" ${
																							this.isServiceAccepted(origin.id)
																								? "checked"
																								: ""
																						} /> ${origin.name} (${
																							this.tr.categories[
																								origin.category
																							]
																						})</h3>
                                            <label for="${origin.id}">${
																							origin.description[this.lang]
																						}</label>
                                            <a class="origin-more-info-link" href="${
																							origin.url![this.lang]
																						}" rel="noreferrer noopener" target="_blank">&gt; ${
																							this.tr.moreInformationLinkText
																						}</a>
                                            
                                            ${
																							origin.domain
																								? `<i class="third-party-note">${this.tr.thirdPartyNote}</i>`
																								: ""
																						}

                                            <div class="data-collected">
                                                ${Object.keys(
																									origin.dataCollected![
																										this.lang
																									],
																								)
																									.map((key) => {
																										return `<span class="chip">${
																											origin.dataCollected![
																												this.lang
																											][key]
																										}</span>`;
																									})
																									.join("\n")}    
                                            </div>
                                        </div>`;
																	})
																	.join("\n")}
                            </div>
                        </div>
                    </main>
                    <footer>
                        <button class="saveButton">${this.tr.saveButtonText}</button>
                        <button class="denyButton">${this.tr.denyAllButtonText}</button>
                        <button class="acceptButton">${
													this.tr.acceptAndCloseButtonText
												}</button>
                    </footer>
                </div>
            `;

			tmpEl.innerHTML = tpl;

			requestAnimationFrame(() => {
				// add DOM nodes to shadow DOM
				while (tmpEl.firstChild) {
					this.root.appendChild(tmpEl.firstChild);
				}

				// attach event listeners
				this.languageChangeListener = this.onLanguageChange.bind(this);
				this.acceptButtonListener = this.onAcceptButtonClick.bind(this);
				this.denyButtonListener = this.onDenyButtonClick.bind(this);
				this.saveButtonListener = this.onSaveButtonClick.bind(this);
				this.moreInfoLinkListener = this.onMoreInfoLinkClick.bind(this);
				this.closeButtonListener = this.onCloseButtonClick.bind(this);
				this.privacyButtonListener = this.onPrivacyButtonClick.bind(this);
				this.categoriesTabListener = this.onCategoriesTabClick.bind(this);
				this.servicesTabListener = this.onServicesTabClick.bind(this);
				this.categoryActivationChangeListener =
					this.onCategoryActivationChange.bind(this);
				this.serviceActivationChangeListener =
					this.onServiceActivationChange.bind(this);

				this.root
					.querySelector("#languageSelector")!
					.addEventListener("change", this.languageChangeListener);
				this.root
					.querySelector(".acceptButton")!
					.addEventListener("click", this.acceptButtonListener);
				this.root
					.querySelector(".denyButton")!
					.addEventListener("click", this.denyButtonListener);
				this.root
					.querySelector(".saveButton")!
					.addEventListener("click", this.saveButtonListener);
				this.root
					.querySelector(".moreInfoLink")!
					.addEventListener("click", this.moreInfoLinkListener);
				this.root
					.querySelector(".closeButton")!
					.addEventListener("click", this.closeButtonListener);
				this.root
					.querySelector(".privacyButton")!
					.addEventListener("click", this.privacyButtonListener);
				this.root
					.querySelector(".categoriesTab")!
					.addEventListener("click", this.categoriesTabListener);
				this.root
					.querySelector(".servicesTab")!
					.addEventListener("click", this.servicesTabListener);
				this.root
					.querySelectorAll(".category input")!
					.forEach((input: HTMLInputElement) => {
						input.addEventListener(
							"change",
							this.categoryActivationChangeListener,
						);
					});
				this.root
					.querySelectorAll(".service input")!
					.forEach((input: HTMLInputElement) => {
						input.addEventListener(
							"change",
							this.serviceActivationChangeListener,
						);
					});
			});
		}

		onLanguageChange(e: Event) {
			this.setLanguage((e.target as HTMLSelectElement).value as Language);
			this.commitStateAndRerender();
		}

		onCategoryActivationChange(e: Event) {
			const input = e.target as HTMLInputElement;
			const category = input.id as CookieCategory;

			let acceptedCategories = [...this.state.acceptedCategories];
			let acceptedServices = [...this.state.acceptedServices];

			if (input.checked) {
				acceptedCategories.push(category);

				// copilot: all services of this category should be activated as well
				this.config.cookieOrigins
					.filter((origin: CookieOrigin) => origin.category === category)
					.forEach((origin: CookieOrigin) => {
						if (!acceptedServices.includes(origin.id)) {
							acceptedServices.push(origin.id);
						}
					});
			} else {
				acceptedCategories = acceptedCategories.filter(
					(c: CookieCategory) => c !== category,
				);

				// copilot: all services of this category should be deactivated as well
				this.config.cookieOrigins
					.filter((origin: CookieOrigin) => origin.category === category)
					.forEach((origin: CookieOrigin) => {
						acceptedServices = acceptedServices.filter(
							(s: string) => s !== origin.id,
						);
					});
			}

			const serializedRelevantState = this.getSerializedRelevantState();
			this.setState("acceptedCategories", acceptedCategories);
			this.setState("acceptedServices", acceptedServices);
			this.commitStateAndRerender(serializedRelevantState);
		}

		onServiceActivationChange(e: Event) {
			const input = e.target as HTMLInputElement;
			const service = input.id;
			let acceptedServices = [...this.state.acceptedServices];

			if (input.checked && !acceptedServices.includes(service)) {
				acceptedServices.push(service);
			} else {
				acceptedServices = acceptedServices.filter(
					(s: string) => s !== service,
				);
			}
			const serializedRelevantState = this.getSerializedRelevantState();
			this.setState("acceptedServices", acceptedServices);
			this.commitStateAndRerender(serializedRelevantState);
		}

		onAcceptButtonClick() {
			this.setState("decisionMade", true);
			this.setState("acceptAll", true);
			this.setState("modalOpen", false);

			const acceptedCategories = [...this.state.acceptedCategories];

			categories.forEach((category: CookieCategory) => {
				if (!acceptedCategories.includes(category)) {
					acceptedCategories.push(category);
				}
			});

			const acceptedServices = [...this.state.acceptedServices];

			this.config.cookieOrigins.forEach((origin: CookieOrigin) => {
				if (!acceptedServices.includes(origin.id)) {
					acceptedServices.push(origin.id);
				}
			});

			const serializedRelevantState = this.getSerializedRelevantState();
			this.setState("acceptedCategories", acceptedCategories);
			this.setState("acceptedServices", acceptedServices);
			this.commitStateAndRerender(serializedRelevantState);

			if (typeof window.astroCookieConsentOnAccept === "function") {
				window.astroCookieConsentOnAccept(this.state);
			}
		}

		equals(listA: Array<any>, listB: Array<any>) {
			// stable content comparison
			return JSON.stringify(listA.sort()) === JSON.stringify(listB.sort());
		}

		onDenyButtonClick() {
			this.setState("decisionMade", true);
			this.setState("denyAll", true);
			this.setState("modalOpen", false);

			let acceptedCategories = [...this.state.acceptedCategories];

			// leave all categories out that are not isRequiredService()
			acceptedCategories = categories.filter((category: CookieCategory) =>
				this.isRequiredService(category),
			);

			let acceptedServices = [...this.state.acceptedServices];

			// reset to all services accepted that are part of an acceptedCategory
			acceptedServices = this.config.cookieOrigins
				.filter((origin: CookieOrigin) =>
					acceptedServices.includes(origin.category),
				)
				.map((origin: CookieOrigin) => origin.id);

			const serializedRelevantState = this.getSerializedRelevantState();
			this.setState("acceptedCategories", acceptedCategories);
			this.setState("acceptedServices", acceptedServices);
			this.commitStateAndRerender(serializedRelevantState);

			if (typeof window.astroCookieConsentOnDeny === "function") {
				window.astroCookieConsentOnDeny(this.state);
			}
		}

		onSaveButtonClick() {
			const serializedRelevantState = this.getSerializedRelevantState();
			this.setState("decisionMade", true);
			this.setState("modalOpen", false);
			this.commitStateAndRerender(serializedRelevantState);
		}

		onMoreInfoLinkClick() {
			this.setState("moreInfoActive", true);
			this.commitStateAndRerender();
		}

		onCloseButtonClick() {
			this.setState("modalOpen", false);
			this.commitStateAndRerender();
		}

		onPrivacyButtonClick() {
			this.setState("modalOpen", true);
			this.commitStateAndRerender();
		}

		onCategoriesTabClick() {
			this.setState("moreCategoriesTabActive", true);
			this.setState("moreServicesTabActive", false);
			this.commitStateAndRerender();
		}

		onServicesTabClick() {
			this.setState("moreCategoriesTabActive", false);
			this.setState("moreServicesTabActive", true);
			this.commitStateAndRerender();
		}

		getSerializedRelevantState() {
			return JSON.stringify(this.getChangeRelevantState());
		}

		commitStateAndRerender(serializedRelevantState?: string) {
			const hadUncommittedChangePending = this.state.uncommittedChangePending;

			this.state = {
				...this.state,
				uncommittedChangePending: false,
			};

			this.storage.set(this.cookieConsentCookieName, this.state);

			// update global state
			this.populateGlobalState(this.state);

			if (
				typeof window.astroCookieConsentOnChange === "function" &&
				(hadUncommittedChangePending ||
					(serializedRelevantState &&
						serializedRelevantState !==
							JSON.stringify(this.getChangeRelevantState())))
			) {
				window.astroCookieConsentOnChange(this.state);
			}
			this.updateTagsActivation();
			this.renderModal();
		}
	}
	CookieConsentClass = CookieConsentImpl;
}

export const CookieConsent = CookieConsentClass;
