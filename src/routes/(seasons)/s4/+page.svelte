{#await season}
	<!-- Loading -->
	Loading...
{:then { data, gallery, id }} 	
	<!-- Details -->
	<div id="details">
		hai
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
	// Details
	#details {
		flex: 1;
	}
</style>