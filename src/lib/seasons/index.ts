// Imports
import type { Season } from "$lib/types/season";

// Loads default data
export function loadDefaultSeason(): Season.Season {
	// Defines data
	const data: Season.Data = {
		accomplishments: [],
		active: false,
		description: "",
		end: null,
		members: {},
		mods: {},
		name: "",
		start: null,
		version: "",
		world: null
	};
	const gallery: Season.Gallery = {};

	// Returns data
	return { data, gallery, id: "default" };
}

// Loads season data
export async function loadSeason(id: string): Promise<Season.Season> {
	// Defines data
	const { data, gallery } = loadDefaultSeason();

	// Fetches data
	try {
		Object.assign(data, (await import(`$lib/seasons/${id}/data.json`)).default);
		Object.assign(gallery, (await import(`$lib/seasons/${id}/gallery.json`)).default);
	}
	catch(error) {
		console.error("An error occurred while fetching season data");
		console.error(error);
	}

	// Returns data
	return { data, gallery, id };
}
