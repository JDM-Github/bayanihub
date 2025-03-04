<script lang="ts">
	// ALL IMPORT
	import TopDonor from '../topdonor.svelte';
	import Support from "../support.svelte";
	import Navigation from "../navigation.svelte"
	import Testimonial from '../testimonial.svelte';
	import Progress from '../progress.svelte';
	import Footer from '../../../lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import DonationModal from '$lib/modal/Donation.svelte';

	// IMPORT TYPE
	import type { StoryInterface } from '$lib/types';

	// ALL EXPORT
	export let data;

	let showModal = false;
	function handleDonation(donorName: string, donationAmount: string, message: string) {
		alert('Donation received:' + JSON.stringify({donorName, donationAmount, message}));
		showModal = false;
	}
	let story: StoryInterface = data.story;
	let progressWidth = 0;
	let fullScreenImage: any = null;


	// ------------------------------------------------------
	// FUNCTIONS
	// ------------------------------------------------------
	function openImage(image: any) {
		fullScreenImage = image;
	}
	function closeImage() {
		fullScreenImage = null;
	}

	function gotoSection(sectionTarget: string) {
		setTimeout(() => {
			const section = document.getElementById(sectionTarget);
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
	// ------------------------------------------------------



	// ON MOUNT
	onMount(async () => {
		setTimeout(() => {
			if (story) {
				progressWidth = story.progress;
			}
		}, 100);
	});
</script>

{#if !story}
	<div class="flex justify-center items-center h-screen">
		<div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
	</div>
{:else}
	<section class="py-8 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
		<div class="md:col-span-3 relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
			<img src={story.image} alt={story.title} class="w-full h-full object-cover" />
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
			>
				<div>
					<span class="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">{story.category}</span
					>
					<h1 class="text-xl md:text-2xl lg:text-4xl font-bold text-white mt-2 drop-shadow-lg">
						{story.title}
					</h1>
				</div>
			</div>
		</div>

		<div class="lg:col-span-2 md:col-span-3 space-y-2">
			<Navigation gotoSection={gotoSection}/>
			<Support story={story} progressWidth={progressWidth} showModal={showModal}/>

			<div class="bg-white p-4 md:p-6 rounded-lg shadow-md" id="story">
				<h2 class="text-lg md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
					What is the Story Behind This?
				</h2>
				<p class="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
					{story.storyDescription}
				</p>

				<div class="grid grid-cols-3 gap-2">
					{#each story.storyImages as storyImg}
						<button
							class="w-full h-24 md:h-32"
							on:click={() => openImage(storyImg)}
							aria-label="Expand image"
						>
							<img
								src={storyImg}
								alt="Story"
								class="w-full h-full object-cover rounded-md shadow-sm"
							/>
						</button>
					{/each}
				</div>
			</div>

			<Progress {story} />
		</div>

		<div class="md:col-span-1 space-y-6">
			<TopDonor {story} />
			<Testimonial {story} />
		</div>
	</section>
{/if}

{#if fullScreenImage}
	<div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
		<button
			class="absolute top-5 right-5 text-white text-3xl p-2 rounded-full shadow-lg cursor-pointer"
			on:click={closeImage}
			aria-label="Close image"
		>
			&times;
		</button>
		<img
			src={fullScreenImage}
			class="max-w-full max-h-full rounded-lg shadow-md"
			alt="Fullscreen Not Redundant"
		/>
	</div>
{/if}

<button
	class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm md:text-base font-bold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg sm:hidden hover:bg-blue-700 transition"
	on:click={() => (showModal = true)}
>
	Donate Now
</button>

{#if showModal}
	<DonationModal onClose={() => (showModal = false)} onDonate={handleDonation} />
{/if}

<Footer />
