<script lang="ts">
    import type { StoryInterface } from '$lib/types';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle';
    import { getCachedImage, preloadImages } from '$lib/utils/imageCache';

    export let stories: StoryInterface[];
    onMount(() => {
        new Swiper('.swiper', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
        preloadImages(stories.map(story => story.image));
    });

    function readMore(slug: string) {
        window.location.href = `/view/${slug}`;
    }
    function getDescriptionText(text: string) {
        if (!browser) return text.slice(0, 200);
        return window.innerWidth < 768 ? text.slice(0, 80) : text.slice(0, 200);
    }
</script>

<section class="bg-gray-100 sm:py-4 md:py-6 lg:py-8 lg:px-32 md:px-16 sm:px-4 mt-1 relative">
    <div class="swiper">
        <div class="swiper-wrapper">
            {#each stories as story}
                <div class="swiper-slide">
                    <div class="relative bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start">

                        <div class="relative w-full md:w-1/2 h-52 md:h-96">
                            {#await getCachedImage(story.image) then cachedImage}
                                <img src={cachedImage} alt={story.title} class="w-full h-full object-cover" />
                            {/await}
                            <div class="absolute inset-0 lg:bg-gradient-to-r from-gray-900/60 via-transparent to-gray-200/100"></div>
                        </div>

                        <div class="p-6 md:w-1/2 bg-gray-200 flex flex-col justify-between h-auto md:h-96">
                            <div>
                                <span class="text-blue-500 text-sm md:text-lg font-semibold">{story.category}</span>
                                <h3 class="text-xl md:text-2xl font-bold text-gray-800 mt-2">{story.title}</h3>
                                <p class="text-gray-600 mt-4 text-sm md:text-base">
                                    {getDescriptionText(story.storyDescription)}...
                                </p>
                            </div>
                            <button
                                class="mt-4 px-4 py-2 text-sm md:text-base bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer"
                                on:click={() => readMore(story.slug)}
                            >
                                Read More
                            </button>
                        </div>

                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
