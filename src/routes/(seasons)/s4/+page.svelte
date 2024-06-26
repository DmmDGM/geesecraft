{#await season}
	<!-- Loading -->
	Loading...
{:then { gallery, id }} 	
	<!-- Summary -->
	<div id="summary">
		The first modded season in Geesecraft history, Season 4 adds mods such as Tech Reborn, Applied Energistics 2, and Ad Astra to make Minecraft less boring after beating the game.
		During the initial stages of the season, DmmD worked on setting up a basic ME Network while iiPython handled power. Afterwards, we progressed to space initially using the Agape Space mod, and later switching to Ad Astra (due to quality issues with Agape).
		<div class="summary-margin"></div>
		Some noteworthy landmarks were DmmD's house (where his basement held everything AE2 related), iiPython's basement (which held everything Tech Reborn related), and McGeese (for free food).
		K4ffu, as always, had his base in the middle of nowhere (on a cute little island northbound of the main base).
		<div class="summary-margin"></div>
		<iframe width="540" height="304" src="https://www.youtube-nocookie.com/embed/pS_-XAJgWIE?si=HzUQjIvAYSUnPRq9" title="Cat Vibe" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		<iframe width="540" height="304" src="https://www.youtube-nocookie.com/embed/iSgJp98DL60?si=5_SrdNUGaq-GtoRr" title="Geesecraft Season 4 - End Fight" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		<div class="summary-margin"></div>
		<Gallery {gallery} {id}/>
	</div>
{/await}

<!-- Script -->
<script lang="ts">	
	// Imports
	import type { Season } from "$lib/types/season";
	import { getContext } from "svelte";
	import Gallery from "../gallery.svelte";
	import type { Writable } from "svelte/store";
	import { loadDefaultSeason } from "$lib/seasons";

	// Loads season
	const context = getContext("season") as Writable<Promise<Season.Season>>;
	let season: Promise<Season.Season> = (async () => loadDefaultSeason())();
	context.subscribe((value) => season = value);
</script>

<!-- Style -->
<style lang="scss">
	// Summary
	#summary {
		flex: 1;
	}
	.summary-margin {
		margin: 15px;
	}
</style>