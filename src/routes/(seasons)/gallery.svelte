<!-- Script -->
<script lang="ts">
	// Imports
	import { page } from "$app/stores";

	// Loads gallery
	const sources = import.meta.glob("$lib/gallery/**/*.png", { eager: true, query: { enhanced: true }});
	$: pathname = $page.url.pathname.split("/")[1].toLowerCase();
	$: gallery = Object.entries(sources).filter((source) => source[0].includes(pathname));
</script>

<!-- Style -->
<style lang="scss">

</style>