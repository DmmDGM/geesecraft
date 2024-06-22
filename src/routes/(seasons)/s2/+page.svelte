<!-- Title -->
<div>Season 4</div>
{#await season}
	loading
{:then { data, gallery }} 
	<About data={data} />
{/await}

<!-- Script -->
<script lang="ts">
	import { loadSeason } from "$lib/seasons";
	import About from "../about.svelte";

	// Loads data
	let season = loadSeason("s2");
	console.log(season);
</script>

<!-- Style -->
