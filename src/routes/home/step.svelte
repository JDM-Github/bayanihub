<script>
    import { fade } from 'svelte/transition';

    let steps = [
		{
			title: "Start a Fundraiser",
			description: "Ipsum sit adipisicing laborum incididunt labore.",
			icon: "/Icon/fundraiser.webp"
		},
		{
			title: "Share & Raise",
			description: "Deserunt amet voluptate est amet nostrud in dolor deserunt velit sit voluptate.",
			icon: "/Icon/share.png"
		},
		{
			title: "Receive Donations",
			description: "Mollit ex magna sunt Lorem fugiat irure duis ex elit amet adipisicing.",
			icon: "/Icon/donate.png"
		},
		{
			title: "Make an Impact",
			description: "Tempor do minim amet reprehenderit minim irure irure voluptate veniam ut aute sunt.",
			icon: "/Icon/impact.png"
		}
	];
</script>

<section class="bg-light-yellowish py-24 px-6 text-center">
	<div class="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12">
		{#each steps as step, index}
			<div
				transition:fade
				class="bg-light-yellowish p-6 w-64 text-center transition duration-300 group cursor-pointer flex flex-col items-center"
			>
				<img
					src={step.icon}
					alt="Home Icon"
					class="w-32 h-32 mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105"
				/>

				<h3 class="text-xl font-semibold text-gray-800">{step.title}</h3>
				<p class="text-gray-600 mt-2">{step.description}</p>
			</div>
		{/each}
	</div>
</section>
