<script>
	import Checkbox from './Checkbox.svelte';

	import { fade, fly, slide, draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isMenuDropped = false;

	function handleMenu() {
		isMenuDropped = !isMenuDropped;
	}
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			on:click={handleMenu}
			class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
		>
			Filtros
			<!-- Heroicon name: solid/chevron-down -->
			<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>

	<!--
     Dropdown menu, show/hide based on menu state.
 
     Entering: "transition ease-out duration-100"
       From: "transform opacity-0 scale-95"
       To: "transform opacity-100 scale-100"
     Leaving: "transition ease-in duration-75"
       From: "transform opacity-100 scale-100"
       To: "transform opacity-0 scale-95"
   -->
	{#if isMenuDropped}
		<div
			class="z-50 {!isMenuDropped &&
				'hidden'} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			transition:slide={{ delay: 50, duration: 330, easing: quintOut }}
		>
			<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
			<div class="py-1" role="none">
				<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Filtro 1</a>
				<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Filtro 1.1</a>
			</div>
			<div class="py-1" role="none">
				<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Filtro 2</a>
				<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Filtro 2.1</a>
			</div>
			<div class="py-1" role="none">
				<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Otro filtro más</a>
				<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Lo de arriba pero .1</a>
			</div>
			<div class="py-1" role="none">
				<a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">El último</a>
			</div>
		</div>
	{/if}
</div>
