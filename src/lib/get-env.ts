export const getEnv = (key: string) => {
	if (typeof globalThis.import !== "undefined") {
		return import.meta.env[key];
	}
	if (typeof process !== "undefined") {
		return process.env[key];
	}
	return undefined;
};
