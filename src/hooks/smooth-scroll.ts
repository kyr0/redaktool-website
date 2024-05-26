import { useCallback } from "react";

export const scrollSmooth = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		const boundingRect = element.getBoundingClientRect();
		const absoluteTop = boundingRect.top + window.pageYOffset;

		window.scrollTo({
			top: absoluteTop - 50,
			behavior: "smooth",
		});
	}
};

const useSmoothScroll = () => {
	const scrollTo = useCallback((id: string) => {
		scrollSmooth(id);
	}, []);

	return scrollTo;
};

export default useSmoothScroll;
