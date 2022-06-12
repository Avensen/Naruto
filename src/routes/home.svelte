<script>
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';

	import { fade, fly, slide, draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
import Table from '../lib/components/Table.svelte';

	let profileMenuDropped = false;
	let name = 'Sasuke Uchiha';
	let tier = 'Jounin';
	let thumbnail = 'sasuke.jpg';

	function toggleProfileMenu() {
		profileMenuDropped = !profileMenuDropped;
	}
</script>

<div class="min-h-full">
	<header class="pb-24 bg-gradient-to-br from-primary to-primary/70">
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="relative flex flex-wrap items-center justify-center lg:justify-between">
				<!-- Logo -->
				<div class="absolute left-0 py-5 flex-shrink-0 lg:static">
					<a href="#">
						<span class="sr-only">Konohagakure</span>
						<!-- https://tailwindui.com/img/logos/workflow-mark-cyan-200.svg -->
						<img class="h-10 w-auto" src="logo_white.svg" alt="Konohagakure Logo" />
					</a>
				</div>

				<!-- Right section on desktop -->
				<div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
					<!-- Profile dropdown -->
					<div class="ml-4 relative flex-shrink-0">
						<div>
							<button
								type="button"
								on:click={toggleProfileMenu}
								class="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="sr-only">Open user menu</span>
								<img class="h-8 w-8 rounded-full" src={thumbnail} alt="" />
							</button>
						</div>

						<!--
               Dropdown menu, show/hide based on menu state.
 
               Entering: ""
                 From: ""
                 To: ""
               Leaving: "transition ease-in duration-75"
                 From: "transform opacity-100 scale-100"
                 To: "transform opacity-0 scale-95"
             -->
						{#if profileMenuDropped}
							<div
								class="{!profileMenuDropped &&
									'hidden'} origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
								transition:slide={{ delay: 50, duration: 330, easing: quintOut }}
							>
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary" role="menuitem" tabindex="-1" id="user-menu-item-0"
									>Inicio</a
								>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:text-primary" role="menuitem" tabindex="-1" id="user-menu-item-0"
									>Mi Perfil</a
								>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:text-red-400 " role="menuitem" tabindex="-1" id="user-menu-item-2"
									>Salir de la Aldea</a
								>
							</div>
						{/if}
					</div>
				</div>

				<div class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
					<div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center invisible">
						<div class="hidden lg:block lg:col-span-2">
							<nav class="flex space-x-4">
								<a href="#" class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10" aria-current="page">
									Inicio
								</a>
								<a href="#" class="text-white text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> Mi Perfil </a>
							</nav>
						</div>
						<div class="px-12 lg:px-0">
							<div class="max-w-xs mx-auto w-full lg:max-w-md flex justify-end">
								<Dropdown />
							</div>
						</div>
					</div>
				</div>

				<!-- Menu button -->
				<div class="absolute right-0 flex-shrink-0 lg:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-white hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!--
               Heroicon name: outline/menu
 
               Menu open: "hidden", Menu closed: "block"
             -->
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<!--
               Heroicon name: outline/x
 
               Menu open: "block", Menu closed: "hidden"
             -->
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on mobile menu state. -->
		<div class="hidden">
			<!--
         Mobile menu overlay, show/hide based on mobile menu state.
 
         Entering: "duration-150 ease-out"
           From: "opacity-0"
           To: "opacity-100"
         Leaving: "duration-150 ease-in"
           From: "opacity-100"
           To: "opacity-0"
       -->
			<div class="z-20 fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />

			<!--
         Mobile menu, show/hide based on mobile menu state.
 
         Entering: "duration-150 ease-out"
           From: "opacity-0 scale-95"
           To: "opacity-100 scale-100"
         Leaving: "duration-150 ease-in"
           From: "opacity-100 scale-100"
           To: "opacity-0 scale-95"
       -->
			<div class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
				<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
					<div class="pt-3 pb-2">
						<div class="flex items-center justify-between px-4">
							<div>
								<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg" alt="Workflow" />
							</div>
							<div class="-mr-2">
								<button
									type="button"
									class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
								>
									<span class="sr-only">Close menu</span>
									<!-- Heroicon name: outline/x -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						</div>
						<div class="mt-3 px-2 space-y-1">
							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Home</a>

							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Profile</a>

							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Resources</a>

							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
								>Company Directory</a
							>

							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Openings</a>
						</div>
					</div>
					<div class="pt-4 pb-2">
						<div class="flex items-center px-5">
							<div class="flex-shrink-0">
								<img
									class="h-10 w-10 rounded-full"
									src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</div>
							<div class="ml-3 min-w-0 flex-1">
								<div class="text-base font-medium text-gray-800 truncate">Sasuke Uchiha</div>
								<div class="text-sm font-medium text-gray-500 truncate">chelsea.hagon@example.com</div>
							</div>
							<button
								type="button"
								class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
							>
								<span class="sr-only">View notifications</span>
								<!-- Heroicon name: outline/bell -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button>
						</div>
						<div class="mt-3 px-2 space-y-1">
							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Your Profile</a
							>

							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Settings</a>

							<a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">Sign out</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main class="-mt-24 pb-8">
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 class="sr-only">Profile</h1>
			<!-- Main 3 column grid -->
			<div class="grid grid-cols-1 gap-4 items-start">
				<!-- Left column -->
				<div class="grid grid-cols-1 gap-4 lg:col-span-2">
					<!-- Welcome panel -->
					<section aria-labelledby="profile-overview-title">
						<div class="rounded-lg bg-white overflow-hidden shadow">
							<h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
							<div class="bg-white p-6">
								<div class="sm:flex sm:items-center sm:justify-between">
									<div class="sm:flex sm:space-x-5">
										<div class="flex-shrink-0">
											<img class="mx-auto h-20 w-20 rounded-full" src={thumbnail} alt="" />
										</div>
										<div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
											<p class="text-sm font-medium text-gray-600">Bienvenido,</p>
											<p class="text-xl font-bold text-gray-900 sm:text-2xl">{name}</p>
											<p class="text-sm font-medium text-gray-600">{tier}</p>
										</div>
									</div>
									<div class="mt-5 flex justify-center sm:mt-0">
										<a
											href="#"
											class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
										>
											Ver Perfil
										</a>
									</div>
								</div>
							</div>
							<div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
								<div class="px-6 py-5 text-sm font-medium text-center">
									<span class="text-gray-900">12</span>
									<span class="text-gray-600">Técnicas Dominadas</span>
								</div>

								<div class="px-6 py-5 text-sm font-medium text-center">
									<span class="text-gray-900">4</span>
									<span class="text-gray-600">Misiones Completadas</span>
								</div>

								<div class="px-6 py-5 text-sm font-medium text-center">
									<span class="text-gray-900">1</span>
									<span class="text-gray-600">Pan por la Libreta</span>
								</div>
							</div>
						</div>
					</section>

					<!-- Actions panel -->
					<section aria-labelledby="quick-links-title">
						<div class="rounded-lg bg-gray-50 shadow">
							<Table />
						</div>
					</section>
				</div>

			</div>
		</div>
	</main>
	<footer>
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
			<div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
				<span class="block sm:inline">&copy; Gobierno de Konoha.</span> <span class="block sm:inline">Todas las libertades reservadas.</span>
			</div>
		</div>
	</footer>
</div>
