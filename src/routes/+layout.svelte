<!-- Header -->
<svelte:head>
	<title>Geesecraft</title>
</svelte:head>

<!-- Content -->
<div id="content">
	<!-- Navigation -->
	<div id="navigation">
		<Navigation />
	</div>

	<!-- Main -->
	<main>
		<slot />
	</main>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import "$lib/soda/grape.scss";
	import "$lib/soda/vanilla.scss";
	import Navigation from "./navigation.svelte";
</script>

<!-- Style -->
<style lang="scss">
	// Global
	:global {
		// Imports
		@import "src/lib/soda/apple.scss";

		// Defaults
		* {
			color: rgb(var(--soda-rgb-white));
			scrollbar-color: rgb(var(--soda-rgb-white)) rgb(var(--soda-rgb-black));
		}

		// Body
		body {
			background-color: rgb(var(--soda-rgb-black));
		}
	}
	
	// Content
	#content {
		display: flex;
		flex-direction: column;
	}

	// Main
	main {
		flex: 1;
		padding: 25px 10vw;
	}

</style>