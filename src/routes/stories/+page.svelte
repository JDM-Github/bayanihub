<script>
	import Carousel from './section/carousel.svelte';
	import Category from './section/category.svelte';
	import Stories from './section/stories.svelte';
	import DonorLove from './section/donor.svelte';
	import Footer from '../../lib/components/Footer.svelte';

	export let data;
</script>

<main>
	<Carousel stories={data.stories} />
	<Category categories={data.categories} />
	<Stories stories={data.stories}/>
	<DonorLove donor={data.featuredDonor} />
	<Footer />
</main>
