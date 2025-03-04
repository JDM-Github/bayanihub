export interface CategoryInterface {
	name: string;
	icon: string;
}

export interface FeaturedDonorInterface {
	name: string;
	qoute: string;
}

export interface StoryInterface {
	id: string;
	slug: string;
	image: string;
	title: string;
	category: string;
	raised: number;
	goal: number;
	progress: number;
	impact: string;
	storyDescription: string;
	storyImages: string[];
	proofImages: string[];
	latestUpdates: UpdateInterface[];
	testimonials: TestimonialInterface[];
	donors: DonorInterface[];
}

export interface UpdateInterface {
	date: string;
	update: string;
}

export interface TestimonialInterface {
	name: string;
	quote: string;
}

export interface DonorInterface {
	name: string;
	amount: number;
}