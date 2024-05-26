import React, { useEffect, useRef, type FC } from "react";

export const AstroCoookieWrapper: FC<any> = ({ html, className }) => {
	const externalContainerRef = useRef(null);

	useEffect(() => {
		externalContainerRef.current.innerHTML = html;

		window.updateTagsActivation();
	}, [html]);

	return <div ref={externalContainerRef} className={className} />;
};
