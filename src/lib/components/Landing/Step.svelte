<script>
    import { fade } from 'svelte/transition';

    let steps = [
		{
			title: "Start a Fundraiser",
			description: "Ipsum sit adipisicing laborum incididunt labore.",
			icon: "fas fa-hands-helping"
		},
		{
			title: "Share & Raise",
			description: "Deserunt amet voluptate est amet nostrud in dolor deserunt velit sit voluptate.",
			icon: "fas fa-share-square"
		},
		{
			title: "Receive Donations",
			description: "Mollit ex magna sunt Lorem fugiat irure duis ex elit amet adipisicing.",
			icon: "fas fa-donate"
		},
		{
			title: "Make an Impact",
			description: "Tempor do minim amet reprehenderit minim irure irure voluptate veniam ut aute sunt.",
			icon: "fas fa-heart"
		}
	];
</script>


<section class="bg-white py-24 px-6 text-center">
    <div class="flex flex-wrap justify-center gap-16">
        {#each steps as step, index}
            <div 
                transition:fade 
                class="bg-white p-6 w-64 text-center transition duration-300 group cursor-pointer"
            >
                <i 
                    class="{step.icon} text-4xl text-blue-500 mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                ></i>

                <h3 class="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p class="text-gray-600 mt-2">{step.description}</p>
            </div>
        {/each}
    </div>
</section>
