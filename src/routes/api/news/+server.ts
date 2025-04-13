import type { RequestHandler } from '@sveltejs/kit';
import { faker } from '@faker-js/faker';

export const GET: RequestHandler = async () => {
	const data = Array.from({ length: 4 }).map((_, i) => ({
		id: i + 1,
		title: faker.company.catchPhrase(),
		description: faker.lorem.paragraph(),
		image: faker.image.urlLoremFlickr({ category: 'people,community', width: 800, height: 600 }),
		date: faker.date.recent({ days: 10 }).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	}));

	return new Response(JSON.stringify({ articles: data }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
