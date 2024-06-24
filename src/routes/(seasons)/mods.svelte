<!-- Mods -->
<div id="mods">
	<div class="heading">Mods</div>
	{#each Object.entries(data.mods) as [ modName, modData ]}
		<a href="{modData.url}" class="soda-link">- {modName} ({modTypes[modData.type]})</a>
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	export let data: Season.Data;

	// Defines mod types
	const modTypes = {
		"mod": "Mod",
		"other": "Other",
		"plugin": "Plugin"
	};
</script>

<!-- Style -->
<style lang="scss">
	// Mods
	#mods {
		display: flex;
		flex-direction: column;
		gap: 5px 0px;
		
		.heading {
			font-weight: bold;
		}

		a {
			width: fit-content;
		}
	}
</style>