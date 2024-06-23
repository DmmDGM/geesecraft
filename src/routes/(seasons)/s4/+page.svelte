{#await season}
	<!-- Loading -->
	Loading...
{:then { data, gallery }} 	
	<!-- Details -->
	<div id="details">
		hai
	</div>
{/await}

<!-- Script -->
<script lang="ts">	
	// Imports
	import type { Season } from "$lib/types/season";
	import { getContext } from "svelte";

	// Fetches season
	const season = getContext("season") as Promise<Season.Season>;
</script>

<!-- Style -->
<style lang="scss">
	// Details
	#details {
		flex: 1;
	}
</style>