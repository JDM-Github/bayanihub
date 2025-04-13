<script lang="ts">
	import type { StoryInterface } from "$lib/types";
	import { getCachedImage } from '$lib/utils/imageCache';

	export let story: StoryInterface;
	export let readMore: (slug: string) => void;
	export let onOpen: any;
</script>

<div class="bg-yellowish rounded-lg shadow-md sm:shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-101">
	{#await getCachedImage(story.image) then cachedImage}
		<img src={cachedImage} alt={story.title} class="w-full h-48 sm:h-56 md:h-60 object-cover" />		
	{/await}

	<div class="p-4 sm:p-5">
		<span class="text-xs sm:text-sm font-semibold text-yellowish4 uppercase">{story.category}</span>
		<h3 class="text-lg sm:text-xl font-bold text-gray-800 mt-1 sm:mt-2">{story.title}</h3>
		<p class="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">{story.storyDescription.slice(0, 50)}...</p>

		<div class="mt-3 sm:mt-4">
			<div class="w-full bg-gray-200 rounded-full h-2 sm:h-3">
				<div
					class="bg-yellowish4 h-2 sm:h-3 rounded-full"
					style="width: {Math.min((story.raised / story.goal) * 100, 100)}%"
				></div>
			</div>
			<p class="text-xs text-gray-600 mt-1">
				Raised: <strong>₱{story.raised.toLocaleString()}</strong> / ₱{story.goal.toLocaleString()}
			</p>
		</div>

		<div class="mt-4 flex space-x-2 sm:space-x-3">
			<button
				class="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-yellowish4 text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-yellowish3 hover:text-yellowish transition cursor-pointer"
				on:click={onOpen}
			>
				Donate Now
			</button>
			<button
				class="px-3 py-1.5 sm:px-4 sm:py-2 bg-yellowish4 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-yellowish5 transition cursor-pointer"
				on:click={() => {readMore(story.slug)}}
			>
				Read More
			</button>
		</div>
	</div>
</div>
