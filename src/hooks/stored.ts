import { getStorage } from "simply-persist-sync";

const storage = getStorage("local");

export interface Accessor<T> {
	get(): T;
	set(v: T): Accessor<T>;
}

const getIdentifier = (identifier: string) => `hyoban_website_${identifier}`;

export const stored = <T>(identifier: string, defaultValue: T) => {
	const id = getIdentifier(identifier);
	const accessor: Accessor<T> = {
		get: () => {
			try {
				const v = storage.get(id, defaultValue) as T;
				return v;
			} catch {
				return defaultValue;
			}
		},
		set: (v: T) => {
			storage.set(id, v);
			return accessor;
		},
	};
	return accessor;
};
