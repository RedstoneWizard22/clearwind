<script lang="ts">
	import { parts } from '$lib/themes/theme-types';
	import type { ClearwindContext, Theme, Parts, COProp } from '$lib/themes/theme-types';
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
			const myTheme = theme[args.component];

			const classes = Object.fromEntries(parts[args.component].map((part) => [part, ''])) as Record<
				Parts[typeof args.component],
				string
			>;

			/// Check that theme and size props are correct
			if ('variant' in args.info && !myTheme.variants.includes(args.info.variant)) {
				console.warn(
					`Variant '${args.info.variant}' does not exist in theme for component '${args.component}'`,
					`\nAvailable variants: ${myTheme.variants.join(', ')}`
				);
			}
			if (
				'size' in args.info &&
				!myTheme.sizes.includes(args.info.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl')
			) {
				console.warn(
					`Size '${args.info.size}' does not exist in theme for component '${args.component}'`,
					`\nAvailable sizes: ${myTheme.sizes.join(', ')}`
				);
			}

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
					toMerge = prop(args.info);
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
