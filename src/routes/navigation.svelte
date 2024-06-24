<!-- Navigation -->
<nav>
	<!-- Compass -->
	<div id="compass">
		<enhanced:img src="$lib/images/bread.png" alt="bread" id="bread" />
		<a href="/" class="soda-underline" id="home">Geesecraft</a>
		<button class="soda-button">
			{compassPointer.name}
			<div class="soda-droplist">
				{#each Object.entries(compassCodes) as [ compassPath, compassCode ]}
					{#if compassCode.pinned === true}
						<a href="/{compassPath}">{compassCode.name}</a>
					{/if}
				{/each}
			</div>
		</button>
	</div>

	<!-- Links -->
	<div id="links">
		{#each Object.entries(links) as [ linkName, linkUrl ]}
			<a href={linkUrl} target="_blank" rel="noopener noreferrer" class="soda-button">
				{linkName}
			</a>
		{/each}
	</div>
</nav>

<!-- Script -->
<script lang="ts">
	// Imports
	import { page } from "$app/stores";
	
	// Defines compass
	$: pathname = $page.url.pathname.split("/")[1].toLowerCase();
	const compassCodes = {
		"": { name: "Home", pinned: true },
		"s5": { name: "Season 5", pinned: true },
		"s4": { name: "Season 4", pinned: true },
		"s3": { name: "Season 3", pinned: true },
		"s2": { name: "Season 2", pinned: false },
		"s1": { name: "Season 1", pinned: false },
		"null": { name: "Not Found", pinned: false }
	};
	$: compassPointer = compassCodes[pathname in compassCodes ? pathname as keyof typeof compassCodes : "null"];

	// Defines links
	const links = {
		"Discord": "https://discord.gg/HYgcp85g6u",
		"Github": "https://github.com/DmmDGM/geesecraft"
	};
</script>

<!-- Style -->
<style lang="scss">
	// Navigation
	nav {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 10px 25px;
	}

	// Compass
	#compass {
		align-items: center;
		display: flex;
		gap: 0px 10px;

		#bread {
			height: 30px;
			display: block;
			width: auto;
		}

		#home {
			font-weight: bold;
		}
	}

	// Links
	#links {
		display: flex;
		gap: 0px 10px;
	}
</style>