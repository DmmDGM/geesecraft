<!-- Zoom -->
<div id="zoom">
	<img src={`src/lib/seasons/${id}/gallery/${url}`} alt={url} />
	<div>{gallery[url].name}</div>
	<div>{url}</div>
	<div>{gallery[url].description}</div>
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

	// Listens to escape
	onMount(() => {
		const listener = (event: KeyboardEvent) => {
			if(event.key === "Escape") {
				document.removeEventListener("keydown", listener);
				close();
			}
		};
		document.addEventListener("keydown", listener);
	});
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

		img {
			height: 60%;
			object-fit: scale-down;
			width: 60%;
		}
	}
</style>