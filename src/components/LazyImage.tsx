import React, {
	type CSSProperties,
	useEffect,
	useRef,
	useState,
	useCallback,
} from "react";

// TODO: screen density aware image loading
export interface Props {
	id?: string;
	src: string;
	width?: number;
	height?: number;
	alt: string;
	style?: CSSProperties;
	className?: string;
	format?: string;
	astroAssetsPath?: string;
	previewQuality?: number;
	quality?: number;
}

export const LiteImage: React.FC<Props> = ({
	id,
	src,
	alt,
	height = 100,
	width = 100,
	previewQuality = 5,
	quality = 90,
	className,
	style,
	format = "webp",
	astroAssetsPath = "_image",
}) => {
	const [loaded, setLoaded] = useState(false);
	const imageRef = useRef<HTMLImageElement>(null);
	const placeholderWidth = Math.round(width / 7);
	const placeholderHeight = Math.round(height / 7);

	const getTransformOptionsPath = useCallback(
		({ src, height, width, quality = previewQuality, format = "webp" }) => {
			const transformOptions = new URLSearchParams();
			transformOptions.append("href", src);
			transformOptions.append("h", height.toString());
			transformOptions.append("w", width.toString());
			transformOptions.append("q", quality.toString());
			transformOptions.append("f", format);
			return `/${astroAssetsPath}?${transformOptions.toString()}`;
		},
		[id, format, astroAssetsPath],
	);

	const [transformedSrc, setTransformedSrc] = useState(
		getTransformOptionsPath({
			quality: previewQuality,
			src,
			height: placeholderHeight,
			width: placeholderWidth,
			format,
		}),
	);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(async (entry) => {
					if (entry.isIntersecting) {
						const imageSrcString = await lazyLoad(
							entry.target as HTMLImageElement,
						);
						setTransformedSrc(imageSrcString);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (imageRef.current) {
			observer.observe(imageRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [src, width, height]);

	const lazyLoad = useCallback(
		async (element: HTMLImageElement) => {
			const transformPath = getTransformOptionsPath({
				quality,
				src,
				height,
				width,
				format,
			});

			//const response = await fetch(transformPath);
			//const blob = await response.blob();
			//const imageBlobString = URL.createObjectURL(blob);
			//element.src = imageBlobString;
			element.onload = () => setLoaded(true);
			element.setAttribute("width", width.toString());
			element.setAttribute("height", height.toString());
			return src;
		},
		[id, src, format, quality, width, height],
	);

	return (
		<img
			ref={imageRef}
			id={id}
			alt={alt}
			className={`${className} ${loaded ? "loaded" : "blur"}`}
			src={transformedSrc}
			style={{
				filter: loaded ? "blur(0px)" : "blur(40px)",
				transition: "0.5s filter linear",
				...style,
			}}
			width={placeholderWidth}
			height={placeholderHeight}
			loading="eager"
			decoding="async"
		/>
	);
};

export default LiteImage;
