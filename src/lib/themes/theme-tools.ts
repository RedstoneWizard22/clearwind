import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
	theme: {},
	classGroups: {
		var: [{ var: [() => true] }],
	},
	conflictingClassGroups: {},
});

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
				classes && (classString = customTwMerge(classString, classes));
			},
			get: () => classString,
		};
		return acc;
	}, {} as Classes<string>);
}

export type { Classes };
export { createClasses };
