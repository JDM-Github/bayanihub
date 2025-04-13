import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/feature');
	const features = await response.json();

	let newResponse = await fetch('/api/news');
	let newsArticles = await newResponse.json();
	return { features: features.feature, newsArticles: newsArticles.articles };
};
