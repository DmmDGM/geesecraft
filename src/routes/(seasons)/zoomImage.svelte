<!-- Zoom -->
<div id="zoom">
	<img src={`src/lib/seasons/${id}/gallery/${url}`} alt={url} />
	<div class="content">{gallery[url].name} ({url})</div>
	<div class="content">{gallery[url].description}</div>
	<a href={`src/lib/seasons/${id}/gallery/${url}`} target="_black" rel="noopener noreferrer" class="soda-link">Open Raw</a>
	<button class="soda-button" on:click={() => { close(); }}>Close</button>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	import { onMount } from "svelte";
	export let close: () => void;
	export let gallery: Season.Gallery;
	export let id: string;
	export let url: string;
</script>

<!-- Style -->
<style lang="scss">
	// Zoom
	#zoom {
		align-items: center;
		background-color: rgba(var(--soda-theme-background), 0.9);
		display: flex;
		flex-direction: column;
		gap: 10px 0px;
		height: 100%;
		justify-content: center;
		left: 0px;
		position: fixed;
		top: 0px;
		width: 100%;

		.content {
			text-align: center;
			width: 60%;
		}

		img {
			max-height: 60%;
			width: 100%;
			object-fit: contain;
			max-width: 60%;
		}
	}
</style>