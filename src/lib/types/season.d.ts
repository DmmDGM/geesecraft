// Defines namespace
export namespace Season {
	export type Data = {
		accomplishments: string[];
		active: boolean;
		description: string;
		end: number;
		members: string[];
		mods: {
			[mod: string]: {
				type: "mod" | "plugin" | "other";
				url: string;
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

