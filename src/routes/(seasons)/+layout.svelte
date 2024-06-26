<!-- Window -->
<svelte:window bind:innerWidth />

{#await season}
	<!-- Loading -->
	Loading...
{:then { data }}
	<!-- Season -->
	<div id="season">
		<div id="title">{data.name}</div>
		<div class="soda-button-cluster" id="selector">
			<button on:click={() => { selection = "summary"; console.log(innerWidth) }}>Summary</button>
			<button on:click={() => { selection = "details"; }}>Details</button>
		</div>
		<div id="content">
			{#if innerWidth > 1000 || selection === "summary"}
				<slot />
			{/if}
			{#if innerWidth > 1000 || selection === "details"}
				<Sidebar {data} />
			{/if}
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

	// Defines selector
	let innerWidth: number;
	let selection: string = "summary";
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

		// Selector
		#selector {
			display: none;
			width: 100%;

			> * {
				flex: 1;
			}
		}

		@media (max-width: 1000px) {
			#selector {
				display: flex;
			}
		}

		// Content
		#content {
			display: flex;
			gap: 0px 25px;
			width: 100%;
		}
	}
</style>