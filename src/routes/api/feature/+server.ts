import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const data = [
		{
			src: 'https://picsum.photos/150/150?random=1',
			alt: 'Random Image 1',
			description: 'Sample description for image 1',
			size: 'w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60',
			yOffset: 'lg:translate-y-8 sm:-translate-y-8 md:translate-y-0'
		},
		{
			src: 'https://picsum.photos/150/150?random=2',
			alt: 'Random Image 2',
			description: 'Sample description for image 2',
			size: 'w-50 h-50 md:w-56 md:h-56 lg:w-72 lg:h-72',
			yOffset: 'lg:-translate-y-4'
		},
		{
			src: 'https://picsum.photos/150/150?random=3',
			alt: 'Random Image 3',
			description: 'Sample description for image 3',
			size: 'w-64 h-64 md:w-64 md:h-64 lg:w-80 lg:h-80',
			yOffset: 'lg:-translate-y-12 sm:-translate-y-8 md:translate-y-0'
		},
		{
			src: 'https://picsum.photos/150/150?random=4',
			alt: 'Random Image 4',
			description: 'Sample description for image 4',
			size: 'w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72',
			yOffset: 'lg:-translate-y-4'
		},
		{
			src: 'https://picsum.photos/150/150?random=5',
			alt: 'Random Image 5',
			description: 'Sample description for image 5',
			size: 'w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60',
			yOffset: 'lg:translate-y-8'
		}
	];
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
