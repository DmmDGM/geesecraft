<!-- About -->
<div id="about">
	<div class="heading">Description</div>
	<div class="content">{ data.description }</div>
	<hr>
	<div class="content">Server { data.active === true ? "Active": "Inactive" }</div>
	<div class="content">Version { data.version }</div>
	<div class="content">
		{ data.start === null ?
			"N/A" :
			new Date(data.start).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
		} - { data.end === null ?
			"N/A" :
			new Date(data.end).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
		}
	</div>
	{#if data.world === null}
		<div class="content">World Download Unavailable</div>
	{:else}
		<a href="{ data.world }" class="soda-link">World Download Available</a>
	{/if}
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import type { Season } from "$lib/types/season";
	export let data: Season.Data;
</script>

<!-- Style -->
<style lang="scss">
	// About
	#about {
		display: flex;
		flex-direction: column;
		gap: 5px 0px;
		
		.heading {
			font-weight: bold;
			width: fit-content;
		}

		.content {
			color: rgba(var(--soda-theme-foreground), 0.75);
		}

		a {
			width: fit-content;
		}

		hr {
			background-color: rgba(var(--soda-theme-foreground), 0.75);
			margin: 10px 0px;
		}
	}
</style>