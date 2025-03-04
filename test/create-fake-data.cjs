const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

const generateStory = () => {
	const id = faker.number.int({ min: 1000, max: 9999 });
	const title = faker.lorem.sentence(6);
	const slug = faker.helpers.slugify(title).toLowerCase();

	const story = {
		id,
		slug,
		image: faker.image.urlLoremFlickr({ category: 'education' }),
		title,
		progress: function () {
			return (this.raised / this.goal) * 100;
		},
		category: 'Education',
		raised: faker.number.int({ min: 1000, max: 10000 }),
		goal: 10000,
		impact: faker.lorem.sentence(),
		storyDescription: faker.lorem.paragraphs(3),
		storyImages: Array.from({ length: 3 }, () =>
			faker.image.urlLoremFlickr({ category: 'education' })
		),
		proofImages: Array.from({ length: 2 }, () =>
			faker.image.urlLoremFlickr({ category: 'school' })
		),
		latestUpdates: [
			{ date: faker.date.recent().toISOString(), update: faker.lorem.sentence() },
			{ date: faker.date.past().toISOString(), update: faker.lorem.sentence() }
		],
		testimonials: Array.from({ length: 3 }, () => ({
			name: faker.person.firstName() + ' ' + faker.person.lastName(),
			quote: faker.lorem.sentence()
		})),
		donors: Array.from({ length: 5 }, () => ({
			name: faker.person.firstName() + ' ' + faker.person.lastName(),
			amount: faker.number.int({ min: 10, max: 500 })
		}))
	};

	story.progress = story.progress();
	return story;
};

const generateFakeData = (count = 10) => {
	const stories = Array.from({ length: count }, generateStory);
	const filePath = path.join(__dirname, 'fakeData.json');

	fs.writeFileSync(filePath, JSON.stringify(stories, null, 2), 'utf-8');
	console.log(`✅ Generated ${count} fake stories and saved to fakeData.json`);
};

generateFakeData(20);
