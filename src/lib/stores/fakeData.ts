import loadJson from "$lib/utils/loadJson";

export const fakeStories = loadJson("src/data/stories.json");
export function getStoryBySlug(slug: string | undefined) {
	return fakeStories.find((story: any) => story.slug === slug);
}