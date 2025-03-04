const fs = require('fs');
const path = require('path');

const imageData = [
	{
		size: 'w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60',
		yOffset: 'lg:translate-y-8 sm:-translate-y-8 md:translate-y-0'
	},
	{
		size: 'w-50 h-50 md:w-56 md:h-56 lg:w-72 lg:h-72',
		yOffset: 'lg:-translate-y-4'
	},
	{
		size: 'w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80',
		yOffset: 'lg:-translate-y-12 sm:-translate-y-8 md:translate-y-0'
	},
	{
		size: 'w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72',
		yOffset: 'lg:-translate-y-4'
	},
	{
		size: 'w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60',
		yOffset: 'lg:translate-y-8'
	}
];

const generateFeature = () => {
	const features = imageData.map((data, index) => ({
		src: `https://picsum.photos/150/150?random=${index + 1}`,
		alt: `Random Image ${index + 1}`,
		description: `Sample description for image ${index + 1}`,
		size: data.size,
		yOffset: data.yOffset
	}));
    return features;
};

const generateFakeData = () => {
	const features = generateFeature();
	const filePath = path.join(__dirname, 'fakeFeature.json');

	fs.writeFileSync(filePath, JSON.stringify(features, null, 2), 'utf-8');
	console.log(`✅ Generated fake features and saved to fakeFeature.json`);
};

generateFakeData(20);
