import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/feature');
	const features = await response.json();
	return { features: features.feature };
};
