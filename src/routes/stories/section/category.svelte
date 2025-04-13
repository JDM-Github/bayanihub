<!-- ----------------------------------------------------------------- -->
<!-- SCRIPT -->
<!-- ----------------------------------------------------------------- -->
<script lang="ts">
	// IMPORT
	import Category from "../components/category.svelte";
	import type { CategoryInterface } from '$lib/types';

	// VARIABLES
	export let categories: CategoryInterface[];
	let selectedCategory = 'All Campaigns';

	// FUNCTIONS
	function selectCategory(category: string) {
		selectedCategory = category;
	}
</script>


<!-- ----------------------------------------------------------------- -->
<!-- SECTION -->
<!-- ----------------------------------------------------------------- -->
<section class="py-4 bg-yellowish2">
    <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="flex overflow-x-auto w-full sm:grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-start scrollbar-hide">
            {#each categories as category}
                <Category selectCategory={selectCategory} selectedCategory={selectedCategory} category={category} />
            {/each}
        </div>
    </div>
</section>

<!-- <section class="py-4 bg-gray-100">
    <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="flex overflow-x-auto w-full space-x-4 sm:grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-start scrollbar-hide">
            {#each categories as category}
                <Category selectCategory={selectCategory} selectedCategory={selectedCategory} category={category} class="flex-shrink-0 px-2" />
            {/each}
        </div>
    </div>
</section> -->
