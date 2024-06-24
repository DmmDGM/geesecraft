<!-- Image -->
<button class="soda-button" id="image" on:click={() => {
	open();
}}> <img src={`src/lib/seasons/${id}/gallery/${url}`} alt={url} />
	<div>{gallery[url].name}</div>
	<div>({url})</div>
</button>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	export let gallery: Season.Gallery;
	export let id: string;
	export let open: () => void;
	export let url: string;
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
		width: fit-content;

		img {
			max-height: 200px;
		}
	}
</style>