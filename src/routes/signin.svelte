<script>
	import Button from '../lib/components/Button.svelte';
</script>

<svelte:head>
   <title>Konohagakure - Puerta de la Aldea</title>
</svelte:head>

<div class="min-h-full h-screen flex">
	<div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<img class="h-12 w-auto" src="logo.svg" alt="Konohagakure Logo" />
				<h2 class="mt-6 text-3xl font-extrabold text-gray-900">Accede a la aldea</h2>
			</div>

			<div class="mt-8">
				<!-- <div>
					<div class="mt-6 relative">
						<div class="absolute inset-0 flex items-center" aria-hidden="true">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-sm">
							<span class="px-2 bg-white text-gray-500"> Iniciar sesión </span>
						</div>
					</div>
				</div> -->

				<div class="mt-6">
					<form action="#" method="POST" class="space-y-6">
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700"> Habitante </label>
							<div class="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
								/>
							</div>
						</div>

						<div class="space-y-1">
							<label for="password" class="block text-sm font-medium text-gray-700"> Palabra Secreta </label>
							<div class="mt-1">
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
								/>
							</div>
						</div>

						<!-- <div class="flex items-center justify-between">
							<div class="flex items-center">
								<input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-primary border-gray-300 rounded" />
								<label for="remember-me" class="ml-2 block text-sm text-gray-900"> Recuérdame </label>
							</div>

							<div class="text-sm">
								<a href="#" class="font-medium text-primary hover:text-prihover"> ¿Olvidaste tu contraseña? </a>
							</div>
						</div> -->

						<a href="/profiles/1">
							<button
								type="submit"
								class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-prihover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prihover"
								>Entrar a la aldea</button
							>
						</a>
					</form>
					<div class="mt-6">
						<div class="relative">
							<div class="absolute inset-0 flex items-center">
								<div class="w-full border-t border-gray-300" />
							</div>
							<div class="relative flex justify-center text-sm">
								<span class="px-2 bg-white text-gray-500"> ¿Eres nuevo? </span>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="w-full mt-6 flex justify-center py-2 px-4 border-2 border-primary rounded-md shadow-sm text-sm font-medium text-primary bg-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prihover hover:border-transparent"
								>Registrarme</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="hidden lg:block relative w-0 flex-1">
		<img class="absolute inset-0 h-full w-full object-cover bg-left" src="signin.jpg" alt="" />
	</div>
</div>
