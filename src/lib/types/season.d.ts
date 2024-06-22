// Defines namespace
export namespace Season {
	export type Data = {
		active: boolean;
		accomplishments: string[];
		description: string;
		end: number;
		members: string[];
		mods: {
			[mod: string]: {
				url: string;
				type: "mod" | "plugin" | "neither";
			}
		};
		name: string;
		start: number;
		version: string;
		world: string | null;
	};
	
	export type Gallery = {
		[ image: string ]: {
			description: string;
			name: string;
		}
	};
};

