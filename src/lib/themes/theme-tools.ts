import { twMerge } from 'tailwind-merge';

type Classes<T extends string> = {
	[K in T]: {
		override: (classes: string | null | 0 | false | undefined) => void;
		get: () => string;
	};
};

function createClasses<T extends string>(parts: Readonly<string[]>): Classes<T> {
	return parts.reduce((acc, part) => {
		let classString = '';

		acc[part] = {
			override: (classes) => {
				classes && (classString = twMerge(classString, classes));
			},
			get: () => classString,
		};
		return acc;
	}, {} as Classes<string>);
}

export type { Classes };
export { createClasses };
