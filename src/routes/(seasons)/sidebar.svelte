<!-- Sidebar -->
<div id="sidebar">
	<About { data } />
	<hr>
	<Members { data } />
	<hr>
	<Accomplishments { data } />
	<hr>
	<Mods { data } />
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import About from "./about.svelte";
	import Accomplishments from "./accomplishments.svelte";
	import Members from "./members.svelte";
	import Mods from "./mods.svelte";
	import type { Season } from "$lib/types/season";
	export let data: Season.Data;
</script>

<!-- Style -->
<style lang="scss">
	#sidebar {
		display: flex;
		flex-direction: column;
		gap: 5px 0px;

		hr {
			margin: 25px 0px;
		}
	}
</style>