import type { CategoryInterface, FeaturedDonorInterface } from '$lib/types';
import type { PageServerLoad } from './$types';
import { faker } from '@faker-js/faker';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/stories');
	const data = await response.json();
	if (!data) {
		throw new Error('Features cannot be fetched');
	}
	const stories = data.stories;

	let categories: CategoryInterface[] = [
		{ name: 'All Campaigns', icon: 'fas fa-globe' },
		{ name: 'Medical', icon: 'fas fa-user-md' },
		{ name: 'Education', icon: 'fas fa-graduation-cap' },
		{ name: 'Disaster Relief', icon: 'fas fa-house-damage' },
		{ name: 'Animal Welfare', icon: 'fas fa-paw' },
		{ name: 'Community', icon: 'fas fa-users' },
		{ name: 'Non-Profit', icon: 'fas fa-hand-holding-heart' },
		{ name: 'Environment', icon: 'fas fa-seedling' }
	];

	let featuredDonor: FeaturedDonorInterface = {
		name: faker.person.fullName(),
		qoute: faker.lorem.sentence()
	};

	return { categories, featuredDonor, stories };
};
