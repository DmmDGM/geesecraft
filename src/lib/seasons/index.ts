// Imports
import type { Season } from "$lib/types/season";

// Loads season data
export async function loadSeason(id: string): Promise<{
	gallery: Season.Gallery,
	data: Season.Data
}> {
	// Defines data
	const data: Season.Data = {
		accomplishments: [],
		active: false,
		description: "",
		end: 0,
		members: [],
		mods: {},
		name: "",
		start: 0,
		version: "",
		world: null
	};
	const gallery = {};

	// Fetches data
	try {
		Object.assign(data, await import(`$lib/seasons/${id}/data.json`));
		Object.assign(gallery, await import(`$lib/seasons/${id}/gallery.json`));
	}
	catch(error) {
		console.error("An error occurred while fetching season data");
		console.error(error);
	}

	// Returns data
	return { data, gallery };
}
