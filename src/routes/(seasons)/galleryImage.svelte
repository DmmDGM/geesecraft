<!-- Image -->
<button class="soda-button" id="image" on:click={() => {
	open();
}}> {#await import(`$lib/seasons/${id}/gallery/${stripExtension(file)}.png`) then { default: src }}
		<img {src} alt={file} />
	{/await}
	<div>{gallery[file].name}</div>
	<div>({file})</div>
</button>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	export let file: string;
	export let gallery: Season.Gallery;
	export let id: string;
	export let open: () => void;

	// Defines extension stripper
	function stripExtension(fileName: string): string {
		return fileName.split(".").slice(0, -1).join(".");
	}
</script>

<!-- Style -->
<style lang="scss">
	// Image
	#image {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 10px 0px;
		height: 300px;
		justify-content: center;
		max-width: 100%;
		width: fit-content;
		word-break: break-all;


		img {
			max-height: 200px;
			max-width: 100%;
			object-fit: cover;
		}
	}

	@media (max-width: 600px) {
		#image {
			height: 200px;

			img {
				max-height: 50px;
			}
		}
	}
</style>