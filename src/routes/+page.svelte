<script>
	import FrontPage from '../lib/components/Landing/FrontPage.svelte';
	import Step from '../lib/components/Landing/Step.svelte';
	import WhyChooseUs from '../lib/components/Landing/WhyChooseUs.svelte';
	import News from '../lib/components/Landing/News.svelte';
	import ContactUs from '../lib/components/Landing/ContactUs.svelte';
	import Footer from '../lib/components/Footer.svelte';

	export let data;
</script>

<FrontPage features={data.features} />
<Step />
<WhyChooseUs/>
<News/>
<ContactUs/>
<Footer/>
