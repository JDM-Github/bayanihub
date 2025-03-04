
type ImageCache = Map<string, string>;
let cache: ImageCache = new Map();

/**
 * Load and cache an image as a Data URL (base64).
 * If already cached, return the cached data URL.
 *
 * @param url - The image URL to load
 * @returns Cached Data URL (base64)
 */
export async function getCachedImage(url: string): Promise<string> {
	if (cache.has(url)) {
		return cache.get(url)!;
	}
	const response = await fetch(url);
	const blob = await response.blob();
	const dataUrl = await blobToDataURL(blob);

	cache.set(url, dataUrl);
	return dataUrl;
}

/**
 * Convert a Blob to a Data URL (base64 string)
 *
 * @param blob - The Blob to convert
 * @returns Data URL string
 */
function blobToDataURL(blob: Blob): Promise<string> {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.readAsDataURL(blob);
	});
}

/**
 * Optionally expose a way to preload and warm up the cache
 *
 * @param urls - List of image URLs to preload
 */
export function preloadImages(urls: string[]) {
	urls.forEach(async (url) => {
		if (!cache.has(url)) {
			const dataUrl = await getCachedImage(url);
			cache.set(url, dataUrl);
		}
	});
}


export function clearImageCache() {
	cache.clear();
}

export function saveCacheToLocalStorage() {
	const obj = Object.fromEntries(cache);
	localStorage.setItem('imageCache', JSON.stringify(obj));
}

export function loadCacheFromLocalStorage() {
	const stored = localStorage.getItem('imageCache');
	if (stored) {
		cache = new Map(Object.entries(JSON.parse(stored)));
	}
}
