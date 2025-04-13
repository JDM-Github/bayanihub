<script>
	import Frontpage from './home/frontpage.svelte';
	import Step from './home/step.svelte';
	import Whychooseus from './home/whychooseus.svelte';
	import News from './home/news.svelte';
	import Contactus from './home/contactus.svelte';
	import Footer from '$lib/components/Footer.svelte';
	export let data;
</script>

<main>
	<Frontpage features={data.features} />
	<Step />
	<Whychooseus />
	<News newsArticles={data.newsArticles} />
	<Contactus />
	<Footer />
</main>
