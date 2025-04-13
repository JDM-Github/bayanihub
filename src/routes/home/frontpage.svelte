<script lang="ts">
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { cubicOut } from 'svelte/easing';

	import { getCachedImage, preloadImages } from '$lib/utils/imageCache';

	let isLoading = false;
	let hoveredIndex = writable(-1);
	let typedText = writable('');
	export let features: any;

	onMount(async () => {
		preloadImages(features.map((image: any) => image.src));
	});

	function typeEffect(text: string) {
		let i = 0;
		typedText.set('');
		let interval = setInterval(() => {
			typedText.update((current) => current + text[i]);
			i++;
			if (i === text.length) clearInterval(interval);
		}, 20);
	}
</script>

{#if isLoading || features.length === 0}
	<section>
		<div class="flex justify-center items-center h-screen">
			<div class="animate-spin rounded-full h-16 w-16 border-t-4 border-yellowish4"></div>
		</div>
	</section>
{:else}
	<section
		class="flex flex-col items-center justify-center text-center min-h-[50vh] lg:min-h-[60vh] bg-gradient-to-b from-yellowish3 to-yellowish5 p-8 mt-1"
	>
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
			{#each features as image, index (index)}
				<div
					class="relative group cursor-pointer transition-transform duration-200 hover:scale-105"
					role="button"
					tabindex="0"
					on:mouseenter={() => {
						hoveredIndex.set(index);
						typeEffect(image.description);
					}}
					on:mouseleave={() => {
						hoveredIndex.set(-1);
						typedText.set('');
					}}
					in:fly={{ y: 50, opacity: 0, duration: 800, delay: index * 150, easing: cubicOut }}
				>
					{#await getCachedImage(image.src) then cachedImage}
						<img
							src={""}
							alt={image.alt}
							class={`bg-yellowish rounded-xl object-cover shadow-lg ${image.size} ${image.yOffset}`}
						/>
					{/await}

					{#if $hoveredIndex === index}
						<div
							transition:fly={{ y: 10, opacity: 0, duration: 300 }}
							class="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-white text-gray-700 text-xs p-2 shadow-lg rounded-lg w-40 md:w-48 text-center ${image.yOffset} z-10"
						>
							<p>{$typedText}</p>
							<button
								class="mt-2 px-3 py-1 bg-yellowish3 text-white text-xs font-semibold rounded-lg shadow-md hover:bg-yellowish4 transition"
							>
								Read
							</button>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>
{/if}
