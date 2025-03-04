<script lang="ts">
	import type { StoryInterface } from "$lib/types";
    export let story: StoryInterface;
    export let progressWidth: number;
    export let showModal: boolean;
</script>

<div class="bg-white p-4 md:p-6 rounded-lg shadow-md" id="support">
	<div class="flex justify-between items-center mb-3 md:mb-4">
		<h2 class="text-lg md:text-2xl font-semibold text-gray-800">Support This Cause</h2>
		<span class="text-md md:text-lg font-bold text-green-600">₱{story.raised} / ₱{story.goal}</span>
	</div>

	<div class="w-full bg-gray-300 h-3 md:h-4 rounded-full overflow-hidden mb-3 md:mb-4">
		<div
			class="bg-green-500 h-full transition-all duration-[1500ms]"
			style="width: {progressWidth}%"
		></div>
	</div>

	<button
		class="w-full bg-blue-500 text-sm md:text-base text-white font-semibold py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
		on:click={() => (showModal = true)}
	>
		Donate Now
	</button>
</div>
