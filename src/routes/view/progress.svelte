<script lang="ts">
	import type { StoryInterface } from '$lib/types';

	export let story: StoryInterface;

	let showPreProgress = false;
	let showDuringProgress = false;
	let showPostProgress = false;

	function togglePreProgress() {
		showPreProgress = !showPreProgress;
	}

	function toggleDuringProgress() {
		showDuringProgress = !showDuringProgress;
	}

	function togglePostProgress() {
		showPostProgress = !showPostProgress;
	}
</script>

<div class="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-gray-200" id="progress">
	<h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Proof of Progress</h2>

	<div class="space-y-6">

		<div class="space-y-2">
			<div class="flex justify-between items-center">
				<h3 class="text-lg font-medium text-gray-700">Pre Progress</h3>
				<button
					class="text-blue-600 text-sm hover:text-blue-800 transition font-bold"
					on:click={togglePreProgress}
				>
					{showPreProgress ? 'Hide ▲' : 'Details ›'}
				</button>
			</div>
			<p class="text-sm text-gray-600">Initial state before work started.</p>
			{#if showPreProgress}
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
					{#each story.proofImages as image}
						<img
							src={image}
							alt="Pre Progress"
							class="rounded-md border border-gray-300 w-full h-36 object-cover"
						/>
					{/each}
				</div>
			{/if}
		</div>

		<div class="space-y-2">
			<div class="flex justify-between items-center">
				<h3 class="text-lg font-medium text-gray-700">During Progress</h3>
				<button
					class="text-blue-600 text-sm hover:text-blue-800 transition font-bold"
					on:click={toggleDuringProgress}
				>
					{showDuringProgress ? 'Hide ▲' : 'Details ›'}
				</button>
			</div>
			<p class="text-sm text-gray-600">Ongoing work captured in progress.</p>
			{#if showDuringProgress}
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
					{#each story.proofImages as image}
						<img
							src={image}
							alt="During Progress"
							class="rounded-md border border-gray-300 w-full h-36 object-cover"
						/>
					{/each}
				</div>
			{/if}
		</div>

		<div class="space-y-2">
			<div class="flex justify-between items-center">
				<h3 class="text-lg font-medium text-gray-700">Post Progress</h3>
				<button
					class="text-blue-600 text-sm hover:text-blue-800 transition font-bold"
					on:click={togglePostProgress}
				>
					{showPostProgress ? 'Hide ▲' : 'Details ›'}
				</button>
			</div>
			<p class="text-sm text-gray-600">Completed results showcasing final impact.</p>
			{#if showPostProgress}
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
					{#each story.proofImages as image}
						<img
							src={image}
							alt="Post Progress"
							class="rounded-md border border-gray-300 w-full h-36 object-cover"
						/>
					{/each}
				</div>
			{/if}
		</div>

	</div>
</div>
