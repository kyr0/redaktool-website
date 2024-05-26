export const Link = (props: any) => {
	return (
		<a {...props} href={props?.href || ""} onClick={props?.onClick}>
			{props?.children}
		</a>
	);
};
