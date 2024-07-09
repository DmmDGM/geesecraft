{#await season}
	<!-- Loading -->
	Loading...
{:then { gallery, id }} 	
	<!-- Summary -->
	<div id="summary">
		Check out DmmD's livestreams of the season here (<a href = "https://www.youtube.com/playlist?list=PLU66lEvHdbrvoFRtwEenmLRvfi3--PCIS">direct link</a>):
		<div class="summary-margin"></div>
		<iframe width="540" height="304" src="https://www.youtube-nocookie.com/embed/videoseries?si=F1LfxqYfii-c9Fy2&amp;controls=0&amp;list=PLU66lEvHdbrvoFRtwEenmLRvfi3--PCIS" title="Cat Vibe" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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