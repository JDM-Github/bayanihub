import { fakeStories } from '$lib/stores/fakeData';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const data = fakeStories;
	return new Response(
		JSON.stringify({
			stories: data
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};
