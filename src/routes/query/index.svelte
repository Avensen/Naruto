<script>
	import { page } from '$app/stores';

	const id = $page.url.searchParams.get('id');

	const url = 'https://backend-konoha-c3.herokuapp.com/api';
	const options = {
		method: 'GET',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	async function getData(endpoint) {
		try {
			const res = await fetch(url + endpoint, options);
			const data = await res.json();
			console.log(data);
		} catch (e) {
			console.log(e.message + '. *error catched*');
		}
	}
</script>

<!-- <div>{id}</div> -->
<div class="text-xl">{id}</div>
<button
	class="px-6 py-2 bg-gray-200 m-5 hover:bg-slate-500 hover:text-white transition-all ease-in-out duration-75"
	on:click={() => {
		getData('/listar/Persona');
	}}
>
	Fetch Data
</button>
