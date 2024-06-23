<!-- Accomplishments -->
<div id="accomplishments">
	<div class="heading">Accomplishments</div>
	{#each data.accomplishments as accomplishment}
		<div class="content">- { accomplishment }</div>
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	export let data: Season.Data;
</script>

<!-- Style -->
<style lang="scss">
	// Accomplishments
	#accomplishments {
		display: flex;
		flex-direction: column;
		gap: 5px 0px;
		
		.heading {
			font-weight: bold;
		}

		.content {
			color: rgba(var(--soda-theme-foreground), 0.75);
		}
	}
</style>