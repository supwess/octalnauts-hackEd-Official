export async function load({ fetch, url }) {
	const res = await fetch('/data/data.json');
	const json = await res.json();

	return {
		navSites: json.navSites,
		url
	};
}
