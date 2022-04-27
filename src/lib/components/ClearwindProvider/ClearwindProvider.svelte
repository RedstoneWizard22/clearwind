<script lang="ts">
	import parts from '$lib/_defines/parts';
	import type { ClearwindContext, Theme, ComponentTheme, Parts, COProp } from '$lib/_defines/types';
	import { setContext } from 'svelte';
	import { extendTailwindMerge } from 'tailwind-merge';

	const customTwMerge = extendTailwindMerge({
		theme: {},
		classGroups: {
			var: [{ var: [() => true] }],
		},
		conflictingClassGroups: {},
	});

	export let theme: Theme;

	$: setContext<ClearwindContext>('clearwind', {
		theme,
		twMerge: customTwMerge,
		getClasses: (args) => {
			const myTheme = theme[args.component] as ComponentTheme<typeof args.component>;

			const classes = Object.fromEntries(parts[args.component].map((part) => [part, ''])) as Record<
				Parts[typeof args.component],
				string
			>;

			/// Split variants prop into array if it's a (space separated) string
			const variantsArray = args.variants
				? Array.isArray(args.variants)
					? args.variants
					: args.variants.split(' ')
				: Array.isArray(myTheme.defaultVariant)
				? myTheme.defaultVariant
				: myTheme.defaultVariant.split(' ');

			const variants = new Set(variantsArray);

			/// Check that all variants are valid
			variantsArray.forEach((variant) => {
				if (!variantsArray.includes(variant)) {
					console.warn(
						`Variant '${variant}' does not exist in theme for component '${args.component}'`,
						`\nAvailable variants: ${myTheme.variants.join(', ')}`
					);
				}
			});

			/// Order matters!
			// 1) Apply theme core
			applyCOProp(myTheme.core);
			// 2) Apply theme extension
			myTheme.extension && applyCOProp(myTheme.extension);
			// 3) Apply co prop
			args.co && applyCOProp(args.co);
			// 4) Apply bco prop
			classes[args.rcoTarget] = customTwMerge(classes[args.rcoTarget], args.rco);
			// 5) Apply required classes
			args.requiredClasses && applyCOProp(args.requiredClasses);

			return classes;

			function applyCOProp(prop: COProp<typeof args.component>) {
				let toMerge: Partial<Record<Parts[typeof args.component], string>>;
				if (typeof prop === 'function') {
					toMerge = prop(args.info, variants);
				} else {
					toMerge = prop;
				}

				for (const [part, value] of Object.entries(toMerge)) {
					if (part in classes) {
						//@ts-expect-error: Typescript doesn't have enough info to know this is safe
						classes[part] = customTwMerge(classes[part], value);
					} else {
						console.warn(`${part} is not a valid part for ${args.component}`);
					}
				}
			}
		},
	});
</script>

<slot />
