{#await season}
	<!-- Loading -->
	Loading...
{:then { gallery, id }} 	
	<!-- Summary -->
	<div id="summary">
		Ah yes, Season 3. This season started with DmmD and iiPython spawning in on an island in the middle of nowhere, heading east, until they set up shop on a nearby landmass.
		From there, a farm was created outside of the main base (a simple wooden hut at the time), and DmmD setup a shop to sell fish. We also expanded further to the east, making
		a trading center with over 20 villagers held in captivity.
		<div class="summary-margin"></div>
		After beating the Ender Dragon, iiPython moved the base to a nearby beach while DmmD redesigned it to give it a more modern look.
		The season ended with a Gunpowder Farm, Squid Farm (Non-functional), Drowned Farm, Iron Farm (efficient asf), Cobblestone farm, Shulker Farm, Tree Farm, & Wither Skeleton farm.
		<div class="summary-margin"></div>
		<iframe width="540" height="304" src="https://www.youtube-nocookie.com/embed/V-zbo6b8gVI?si=aCwDATsOwf6O4D66" title="How to Destroy Withers" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		<iframe width="540" height="304" src="https://www.youtube-nocookie.com/embed/i8UlwRinp0Y?si=KYAWNYLJl6pKfFty" title="i believe i can fly" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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