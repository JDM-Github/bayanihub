<script>
    import { onMount } from "svelte";
    import Swiper from "swiper";
    import "swiper/css";
    import "swiper/css/pagination";
    import { Pagination } from "swiper/modules";

    let newsArticles = [
        {
            title: "New Fundraiser Campaign Launched!",
            image: "https://source.unsplash.com/1000x600/?charity",
            description: "We're excited to launch our latest fundraising campaign to support underprivileged children. Join us in making a difference!",
            date: "Feb 16, 2025"
        },
        {
            title: "Community Raises $10,000!",
            image: "https://source.unsplash.com/400x250/?donation",
            date: "Feb 10, 2025"
        },
        {
            title: "Local School Gets New Supplies!",
            image: "https://source.unsplash.com/400x250/?education",
            date: "Feb 5, 2025"
        },
        {
            title: "Volunteers Make a Difference!",
            image: "https://source.unsplash.com/400x250/?volunteer",
            date: "Feb 2, 2025"
        },
        {
            title: "Upcoming Charity Marathon!",
            image: "https://source.unsplash.com/400x250/?marathon",
            date: "Jan 28, 2025"
        }
    ];

    /**
	 * @type {Swiper}
	 */
    let swiperInstance;
	let activeIndex = 0;

    onMount(() => {
        swiperInstance = new Swiper(".swiper-container", {
            modules: [Pagination],
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active"
            },
			on: {
                slideChange: () => {
                    activeIndex = swiperInstance.realIndex;
                }
            }
        });
    });
</script>

<section class="py-16 bg-gray-50">
    <div class="max-w-4/5 mx-auto px-6">
        
        <!-- Desktop View -->
        <div class="hidden md:grid md:grid-cols-3 gap-8">
            <div class="md:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="{newsArticles[0].image}" alt="{newsArticles[0].title}" class="w-full h-[450px] object-cover">
                <div class="p-8">
                    <h3 class="text-3xl font-bold text-gray-900">{newsArticles[0].title}</h3>
                    <p class="text-lg text-gray-700 mt-4">{newsArticles[0].description}</p>
                    <p class="text-md text-gray-500 mt-6">{newsArticles[0].date}</p>
                </div>
            </div>

            <div class="grid gap-6">
                {#each newsArticles.slice(1) as article}
                    <div class="bg-white rounded-lg shadow-md overflow-hidden flex">
                        <img src="{article.image}" alt="{article.title}" class="w-36 h-36 object-cover">
                        <div class="p-6 flex flex-col justify-center">
                            <h4 class="text-lg font-semibold text-gray-900">{article.title}</h4>
                            <p class="text-md text-gray-500 mt-2">{article.date}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="block md:hidden">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    {#each newsArticles as article}
                        <div class="swiper-slide bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src="{article.image}" alt="{article.title}" class="w-full h-[300px] object-cover">
                            <div class="p-6">
                                <h4 class="text-lg font-semibold text-gray-900">{article.title}</h4>
                                <p class="text-md text-gray-500 mt-2">{article.date}</p>
                            </div>
                        </div>
                    {/each}
                </div>

				
				<div class="flex justify-center space-x-2 mt-4">
                    {#each newsArticles as _, i}
                        <div 
                            class="w-3 h-3 rounded-full transition-all duration-300 bg-gray-300"
                            class:bg-gray-500="{i === activeIndex}"
                        ></div>
                    {/each}
                </div>

            </div>
        </div>
    </div>
</section>
