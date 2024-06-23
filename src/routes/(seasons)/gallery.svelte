<!-- Gallery -->
<div id="gallery">
	<div class="heading">Gallery</div>
	
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	export let gallery: Season.Gallery;

	// Defines gallery loader
	let loaded: string[] = [];
	console.log({gallery});
</script>

<!-- Style -->
<style lang="scss">
	// Gallery
	#gallery {
		.heading {
			font-weight: bold;
		}
	}
</style>