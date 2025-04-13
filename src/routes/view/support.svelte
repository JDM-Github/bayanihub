<script lang="ts">
	import type { StoryInterface } from "$lib/types";
    export let story: StoryInterface;
    export let progressWidth: number;
    export let openModal: any;
</script>

<div class="bg-yellowish2 p-4 md:p-6 rounded-lg shadow-md" id="support">
	<div class="flex justify-between items-center mb-3 md:mb-4">
		<h2 class="text-lg md:text-2xl font-semibold text-yellowish5">Support This Cause</h2>
		<span class="text-md md:text-lg font-bold text-green-600">₱{story.raised} / ₱{story.goal}</span>
	</div>

	<div class="w-full bg-yellowish h-3 md:h-4 rounded-full overflow-hidden mb-3 md:mb-4">
		<div
			class="bg-yellowish4 h-full transition-all duration-[1500ms]"
			style="width: {progressWidth}%"
		></div>
	</div>

	<button
		class="w-full bg-yellowish4 text-sm md:text-base text-white font-semibold py-2 md:py-3 rounded-lg shadow-md hover:bg-yellowish5 transition duration-300"
		on:click={openModal}
	>
		Donate Now
	</button>
</div>
