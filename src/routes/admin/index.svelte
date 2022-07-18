<script>
	import Dropdown from '$lib/components/Dropdown.svelte';

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import SelectMenu from '$lib/components/SelectMenu.svelte';

	let profileMenuDropped = false;
	let name = 'Sasuke Uchiha';
	let tier = 'Jounin';
	let thumbnail = '/sasuke.jpg';

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
					<a href="/">
						<span class="sr-only">Konohagakure</span>
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
					<div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
						<div class="hidden lg:block lg:col-span-2">
							<h1 class="text-3xl font-bold py-4 text-white">Mi Perfil</h1>
						</div>
						<div class="px-12 lg:px-0 invisible">
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
								<div class="text-base font-medium text-gray-800 truncate">{name}</div>
								<div class="text-sm font-medium text-gray-500 truncate">{tier}</div>
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
	<main class="relative -mt-24">
		<div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
			<div class="bg-white rounded-lg shadow overflow-hidden">
				<div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
					<aside class="py-6 lg:col-span-3">
						<h1 class="text-2xl text-center mt-2 mb-0 pb-6 border-b">Tablas</h1>
						<form class="space-y-1 flex flex-col justify-center items-start pl-8 gap-3 mt-10">
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="personas" id="personas" class="text-primary" />
								<label for="personas">Personas</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="ninjas" id="ninjas" class="text-primary" />
								<label for="ninjas">Ninjas</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="medico" id="medico" />
								<label for="medico">Ninjas Médico</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="genin" id="genin" />
								<label for="genin">Genins</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="chunin" id="chunin" />
								<label for="chunin">Chunins</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="jounin" id="jounin" />
								<label for="chunin">Jounins</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="bestia" id="bestia" />
								<label for="bestia">Bestias Míticas</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="tecnica" id="tecnica" />
								<label for="tecnica">Técnicas</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="curacion" id="curacion" />
								<label for="curacion">Técnicas de Curación</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="ataque" id="ataque" />
								<label for="ataque">Técnica de Ataque</label>
							</span>
							<span class="flex justify-center items-center gap-2">
								<input type="radio" name="equipo" id="equipo" />
								<label for="equipo">Equipo</label>
							</span>
						</form>
					</aside>

					<form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
						<!-- Profile section -->

						<script>
							import Dropdown from './Dropdown.svelte';
						</script>

						<!-- This example requires Tailwind CSS v2.0+ -->
						<div class="bg-transparent pt-0 px-4 sm:px-6 lg:px-8">
							<div class="mt-0 flex flex-col">
								<div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
									<div class="inline-block min-w-full py-2 align-middle">
										<div class="shadow-sm ring-0 ring-black ring-opacity-5">
											<table class="min-w-full border-separate" style="border-spacing: 0">
												<thead class="bg-gray-50 border-none">
													<tr>
														<th
															scope="col"
															class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
															>ID</th
														>
														<th
															scope="col"
															class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
															>Nombre</th
														>
														<th
															scope="col"
															class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
															>Tipo</th
														>
														<th
															scope="col"
															class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
															>ID de Invocador</th
														>
														<th
															scope="col"
															class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
														>
															<span class="sr-only">Edit</span>
														</th>
													</tr>
												</thead>
												<tbody class="bg-white">
													<tr>
														<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
															1
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"> Chukaku </td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
															Bestia con cola
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
															567
														</td>
														<td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
															<a href="#" class="text-primary hover:text-prihover">Editar<span class="sr-only"></span></a>
															<a href="#" class="text-red-500 hover:text-red-400 pl-5">Eliminar<span class="sr-only"></span></a>
														</td>
														
													</tr>
													<tr>
														<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
															2
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
															Matatabi
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
															Bestia con cola
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
															81
														</td>
														<td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
															<a href="#" class="text-primary hover:text-prihover">Editar<span class="sr-only"></span></a>
															<a href="#" class="text-red-500 hover:text-red-400 pl-5">Eliminar<span class="sr-only"></span></a>
														</td>
													</tr>
													<tr>
														<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
															3
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"> Isobu </td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
															Bestia con cola
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
															12
														</td>
														<td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
															<a href="#" class="text-primary hover:text-prihover">Editar<span class="sr-only"></span></a>
															<a href="#" class="text-red-500 hover:text-red-400 pl-5">Eliminar<span class="sr-only"></span></a>
														</td>
													</tr>
													<tr>
														<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
															4
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"> Son Goku </td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
															Bestia con cola
														</td>
														<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
															9
														</td>
														<td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
															<a href="#" class="text-primary hover:text-prihover">Editar<span class="sr-only"></span></a>
															<a href="#" class="text-red-500 hover:text-red-400 pl-5">
																Eliminar
																<span class="sr-only"></span></a>
														</td>
													</tr>
													
													<!-- More people... -->
												</tbody>
												
											</table>
											<div class="flex justify-end py-4 pr-8">
												<a href="" class="text-sky-400 flex justify-center items-center gap-1">
													<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
														<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
													 </svg>
													Añadir
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Privacy section -->
						<div class="pt-6 divide-y divide-gray-200">
							<div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
								<button
									type="button"
									class="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
									>Cancelar</button
								>
								<button
									type="submit"
									class="ml-5 bg-primary border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-prihover focus:outline-none"
									>Guardar</button
								>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
			<div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
				<span class="block sm:inline">&copy; Gobierno de Konoha.</span>
				<span class="block sm:inline">Todas las libertades reservadas.</span>
				<span class="block sm:inline"
					>Made with
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline text-primary" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clip-rule="evenodd"
						/>
					</svg>
					in <img src="svelte-logo.png" alt="Svelte Logo" class="h-4 w-auto inline" /></span
				>
			</div>
		</div>
	</footer>
</div>

<style>

</style>