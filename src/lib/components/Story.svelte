<script lang="ts">
	import type { StoryInterface } from "$lib/types";

	export let story: StoryInterface;
</script>

<div class="bg-white rounded-lg shadow-md sm:shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-101">
	<!-- Image Section -->
	<img src={story.image} alt={story.title} class="w-full h-48 sm:h-56 md:h-60 object-cover" />

	<!-- Content Section -->
	<div class="p-4 sm:p-5">
		<span class="text-xs sm:text-sm font-semibold text-blue-500 uppercase">{story.category}</span>
		<h3 class="text-lg sm:text-xl font-bold text-gray-800 mt-1 sm:mt-2">{story.title}</h3>
		<p class="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">{story.storyDescription.slice(0, 50)}...</p>

		<!-- Progress Bar -->
		<div class="mt-3 sm:mt-4">
			<div class="w-full bg-gray-200 rounded-full h-2 sm:h-3">
				<div
					class="bg-blue-500 h-2 sm:h-3 rounded-full"
					style="width: {Math.min((story.raised / story.goal) * 100, 100)}%"
				></div>
			</div>
			<p class="text-xs text-gray-600 mt-1">
				Raised: <strong>₱{story.raised.toLocaleString()}</strong> / ₱{story.goal.toLocaleString()}
			</p>
		</div>

		<!-- Buttons -->
		<div class="mt-4 flex space-x-2 sm:space-x-3">
			<button
				class="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
			>
				Donate Now
			</button>
			<button
				class="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
			>
				Read More
			</button>
		</div>
	</div>
</div>
