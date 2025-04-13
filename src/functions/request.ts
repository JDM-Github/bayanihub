export default class RequestHandler {
	static development = import.meta.env.MODE === 'development';
	static baseURL = RequestHandler.development
		? import.meta.env.VITE_DEVELOPMENT_URL
		: import.meta.env.VITE_DEPLOYMENT_URL;

	static async fetchData(
		method: string,
		link: string,
		requestData: Record<string, any> = {},
		headers: Record<string, string> = {},
		callback: ((error: string | null, data?: any) => void) | null = null
	) {
		let url = `${RequestHandler.baseURL}/${link}`;

		const options: RequestInit = {
			method: method.toUpperCase()
		};

		options.headers = {
			'Content-Type': 'application/json',
			...headers
		};

		if (method.toLowerCase() === 'get' && Object.keys(requestData).length > 0) {
			const queryString = new URLSearchParams(requestData as Record<string, string>).toString();
			url += `?${queryString}`;
		} else if (method.toLowerCase() !== 'get' && method.toLowerCase() !== 'head') {
			options.body = JSON.stringify(requestData);
		}

		try {
			const response = await fetch(url, options);
			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(responseData.message || `HTTP error! Status: ${response.status}`);
			}

			if (callback) callback(null, responseData);
			return responseData;
		} catch (error: any) {
			console.error('Fetch error:', error);
			if (callback)
				callback(error.message || 'Something went wrong. Please try again later.', undefined);
			return { success: false, message: error.message || 'An error occurred' }; // Return error response
		}
	}
}
