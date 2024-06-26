<!-- Gallery -->
<div id="gallery">
	<div class="heading">Gallery</div>
	{#if galleryFiles.length === 0}
		<div class="content">Nothing to Show... Sorry</div>
	{:else}
		{#if loadedFiles.length !== 0}
			{#if loadedFiles.length !== galleryFiles.length}
				<div class="soda-button-cluster loader">
					<button on:click={() => {
						loadedFiles = galleryFiles.slice(0, loadedFiles.length + 10);
					}}> Load More ({galleryFiles.length - loadedFiles.length} Left)
					</button>
					<button on:click={() => {
						loadedFiles = galleryFiles;
					}}> Load All ({galleryFiles.length - loadedFiles.length} Left)
					</button>
				</div>
			{/if}
			<div id="images">
				{#each Object.entries(loadedFiles) as [ loadedIndex, loadedFile ]}
					<GalleryImage {gallery} {id} open={() => { zoomIndex = +loadedIndex; }} file={loadedFile} />
				{/each}
			</div>
		{/if}
		{#if loadedFiles.length !== galleryFiles.length}
				<div class="soda-button-cluster loader">
					<button on:click={() => {
						loadedFiles = galleryFiles.slice(0, loadedFiles.length + 10);
					}}> Load More ({galleryFiles.length - loadedFiles.length} Left)
					</button>
					<button on:click={() => {
						loadedFiles = galleryFiles;
					}}> Load All ({galleryFiles.length - loadedFiles.length} Left)
					</button>
				</div>
		{/if}
	{/if}
	{#if zoomIndex !== null}
		<ZoomImage close={() => { zoomIndex = null; }} {gallery} {id} file={galleryFiles[zoomIndex]}  />
	{/if}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import GalleryImage from "./galleryImage.svelte";
	import ZoomImage from "./zoomImage.svelte";
	import type { Season } from "$lib/types/season";
	import { onMount } from "svelte";
	export let gallery: Season.Gallery;
	export let id: string;

	// Defines gallery loader
	let galleryFiles = Object.keys(gallery);
	let loadedFiles: string[] = [];
	let zoomIndex: number | null = null;

	// Listens to keypress
	onMount(() => {
		document.addEventListener("keydown", (event) => {
			if(zoomIndex === null) return;
			if(event.key === "Escape") zoomIndex = null;
			else if(event.key === "ArrowLeft") zoomIndex = Math.max(zoomIndex - 1, 0);
			else if(event.key === "ArrowRight") zoomIndex = Math.min(zoomIndex + 1, loadedFiles.length - 1);
		});
	});
</script>

<!-- Style -->
<style lang="scss">
	// Gallery
	#gallery {
		display: flex;
		flex-direction: column;
		gap: 10px 0px;

		.heading {
			font-size: 20px;
			font-weight: bold;
			line-height: 25px;
			text-align: center;
		}

		.content {
			color: rgba(var(--soda-theme-foreground), 0.75);
		}

		.loader {
			justify-content: center;

			> * {
				padding: 10px 25px;
			}
		}

		#images {
			display: flex;
			flex-wrap: wrap;
			gap: 10px 10px;
		}
	}
</style>