
export default class RequestHandler {
	static development = import.meta.env.VITE_DEVELOPMENT === '1';
	static baseURL = RequestHandler.development
		? import.meta.env.VITE_DEVELOPMENT_URL
		: import.meta.env.VITE_DEPLOYMENT_URL;

	static async fetchData(method: string, link: string, requestData = {}, headers = {}, callback: Function | null = null) {
		const url = `${RequestHandler.baseURL}/${link}`;

		const options: RequestInit = {
			method: method.toUpperCase(),
			headers: {
				'Content-Type': 'application/json',
				...headers
			}
		};

		if (method.toLowerCase() !== 'get' && method.toLowerCase() !== 'head') {
			options.body = JSON.stringify(requestData);
		}

		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const responseData = await response.json();
			if (callback) callback(null, responseData);
			return responseData;
		} catch (error) {
			console.error('Fetch error:', error);
			if (callback) callback('Something went wrong. Please try again later.', undefined);
			throw error;
		}
	}
}
