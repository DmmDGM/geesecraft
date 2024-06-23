{#await season}
	<!-- Loading -->
	Loading...
{:then { data }}
	<!-- Season -->
	<div id="season">
		<div id="title">{ data.name }</div>
		<div id="content">
			<slot />
			<Sidebar { data } />
		</div>
	</div>
{/await}

<!-- Script -->
<script lang="ts">
	// Imports
	import { page } from '$app/stores';
	import { loadDefaultSeason, loadSeason } from "$lib/seasons";
	import { afterUpdate, onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import Sidebar from "./sidebar.svelte";
	import type { Season } from "$lib/types/season";
	
	// Loads season
	let season: Promise<Season.Season> = (async () => loadDefaultSeason())();
	let context = writable(season);
	let url = "";
	setContext("season", context);

	// Defines season updater
	function updateSeason() {
		const pathname = $page.url.pathname.split("/")[1].toLowerCase();
		season = loadSeason(pathname);
		$context = season;
		url = $page.url.pathname;
	}

	// Defines watchers
	onMount(() => updateSeason());
	afterUpdate(() => {
		if(url !== $page.url.pathname) updateSeason();
	});
</script>

<!-- Style -->
<style lang="scss">
	// Season
	#season {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 25px 0px;
		height: 100%;
		width: 75%;

		// Title
		#title {
			font-size: 30px;
			font-weight: bold;
			line-height: 35px;
		}

		// Content
		#content {
			display: flex;
			gap: 0px 25px;
			width: 100%;
		}
	}
</style>