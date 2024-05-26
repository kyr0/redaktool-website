import React, {
	useState,
	useEffect,
	useRef,
	type MutableRefObject,
} from "react";

export const useFadeInOnVisible = (
	delay: number,
	options: IntersectionObserverInit = {},
): [MutableRefObject<any>, boolean] => {
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setTimeout(() => setVisible(true), delay);
				observer.unobserve(ref.current);
			}
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref, options, delay]);

	return [ref, visible];
};
