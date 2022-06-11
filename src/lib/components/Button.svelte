<script>
	export let text;
	export let variant;
	export let href;
	export let target;
	export let type = 'button';
	export let wide = false;

	let variants = {
		primary: 'text-white bg-primary hover:bg-prihover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prihover',
		secondary: '',
		tertiary: ''
	};
</script>

<button {type}>
	<a {href} {target} class="base {variants[variant]} {wide && 'w-full'}">
		{text}
	</a>
</button>

<style lang="postcss">
	.base {
		@apply flex items-center
      px-6 py-2
      border border-transparent
      text-sm font-medium
      rounded-md shadow-sm;
	}
</style>
