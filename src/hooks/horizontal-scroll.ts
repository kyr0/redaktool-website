import { useEffect, useRef } from "react";

export const useHorizontalScroll = () => {
	const elRef = useRef();
	let scrollAmount = 0;
	let scrollDirection = 1; // 1 for right, -1 for left

	useEffect(() => {
		const el = elRef.current as HTMLElement;

		const handleScroll = () => {
			if (
				(scrollAmount <= 0 && scrollDirection === -1) ||
				(scrollAmount >= el.scrollWidth - el.clientWidth &&
					scrollDirection === 1)
			) {
				scrollDirection *= -1; // Reverse direction
			}

			scrollAmount += scrollDirection * 0.05; // Adjust the scroll speed here
			el.scrollLeft = scrollAmount;
		};

		const interval = setInterval(handleScroll, 1); // Adjust the interval for smoother scrolling

		return () => clearInterval(interval);
	}, []);

	return elRef;
};
