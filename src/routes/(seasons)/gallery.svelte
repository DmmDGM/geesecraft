<!-- Gallery -->
<div id="gallery">
	<div class="heading">Gallery</div>
	{#if galleryUrls.length === 0}
		<div class="content">Nothing to Show... Sorry</div>
	{:else}
		{#if loadedUrls.length !== 0}
			{#if loadedUrls.length !== galleryUrls.length}
				<div class="soda-button-cluster loader">
					<button on:click={() => {
						loadedUrls = galleryUrls.slice(0, loadedUrls.length + 10);
					}}> Load More ({galleryUrls.length - loadedUrls.length} Left)
					</button>
					<button on:click={() => {
						loadedUrls = galleryUrls;
					}}> Load All ({galleryUrls.length - loadedUrls.length} Left)
					</button>
				</div>
			{/if}
			<div id="images">
				{#each Object.entries(loadedUrls) as [ loadedIndex, loadedUrl ]}
					<GalleryImage {gallery} {id} open={() => { zoomIndex = +loadedIndex; }} url={loadedUrl} />
				{/each}
			</div>
		{/if}
		{#if loadedUrls.length !== galleryUrls.length}
				<div class="soda-button-cluster loader">
					<button on:click={() => {
						loadedUrls = galleryUrls.slice(0, loadedUrls.length + 10);
					}}> Load More ({galleryUrls.length - loadedUrls.length} Left)
					</button>
					<button on:click={() => {
						loadedUrls = galleryUrls;
					}}> Load All ({galleryUrls.length - loadedUrls.length} Left)
					</button>
				</div>
		{/if}
	{/if}
	{#if zoomIndex !== null}
		<ZoomImage close={() => { zoomIndex = null; }} {gallery} {id} url={galleryUrls[zoomIndex]}  />
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
	let galleryUrls = Object.keys(gallery);
	let loadedUrls: string[] = [];
	let zoomIndex: number | null = null;

	// Listens to keypress
	onMount(() => {
		document.addEventListener("keydown", (event) => {
			if(zoomIndex === null) return;
			if(event.key === "Escape") zoomIndex = null;
			else if(event.key === "ArrowLeft") zoomIndex = Math.max(zoomIndex - 1, 0);
			else if(event.key === "ArrowRight") zoomIndex = Math.min(zoomIndex + 1, loadedUrls.length - 1);
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