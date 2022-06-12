<script>
	import Dropdown from './Dropdown.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-transparent pt-6 px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-xl font-semibold text-gray-900">Tabla</h1>
			<p class="mt-2 text-sm text-gray-700">O sea, una tabla, aquí se muestra información y eso</p>
		</div>
		<div class="mt-4 sm:mt-0 sm:ml-16 flex gap-4">
			<Dropdown />
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-prihover focus:outline-none sm:w-auto"
				>Aplicar</button
			>
		</div>
	</div>
	<div class="mt-8 flex flex-col">
		<div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle">
				<div class="shadow-sm ring-0 ring-black ring-opacity-5">
					<table class="min-w-full border-separate" style="border-spacing: 0">
						<thead class="bg-gray-50 border-none">
							<tr>
								<th
									scope="col"
									class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
									>Nombre</th
								>
								<th
									scope="col"
									class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
									>Clase</th
								>
								<th
									scope="col"
									class="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
									>Elemento</th
								>
								<th
									scope="col"
									class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
									>Técnica Principal</th
								>
								<!-- <th
									scope="col"
									class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
								>
									<span class="sr-only">Edit</span>
								</th> -->
							</tr>
						</thead>
						<tbody class="bg-white">
							<tr>
								<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                           Sasuke Uchiha
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                           Ninja
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                           Rayo
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                           Chidori
                        </td>
								<!-- <td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
								</td> -->
							</tr>
                     <tr>
								<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                           Naruto Uzumaki
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                           Ninja
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                           Viento
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                           Rasengan
                        </td>
								<!-- <td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
								</td> -->
							</tr>
                     <tr>
								<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                           Kakashi Hatake
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                           Ninja
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                           Rayo
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                           Leer hentai
                        </td>
								<!-- <td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
								</td> -->
							</tr>
                     <tr>
								<td class="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                           Sakura Haruno
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                           Ninja
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                           Agua
                        </td>
								<td class="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                           Ser inútil
                        </td>
								<!-- <td class="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
								</td> -->
							</tr>

							<!-- More people... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
