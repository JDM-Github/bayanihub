<script lang="ts">
	import type { CategoryInterface } from "$lib/types";

	export let selectCategory: (categoryName: string) => void;
	export let selectedCategory: string;
	export let category: CategoryInterface;
</script>

<div class="flex flex-col items-center">
	<button
		class="flex justify-center items-center p-4 w-20 h-20 rounded-lg shadow-md bg-white
            transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer
            {selectedCategory === category.name
			? 'bg-blue-500 text-gray-200'
			: 'text-gray-700'}"
		on:click={() => selectCategory(category.name)}
		aria-label={'Select ' + category.name + ' category'}
	>
		<i class="{category.icon} text-2xl"></i>
	</button>

	<span class="text-sm mt-2 font-medium text-gray-800">{category.name}</span>
</div>
