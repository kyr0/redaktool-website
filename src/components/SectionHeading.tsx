export const SectionHeading: React.FC<any> = ({
	children,
	className = "",
	html = "",
}) => {
	return (
		<h2
			className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text pb-4 text-center text-transparent bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-500 ${className}`}
		>
			{children}
		</h2>
	);
};
