
import fs from 'fs';

export default function loadJson(fakeData: string) {
    console.log(fakeData);
	try {
		const data = fs.readFileSync(fakeData, 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		console.error('Error loading fake data:', error);
		return [];
	}
}
