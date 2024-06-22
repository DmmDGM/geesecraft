<!-- Content -->
<div id="content">
	<!-- Navigation -->
	<Navigation />
	
	<!-- Slot -->
	<main>
		<slot />
	</main>
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
		height: 100%;
	}

	// Slot
	main {
		align-items: center;
		flex: 1;
		justify-content: center;
		padding: 25px 0px;
	}
</style>