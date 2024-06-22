<!-- Details -->
<div id="details">
	{#await season}
		Loading...
	{:then { data, gallery }} 
		hai
	{/await}
</div>

<!-- Script -->
<script lang="ts">	
	// Imports
	import type { Season } from "$lib/types/season";
	import { getContext } from "svelte";

	// Fetches season
	const season = getContext("season") as Promise<Season.Season>;
</script>