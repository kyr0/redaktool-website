import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

export const typewrite = (
	texts: Array<string>,
	elId: string,
	speed = 75,
	initialDelay = 0,
	onDone = () => {},
	onTick = () => {},
): [typeof Typewriter] => {
	const [typeWriterInstance] = useState(
		new Typewriter(elId, {
			strings: [texts],
			autoStart: false,
			loop: false,
			delay: speed,
		}),
	);

	const [totalTime, setTotalTime] = useState(0);

	useEffect(() => {
		if (!typeWriterInstance) return;
		if (initialDelay > 0) {
			typeWriterInstance.pauseFor(initialDelay);
		}
		typeWriterInstance.start();
	}, [initialDelay, typeWriterInstance]);

	useEffect(() => {
		const textDuration = texts
			.map((t) => t.length * speed)
			.reduce((a, b) => a + b, 0);
		setTotalTime(textDuration + initialDelay);
	}, [texts, initialDelay, speed]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (typeof onDone === "function") {
				onDone();
			}
		}, totalTime);
		return () => clearTimeout(timer);
	}, [totalTime, onDone]);

	useEffect(() => {
		if (typeof onDone === "function") {
			const interval = setInterval(() => onTick(), 1000);
			setTimeout(() => {
				clearInterval(interval);
			}, totalTime);
		}
	}, [onTick, totalTime]);

	return typeWriterInstance;
};
