<script>
	import Button from '../lib/components/Button.svelte';
	// import { fetch } from 'node-fetch';

	// const url = '';
	// const options = { method: 'GET', headers: { Accept: 'application/json' } };

	// function fetchFrom() {
	// 	fetch(url, options)
	// 		.then((res) => res.json())
	// 		.then((json) => console.log(json))
	// 		.catch((err) => console.error('error:' + err));
	// }
</script>

<svelte:head>
	<title>Konohagakure</title>
</svelte:head>

<div class="flex justify-center items-center p-10">
	<Button text="Button" variant="primary" href="/signin" target="" />
</div>

<div class="flex justify-center">
	<a href="/home" class="px-10 py-3 bg-sky-300 hover:bg-sky-400 transition ease-in-out duration-100"> Ir al Home </a>
</div>
