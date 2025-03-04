<script lang="ts">
	import type { StoryInterface } from '$lib/types';
	import Story from '../components/story.svelte';

	export let stories: StoryInterface[];

	let currentPage = 1;
	let storiesPerPage = 6;
	$: totalPages = Math.ceil(stories.length / storiesPerPage);
	$: paginatedStories = stories.slice(
		(currentPage - 1) * storiesPerPage,
		currentPage * storiesPerPage
	);

	function readMore(slug: string) {
		window.location.href = `/view/${slug}`;
	}

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			setTimeout(() => {
				const section = document.getElementById('story-section');
				if (section) {
					const offset = 50;
					const top = section.getBoundingClientRect().top + window.scrollY - offset;

					window.scrollTo({ top, behavior: 'smooth' });

					section.style.transition = 'background-color 0.8s ease';
					section.style.backgroundColor = '#90B5E6FF';
					setTimeout(() => {
						section.style.backgroundColor = 'transparent';
					}, 200);
				}
			}, 50);
		}
	}

	function visiblePages() {
		const pages = [];
		const maxVisible = 5;

		let start = Math.max(1, currentPage - 1);
		let end = Math.min(totalPages, start + maxVisible - 1);

		if (end - start + 1 < maxVisible) {
			start = Math.max(1, end - maxVisible + 1);
		}

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	}
</script>

<section class="py-12 bg-white" id="story-section">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<h2 class="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
			Available Fundraising Stories
		</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
			{#each paginatedStories as story}
				<Story {story} {readMore} />
			{/each}
		</div>

		<div class="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
			{#if currentPage > 1}
				<button
					class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-blue-300"
					on:click={() => goToPage(currentPage - 1)}
				>
					&lt;
				</button>
			{/if}

			{#each visiblePages() as page}
				<button
					class="w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200
				{page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-300'}"
					on:click={() => goToPage(page)}
				>
					{page}
				</button>
			{/each}

			{#if currentPage < totalPages}
				<button
					class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-blue-300"
					on:click={() => goToPage(currentPage + 1)}
				>
					&gt;
				</button>
			{/if}
		</div>
	</div>
</section>
