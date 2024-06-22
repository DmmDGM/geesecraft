<!-- Header -->
<svelte:head>
	<title>Geesecraft</title>
</svelte:head>

<!-- Content -->
<div id="content">
	<!-- Navigation -->
	<nav>
		<!-- Title -->
		<Title />

		<!-- Links -->
		<Links />
	</nav>

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
	import "$lib/soda/cherry.scss";
	import Links from "./links.svelte";
	import Title from "./title.svelte";
</script>

<!-- Style -->
<style lang="scss">	
	// Content
	#content {
		display: flex;
		flex-direction: column;
	}

	// Navigation
	nav {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 15px 20px;
	}

	@media screen and (max-width: 750px) {
		nav {
			flex-direction: column;
			justify-content: center;
		}
	}

	// Main
	main {
		flex: 1;
		padding: 25px 10vw;
	}

</style>