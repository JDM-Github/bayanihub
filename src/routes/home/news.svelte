<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Pagination } from 'swiper/modules';

	export let newsArticles;
	let swiperInstance: Swiper;
	let activeIndex = 0;

	let selectedArticle: any = null;
	function openModal(article: any) {
		selectedArticle = article;
	}

	function closeModal() {
		selectedArticle = null;
	}

	onMount(() => {
		swiperInstance = new Swiper('.swiper-container', {
			modules: [Pagination],
			slidesPerView: 1,
			spaceBetween: 16,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				bulletClass: 'swiper-pagination-bullet',
				bulletActiveClass: 'swiper-pagination-bullet-active'
			},
			on: {
				slideChange: () => {
					activeIndex = swiperInstance.realIndex;
				}
			}
		});
	});
</script>

<section class="py-16 bg-light-yellowish">
	<div class="max-w-3/4 mx-auto px-6">
		<div class="hidden md:grid md:grid-cols-3 gap-6">
			<button
				class="md:col-span-2 bg-yellowish rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-yellowish1 transition text-left"
				on:click={() => openModal(newsArticles[0])}
			>
				<img
					src={newsArticles[0].image}
					alt={newsArticles[0].title}
					class="w-full h-[300px] object-cover"
				/>
				<div class="p-6">
					<h3 class="text-2xl font-bold text-gray-900">{newsArticles[0].title}</h3>
					<p class="text-base text-gray-700 mt-3">{newsArticles[0].description}</p>
					<p class="text-sm text-gray-500 mt-4">{newsArticles[0].date}</p>
				</div>
			</button>

			<div class="flex flex-col gap-3">
				{#each newsArticles.slice(1) as article}
					<button
						class="bg-yellowish rounded-md shadow-sm overflow-hidden flex h-28 cursor-pointer hover:bg-yellowish1 transition text-left"
						on:click={() => openModal(article)}
					>
						<img src={article.image} alt={article.title} class="w-28 h-full object-cover" />
						<div class="p-3 flex flex-col justify-between flex-1">
							<h4 class="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
								{article.title}
							</h4>
							<p class="text-xs text-gray-500">{article.date}</p>
						</div>
					</button>
				{/each}
			</div>
		</div>

		<div class="block md:hidden">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					{#each newsArticles as article}
						<button
							class="swiper-slide bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-50 transition text-left"
							on:click={() => openModal(article)}
						>
							<img src={article.image} alt={article.title} class="w-full h-[300px] object-cover" />
							<div class="p-6">
								<h4 class="text-lg font-semibold text-gray-900">{article.title}</h4>
								<p class="text-md text-gray-500 mt-2">{article.date}</p>
							</div>
						</button>
					{/each}
				</div>

				<div class="flex justify-center space-x-2 mt-4">
					{#each newsArticles as _, i}
						<div
							class="w-3 h-3 rounded-full transition-all duration-300 bg-gray-300"
							class:bg-gray-500={i === activeIndex}
						></div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
{#if selectedArticle}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_incorrect_aria_attribute_type_idlist -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
		on:click={() => closeModal()}
	>
		<div
			class="relative bg-light-yellowish rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden"
			on:click|stopPropagation
		>
			<button
				class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold focus:outline-none transition"
				on:click={closeModal}
				aria-label="Close"
			>
				&times;
			</button>

			<img
				src={selectedArticle.image}
				alt={selectedArticle.title}
				class="w-full h-72 object-cover"
			/>

			<div class="p-8 space-y-4">
				<h2 class="text-3xl font-bold text-gray-900">{selectedArticle.title}</h2>
				<p class="text-sm text-gray-500">{selectedArticle.date}</p>
				<p class="text-base text-gray-700 leading-relaxed">{selectedArticle.description}</p>
				<div class="mt-6 border-t pt-4 text-sm text-gray-600">
					<p>
						This story is part of our mission to keep communities informed and engaged.
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}
