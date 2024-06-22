<!-- Mebers -->
<div id="members">
	<div class="heading">Members</div>
	{#each data.members as member}
		<div class="content">- { member }</div>
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
	// Members
	#members {
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