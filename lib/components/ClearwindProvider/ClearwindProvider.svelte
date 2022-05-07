<script lang="ts">
	import parts from '$lib/_defines/parts';
	import type { ClearwindContext, Theme, ComponentTheme, Parts, COProp } from '$lib/_defines/types';
	import { setContext } from 'svelte';
	import { extendTailwindMerge } from 'tailwind-merge';

	const customTwMerge = extendTailwindMerge({
		theme: {},
		classGroups: {
			'tailwindcss-var': [{ $color: [() => true], $spacing: [() => true] }],
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

			/// Parse modifiers prop
			let modifiers: Record<string, string> = {};

			if (typeof args.modifiers == 'object' && !Array.isArray(args.modifiers)) {
				modifiers = args.modifiers;
			} else {
				const modifiersArray = args.modifiers
					? typeof args.modifiers == 'string'
						? args.modifiers.split(' ')
						: args.modifiers
					: [];

				for (const modifierDef of myTheme.modifiers) {
					let count = 0;
					for (const option of modifierDef.options) {
						if (modifiersArray.includes(option)) {
							modifiers[modifierDef.name] = option;
							count++;
						}
					}

					if (count == 0) {
						modifiers[modifierDef.name] = modifierDef.default;
					} else if (count > 1) {
						error(`Modifier '${modifierDef.name}' has more than one option selected.`);
					}
				}
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
					toMerge = prop(args.info, modifiers);
				} else {
					toMerge = prop;
				}

				for (const [part, value] of Object.entries(toMerge)) {
					if (part in classes) {
						//@ts-expect-error: Typescript doesn't have enough info to know this is safe
						classes[part] = customTwMerge(classes[part], value);
					} else {
						console.warn(`[Clearwind] ${part} is not a valid part for ${args.component}`);
					}
				}
			}

			function error(message: string) {
				console.error(
					`[Clearwind] ${message}\n\nAvailable modifiers for ${args.component}:\n${myTheme.modifiers
						.map((modifier) => `  - ${modifier.name}: ${modifier.options.join(', ')}`)
						.join('\n')}`
				);
			}
		},
	});
</script>

<slot />
