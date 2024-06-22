<!-- Title -->
{#await season}
	<div>Loading</div>
{:then { data }}
	<div id="title">{ data.name }</div>
	<div id="content">
		<slot />
		<Sidebar { data } />
	</div>
{/await}

<!-- Script -->
<script lang="ts">
	// Imports
	import { loadSeason } from "$lib/seasons";
	import { setContext } from "svelte";
	import Sidebar from "./sidebar.svelte";

	// Loads data
	let season = loadSeason("s4");
	setContext("season", season);
</script>

<!-- Style -->
<style lang="scss">

</style>