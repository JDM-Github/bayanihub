<script>
	import { fade } from 'svelte/transition';

	let benefits = [
		{
			title: "Secure & Reliable",
			description: "Commodo ad consequat dolor amet cillum aliquip fugiat minim commodo.",
			icon: "fas fa-shield-alt"
		},
		{
			title: "Fast & Easy",
			description: "Qui consequat do qui adipisicing excepteur nulla consectetur officia veniam amet qui.",
			icon: "fas fa-bolt"
		},
		{
			title: "Zero Hidden Fees",
			description: "Nostrud pariatur elit aute commodo reprehenderit ut excepteur duis ex est laboris.",
			icon: "fas fa-dollar-sign"
		},
		{
			title: "Community Support",
			description: "Quis deserunt laboris dolore ullamco elit laborum ex.",
			icon: "fas fa-users"
		}
	];
</script>

<section class="bg-light-yellowish1 py-16 px-4 text-center flex flex-col items-center">
	<h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
	<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
		Tempor officia quis ad veniam qui voluptate adipisicing laboris mollit.
	</p>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
		{#each benefits as benefit, index}
			<div transition:fade class="bg-yellowish shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-transform transform hover:-translate-y-1">
				<div class="bg-yellowish4 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
					<i class="{benefit.icon} text-3xl text-white"></i>
				</div>
				<h3 class="text-lg font-semibold text-gray-800">{benefit.title}</h3>
				<p class="text-gray-600 text-sm mt-2">{benefit.description}</p>
			</div>
		{/each}
	</div>
</section>
