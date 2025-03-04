<script>
	import Footer from '$lib/components/Footer.svelte';
	import mission from '$assets/mission.png';
	import vision from '$assets/vision.png';
</script>

<main>
	<div class="bg-gray-50 text-gray-800">
		<div class="relative h-64 md:h-96 overflow-hidden">
			<img
				src="https://via.placeholder.com/1920x600"
				alt="About Us Banner"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white"
			>
				<h1 class="text-3xl md:text-5xl font-bold">About Us</h1>
				<p class="text-sm md:text-lg mt-2 max-w-2xl text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Committed to making a difference.
				</p>
			</div>
		</div>

		<div class="container mx-auto py-12 space-y-12 px-8 lg:px-32">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- Mission Image (fixed size) -->
				<div class="flex justify-center">
					<img
						src={mission}
						alt="Mission"
						class="rounded-lg shadow-md w-[400px] h-[200px] object-cover"
					/>
				</div>

				<!-- Mission Text (top-aligned) -->
				<div class="space-y-3">
					<h2 class="text-xl md:text-2xl font-semibold">Our Mission</h2>
					<p class="text-gray-600 leading-relaxed text-sm md:text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis vel
						vehicula ultrices. Nullam aliquam consequat urna, non pretium magna feugiat et.Laboris proident sunt amet amet consectetur. Mollit cupidatat enim sint esse amet laboris duis in Lorem dolore do. Nulla consectetur dolore irure quis anim occaecat excepteur. Nulla irure irure mollit est culpa cupidatat commodo ut sunt commodo. Nisi reprehenderit et voluptate non ad cillum cillum amet eiusmod.
					</p>
				</div>
			</div>

			<!-- Vision Section -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- Vision Text (top-aligned) -->
				<div class="space-y-3 order-2 md:order-1">
					<h2 class="text-xl md:text-2xl font-semibold">Our Vision</h2>
					<p class="text-gray-600 leading-relaxed text-sm md:text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies felis vel
						vehicula ultrices. Nullam aliquam consequat urna, non pretium magna feugiat et.Esse nisi adipisicing aute ad reprehenderit tempor anim aute aute. Laboris velit id qui officia fugiat sint aliquip aute reprehenderit mollit. Pariatur enim id anim consequat. Ut do anim ullamco do officia. Exercitation aliqua aute ut do elit excepteur velit pariatur tempor. Nisi veniam nisi excepteur anim adipisicing magna culpa. Adipisicing consectetur sunt ullamco dolore.
					</p>
				</div>

				<!-- Vision Image (fixed size) -->
				<div class="flex justify-center order-1 md:order-2">
					<img
						src={vision}
						alt="Vision"
						class="rounded-lg shadow-md w-[400px] h-[200px] object-cover"
					/>
				</div>
			</div>
		</div>

		<hr class="border-gray-300 my-8" />

		<div class="container mx-auto text-center py-12 space-y-6 px-4 md:px-8">
			<h2 class="text-3xl font-bold">Who We Are</h2>
			<p class="text-gray-600 max-w-3xl mx-auto leading-relaxed">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis fermentum enim at
				tristique. In dignissim sapien nec dolor dapibus tristique.Reprehenderit mollit fugiat voluptate Lorem non id sit proident nostrud velit aliquip sint duis eiusmod. 
			</p>
			<div
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center mt-12   "
			>
				<div class="flex flex-col items-center space-y-2">
					<img
						src="https://via.placeholder.com/100"
						alt="Team Member"
						class="w-20 h-20 rounded-full border border-gray-300 shadow"
					/>
					<div class="text-center">
						<p class="font-medium text-gray-800">Id ad enim</p>
						<p class="text-sm text-gray-500">Role</p>
					</div>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img
						src="https://via.placeholder.com/100"
						alt="Team Member"
						class="w-20 h-20 rounded-full border border-gray-300 shadow"
					/>
					<div class="text-center">
						<p class="font-medium text-gray-800">JDM</p>
						<p class="text-sm text-gray-500">Role</p>
					</div>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img
						src="https://via.placeholder.com/100"
						alt="Team Member"
						class="w-20 h-20 rounded-full border border-gray-300 shadow"
					/>
					<div class="text-center">
						<p class="font-medium text-gray-800">Lorem Ipsum</p>
						<p class="text-sm text-gray-500">Role</p>
					</div>
				</div>
				<div class="flex flex-col items-center space-y-2">
					<img
						src="https://via.placeholder.com/100"
						alt="Team Member"
						class="w-20 h-20 rounded-full border border-gray-300 shadow"
					/>
					<div class="text-center">
						<p class="font-medium text-gray-800">Dolor Sit</p>
						<p class="text-sm text-gray-500">Role</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Contact Section -->
		<div class="bg-gray-100 py-12">
			<div class="container mx-auto text-center space-y-4 px-4 md:px-8">
				<h2 class="text-2xl font-semibold">Contact Us</h2>
				<p class="text-gray-600 max-w-2xl mx-auto">
					Have questions? Reach out to us and we’ll get back to you as soon as possible.
				</p>
				<div class="space-y-2 text-gray-700">
					<p>Address: Lorem Ipsum Street, Suite 123, Ipsum City, IP 4567</p>
					<p>Email: contact@loremipsum.org</p>
				</div>
				<div class="flex justify-center space-x-6 mt-4">
					<a
						href="test.com"
						class="text-blue-600 hover:text-blue-800 transition"
						aria-label="Visit our Facebook page"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M22 12a10 10 0 10-11 9.95V15h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-2c-.6 0-1 .4-1 1v2h3l-.5 3h-2.5v6a10 10 0 009-9.95z"
							/>
						</svg>
					</a>

					<a
						href="#"
						class="text-blue-400 hover:text-blue-600 transition"
						aria-label="Visit our Twitter page"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M22 5.92a8.43 8.43 0 01-2.45.67A4.33 4.33 0 0021.44 4c-.85.5-1.8.85-2.81 1.04A4.26 4.26 0 0015.5 4c-2.34 0-4.25 1.9-4.25 4.25 0 .33.04.65.11.96A12.07 12.07 0 013 5.67a4.25 4.25 0 001.32 5.67A4.16 4.16 0 012 11v.05c0 2.1 1.5 3.85 3.45 4.25a4.27 4.27 0 01-1.92.07 4.26 4.26 0 003.97 2.96 8.55 8.55 0 01-5.29 1.82A8.36 8.36 0 012 20.34a12.04 12.04 0 006.56 1.92c7.87 0 12.17-6.5 12.17-12.15l-.01-.55A8.67 8.67 0 0022 5.92z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</main>
