import { useLayoutEffect, useState } from "react";

export const ScrollUpButton = () => {
	const [visible, setVisible] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useLayoutEffect(() => {
		const toggleVisible = () => {
			const scrolled = document.documentElement.scrollTop;
			if (scrolled > 300) {
				setVisible(true);
			} else if (scrolled <= 300) {
				setVisible(false);
			}
		};
		toggleVisible();
		window.addEventListener("scroll", toggleVisible);
		return () => window.removeEventListener("scroll", toggleVisible);
	}, []);

	return (
		<>
			{visible && (
				<div
					onClick={scrollToTop}
					style={{
						position: "fixed",
						bottom: 15,
						right: 15,
						width: 35,
						height: 35,
						cursor: "pointer",
						borderRadius: 8,
						zIndex: 49,
					}}
					className="border-1 md:scale-105 lg:scale-110 xl:scale-125 border-gray-600 dark:border-gray-400 text-white dark:text-black bg-black dark:bg-white block transform transition-opacity duration-150 rounded-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						viewBox="0 0 24 24"
					>
						<path
							fill={"currentColor"}
							d="M11 21V10.8l-2.6 2.6L7 12l5-5l5 5l-1.4 1.4l-2.6-2.6V21h-2ZM4 5V3h16v2H4Z"
						/>
					</svg>
				</div>
			)}
		</>
	);
};
