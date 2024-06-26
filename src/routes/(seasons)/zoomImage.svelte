<!-- Zoom -->
<div id="zoom">
	{#await import(`$lib/seasons/${id}/gallery/${stripExtension(file)}.png`) then { default: src }}
		<img {src} alt={file} bind:this={image}/>
	{/await}
	<div class="content">{gallery[file].name} ({file})</div>
	<div class="content">{gallery[file].description}</div>
	<a href={typeof image === "undefined" ? "" : image.src}
		target="_black"
		rel="noopener noreferrer"
		class="soda-link">Open Raw
	</a>
	<button class="soda-button" on:click={() => { close(); }}>Close</button>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	export let close: () => void;
	export let file: string;
	export let gallery: Season.Gallery;
	export let id: string;

	// Defines image
	let image: HTMLImageElement;

	// Defines extension stripper
	function stripExtension(fileName: string): string {
		return fileName.split(".").slice(0, -1).join(".");
	}
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