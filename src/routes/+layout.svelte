<!-- Content -->
<div id="content">
	<!-- Navigation -->
	<Navigation />
	
	<!-- Slot -->
	<slot />
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import "$lib/soda/grape.css";
	import "$lib/soda/vanilla.css";
	import "$lib/soda/cherry.css";
	import Navigation from "./navigation.svelte";
</script>

<!-- Style -->
<style lang="scss">
	// Content
	#content {
		display: flex;
		flex-direction: column;
	}
</style>