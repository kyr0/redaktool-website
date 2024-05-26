import { useEffect, useRef } from "react";

export function VideoPlayer({ src, poster, className }) {
	const videoRef = useRef<HTMLVideoElement>();

	useEffect(() => {
		if (!videoRef.current) return;

		if (!document.location.hash) {
			videoRef.current.focus();
		}
	}, [videoRef.current]);

	return (
		<video
			ref={videoRef}
			controls
			preload="metadata"
			src={src}
			poster={poster}
			className={className}
		>
			<track
				label="English"
				kind="subtitles"
				srcLang="en"
				src="./vtt/intro_en.vtt"
				default
			/>
			<track
				label="Deutsch"
				kind="subtitles"
				srcLang="de"
				src="./vtt/intro_de.vtt"
			/>
		</video>
	);
}
