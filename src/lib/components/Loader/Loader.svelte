<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
<script lang="ts" context="module">
	type LoaderVariants = 'spinner' | 'dots' | 'bars' | 'balls' | 'grid';
	export type { LoaderVariants };
</script>

<script lang="ts">
	export let variant: LoaderVariants = 'spinner';

	const adjustment = 'transform: translateY(-0.1rem);';
</script>

{#if variant == 'spinner'}
	<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
	<svg
		class="inline"
		style:height="1em"
		style={adjustment}
		viewBox="0 0 38 38"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
	>
		<g fill="none" fill-rule="evenodd">
			<g transform="translate(3 3)" stroke-width="6">
				<circle stroke-opacity=".5" cx="16" cy="16" r="16" />
				<path d="M32 16c0-9.94-8.06-16-16-16">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 16 16"
						to="360 16 16"
						dur="1s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
		</g>
	</svg>
{:else if variant == 'dots'}
	<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
	<svg
		class="inline"
		style:height="0.4em"
		style={adjustment}
		viewBox="0 0 120 30"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
	>
		<circle cx="15" cy="15" r="15">
			<animate
				attributeName="r"
				from="15"
				to="15"
				begin="0s"
				dur="0.8s"
				values="15;9;15"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="fill-opacity"
				from="1"
				to="1"
				begin="0s"
				dur="0.8s"
				values="1;.5;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="60" cy="15" r="9" fill-opacity="0.3">
			<animate
				attributeName="r"
				from="9"
				to="9"
				begin="0s"
				dur="0.8s"
				values="9;15;9"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="fill-opacity"
				from="0.5"
				to="0.5"
				begin="0s"
				dur="0.8s"
				values=".5;1;.5"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="105" cy="15" r="15">
			<animate
				attributeName="r"
				from="15"
				to="15"
				begin="0s"
				dur="0.8s"
				values="15;9;15"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="fill-opacity"
				from="1"
				to="1"
				begin="0s"
				dur="0.8s"
				values="1;.5;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
	</svg>
{:else if variant == 'bars'}
	<svg
		class="inline"
		style:height="1em"
		viewBox="0 0 135 140"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		style={adjustment}
	>
		<rect y="10" width="15" height="120" rx="6">
			<animate
				attributeName="height"
				begin="0.5s"
				dur="1s"
				values="120;110;100;90;80;70;60;50;40;140;120"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				begin="0.5s"
				dur="1s"
				values="10;15;20;25;30;35;40;45;50;0;10"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</rect>
		<rect x="30" y="10" width="15" height="120" rx="6">
			<animate
				attributeName="height"
				begin="0.25s"
				dur="1s"
				values="120;110;100;90;80;70;60;50;40;140;120"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				begin="0.25s"
				dur="1s"
				values="10;15;20;25;30;35;40;45;50;0;10"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</rect>
		<rect x="60" width="15" height="140" rx="6">
			<animate
				attributeName="height"
				begin="0s"
				dur="1s"
				values="120;110;100;90;80;70;60;50;40;140;120"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				begin="0s"
				dur="1s"
				values="10;15;20;25;30;35;40;45;50;0;10"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</rect>
		<rect x="90" y="10" width="15" height="120" rx="6">
			<animate
				attributeName="height"
				begin="0.25s"
				dur="1s"
				values="120;110;100;90;80;70;60;50;40;140;120"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				begin="0.25s"
				dur="1s"
				values="10;15;20;25;30;35;40;45;50;0;10"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</rect>
		<rect x="120" y="10" width="15" height="120" rx="6" fill="currentColor">
			<animate
				attributeName="height"
				begin="0.5s"
				dur="1s"
				values="120;110;100;90;80;70;60;50;40;140;120"
				calcMode="linear"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				begin="0.5s"
				dur="1s"
				values="10;15;20;25;30;35;40;45;50;0;10"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</rect>
	</svg>
{:else if variant == 'balls'}
	<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
	<svg
		class="inline"
		style:height="1em"
		viewBox="0 0 57 57"
		stroke="currentColor"
		preserveAspectRatio="xMidYMid meet"
		style={adjustment}
	>
		<g fill="currentColor" fill-rule="evenodd">
			<g transform="translate(1 1)" stroke-width="2">
				<circle cx="5" cy="50" r="5">
					<animate
						attributeName="cy"
						begin="0s"
						dur="2.2s"
						values="50;5;50;50"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="cx"
						begin="0s"
						dur="2.2s"
						values="5;27;49;5"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx="27" cy="5" r="5">
					<animate
						attributeName="cy"
						begin="0s"
						dur="2.2s"
						from="5"
						to="5"
						values="5;50;50;5"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="cx"
						begin="0s"
						dur="2.2s"
						from="27"
						to="27"
						values="27;49;5;27"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx="49" cy="50" r="5">
					<animate
						attributeName="cy"
						begin="0s"
						dur="2.2s"
						values="50;50;5;50"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="cx"
						from="49"
						to="49"
						begin="0s"
						dur="2.2s"
						values="49;5;27;49"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</g>
	</svg>
{:else if variant == 'grid'}
	<svg
		class="inline"
		style:height="1em"
		style={adjustment}
		viewBox="0 0 105 105"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
	>
		<circle cx="12.5" cy="12.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="0s"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
			<animate
				attributeName="fill-opacity"
				begin="100ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="52.5" cy="12.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="300ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="52.5" cy="52.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="600ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="92.5" cy="12.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="800ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="92.5" cy="52.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="400ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="12.5" cy="92.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="700ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="52.5" cy="92.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="500ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
		<circle cx="92.5" cy="92.5" r="12.5">
			<animate
				attributeName="fill-opacity"
				begin="200ms"
				dur="1s"
				values="1;.2;1"
				calcMode="linear"
				repeatCount="indefinite"
			/>
		</circle>
	</svg>
{/if}
