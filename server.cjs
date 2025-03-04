// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const fakeDataPath = path.join(__dirname, 'test/fakeData.json');
// const fakeFeaturePath = path.join(__dirname, 'test/fakeFeature.json');
// const fakeCategoryPath = path.join(__dirname, 'test/fakeCategory.json');

// const loadJson = (fakeData) => {
// 	try {
// 		const data = fs.readFileSync(fakeData, 'utf-8');
// 		return JSON.parse(data);
// 	} catch (error) {
// 		console.error('Error loading fake data:', error);
// 		return [];
// 	}
// }
// const fakeStories = loadJson(fakeDataPath);
// const fakeFeatures = loadJson(fakeFeaturePath);

// app.get('/users', (req, res) => {
// 	res.json([
// 		{ id: 1, name: 'John Doe' },
// 		{ id: 2, name: 'Jane Doe' }
// 	]);
// });

// app.get('/stories', (req, res) => {
// 	const count = Number(req.query.count) || fakeStories.length;
// 	res.json(fakeStories.slice(0, count));
// });

// app.get('/story/:slug', (req, res) => {
// 	const { slug } = req.params;
// 	const story = fakeStories.find((story) => story.slug === slug);
// 	if (!story) {
// 		return res.status(404).json({ error: 'Story not found' });
// 	}
// 	res.json(story);
// });

// app.get('/images', (req, res) => {
// 	console.log(fakeFeatures);
// 	res.json(fakeFeatures);
// });

// app.get("/get-categories", (req, res) => {
// 	res.josn(fakeCategoryPath);
// });

// app.listen(3000, () => console.log('✅ Fake API running on port 3000'));

// THIS DOES NOTHING NOW
