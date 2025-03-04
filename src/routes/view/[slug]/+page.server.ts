import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
    const response = await fetch(`/api/story/${params.slug}`);
	const story = await response.json();
    return { story };
};
