<script>
	export let story;
</script>

<div class="mt-6 bg-white p-6 rounded-lg shadow-md">
	<h3 class="text-xl font-semibold text-gray-800 mb-4">Latest Updates</h3>
	<ul class="space-y-3">
		{#each story.latestUpdates as update}
			<li class="border-l-4 border-blue-500 pl-4">
				<span class="text-sm text-gray-500">{update.date}</span>
				<p class="text-gray-700">{update.update}</p>
			</li>
		{/each}
	</ul>
</div>
