<!-- Mebers -->
<div id="members">
	<div class="heading">Members</div>
	{#each Object.entries(data.members) as [ uuid, username ]}
		<div class="content">- { username } ({ mapUUID(uuid) })</div>
	{/each}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	import uuids from "$lib/data/uuids.json";
	export let data: Season.Data;

	// Defines uuid mapper
	function mapUUID(uuid: string): string {
		return uuids[uuid as keyof typeof uuids];
	}
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