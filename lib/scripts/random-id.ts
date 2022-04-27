export function getRandomId(length = 10): string {
	let randomId = 'clearwind-';
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		randomId += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	return randomId;
}
