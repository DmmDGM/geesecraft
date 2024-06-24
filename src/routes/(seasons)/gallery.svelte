<!-- Gallery -->
<div id="gallery">
	<div class="heading">Gallery</div>
	{#if galleryUrls.length === 0}
		<div class="content">Nothing to Show... Sorry</div>
	{:else}
		{#if loadedUrls.length !== 0}
			{#if loadedUrls.length !== galleryUrls.length}
				<button class="soda-button" on:click={() => {
					loadedUrls = galleryUrls.slice(0, loadedUrls.length + 10);
				}}> Load More ({galleryUrls.length - loadedUrls.length} Left)
				</button>
				<button class="soda-button" on:click={() => {
					loadedUrls = galleryUrls;
				}}> Load All ({galleryUrls.length - loadedUrls.length} Left)
				</button>
			{/if}
			<div id="images">
				{#each loadedUrls as loadedUrl}
					<GalleryImage {gallery} {id} open={() => { zoomUrl = loadedUrl; }} url={loadedUrl} />
				{/each}
			</div>
		{/if}
		{#if loadedUrls.length !== galleryUrls.length}
			<button class="soda-button" on:click={() => {
				loadedUrls = galleryUrls.slice(0, loadedUrls.length + 10);
			}}> Load More ({galleryUrls.length - loadedUrls.length} Left)
			</button>
			<button class="soda-button" on:click={() => {
				loadedUrls = galleryUrls;
			}}> Load All ({galleryUrls.length - loadedUrls.length} Left)
			</button>
		{/if}
	{/if}
	{#if zoomUrl !== null}
		<ZoomImage close={() => { zoomUrl = null; }} {gallery} {id} url={zoomUrl}  />
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
	let zoomUrl: string | null = null;
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

		#images {
			display: flex;
			flex-wrap: wrap;
			gap: 10px 10px;
		}
	}
</style>