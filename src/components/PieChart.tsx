import React, { useEffect, useRef, useState } from "react";

interface PieChartProps {
	children?: React.ReactNode;
	initialPercentage: number;
	finalPercentage: number;
	animationDuration: number; // in seconds
	className?: string;
	fontSize?: string; // e.g., '16px', '1rem'
	fillColor?: string; // SVG circle fill color
	strokeColor?: string; // SVG circle stroke color
	textColor?: string; // Percentage text color
	backgroundColor?: string; // Background color of SVG
	size?: number; // Size of the SVG in pixels
}

const PieChart: React.FC<PieChartProps> = ({
	children,
	initialPercentage,
	finalPercentage,
	animationDuration,
	className = "",
	fontSize = "1.5rem",
	fillColor = "#bbb",
	strokeColor = "#555",
	textColor = "#fff",
	backgroundColor = "transparent",
	size = 100,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [increasing] = useState(initialPercentage < finalPercentage);
	const [percentage, setPercentage] = useState(initialPercentage);
	const pieRef = useRef<SVGCircleElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	const radius = size * 0.25; // 25% of the size
	const strokeWidth = size * 0.5; // 50% of the size
	const total = 2 * Math.PI * radius; // Circumference of the circle

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ threshold: 0.1 },
		);
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (isVisible && !hasAnimated && pieRef.current) {
			const result = (finalPercentage * total) / 100;
			pieRef.current.style.transition = `stroke-dasharray ${animationDuration}s ease`;
			pieRef.current.style.strokeDasharray = `${result} ${total}`;

			// Animate percentage
			const step =
				(initialPercentage - finalPercentage) /
				((animationDuration * 1000) / 10);
			let currentPercentage = initialPercentage;
			const interval = setInterval(() => {
				currentPercentage -= step;
				if (currentPercentage <= finalPercentage) {
					currentPercentage = finalPercentage;
					clearInterval(interval);
					setHasAnimated(true);
				}
				setPercentage(Math.round(currentPercentage));
			}, 10);
		}
	}, [isVisible, finalPercentage, animationDuration, initialPercentage]);

	return (
		<figure
			ref={containerRef}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: `${size}px`,
				position: "relative",
			}}
			className={className}
		>
			<svg
				width={size}
				height={size}
				style={{
					transform: "rotate(-90deg)",
					background: backgroundColor,
					borderRadius: "50%",
				}}
			>
				<circle
					ref={pieRef}
					r={radius}
					cx={size / 2}
					cy={size / 2}
					style={{
						fill: fillColor,
						stroke: strokeColor,
						strokeWidth: strokeWidth,
						strokeDasharray: `${increasing ? 0 : total} ${total}`,
					}}
				/>
			</svg>
			<div
				style={{
					position: "absolute",
					textShadow: "0px 0px 5px #000",
					color: textColor,
					fontWeight: "bold",
					fontSize: fontSize,
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>{`${percentage}%`}</div>
		</figure>
	);
};

export default PieChart;
