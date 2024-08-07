// Defines namespace
export namespace Season {
	// Defines types
	export type Data = {
		accomplishments: string[];
		active: boolean;
		description: string;
		end: number | null;
		members: {
			[uuid: string]: string;
		};
		mods: {
			[mod: string]: {
				type: "mod" | "plugin" | "other";
				url: string;
			}
		};
		name: string;
		start: number | null;
		version: string;
		world: string | null;
	};
	export type Gallery = {
		[ image: string ]: {
			description: string;
			name: string;
		}
	};
	export type Season = {
		data: Data;
		gallery: Gallery;
		id: string;
	};
};
