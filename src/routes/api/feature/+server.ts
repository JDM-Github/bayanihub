import loadJson from '$lib/utils/loadJson';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const data = loadJson('src/data/features.json');
	return new Response(
		JSON.stringify({
			feature: data
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};
