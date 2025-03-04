import type { RequestHandler } from '@sveltejs/kit';
import { getStoryBySlug } from '$lib/stores/fakeData';

export const GET: RequestHandler = async ({ params }) => {
	const story = getStoryBySlug(params.slug);

	if (!story) {
		return new Response(JSON.stringify({ error: 'Story not found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	return new Response(JSON.stringify(story), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
