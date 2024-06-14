<!-- Navigation -->
<nav>
	<!-- Title -->
	<div id="title">
		<enhanced:img src="$lib/images/bread.png" alt="logo" id="logo" />
		<a href="/" id="home">Geesecraft</a>
		<div id="tab">
			<button id="selector" class="{active ? "active" : null}" bind:this={selector}>{selected.name}</button>
			{#if active === true}
				<div id="selections">
					{#each Object.entries(selections) as [ url, selection ]}
						{#if selection.pin === true}
							<a href="/{url}">{selection.name}</a>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Links -->
	<div id="links">
		<a href="https://discord.gg/HYgcp85g6u" target="_blank" rel="noopener noreferrer">Discord</a>
		<a href="https://github.com/DmmDGM/geesecraft" target="_blank" rel="noopener noreferrer">Github</a>
	</div>
</nav>

<!-- Script -->
<script lang="ts">
	// Imports
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	// Initializes selector
	const selections = {
		"": { name: "Home", pin: true },
		"s5": { name: "Season 5", pin: true },
		"s4": { name: "Season 4", pin: true },
		"s3": { name: "Season 3", pin: true },
		"s2": { name: "Season 2", pin: false },
		"s1": { name: "Season 1", pin: false }
	};
	$: pathname = $page.url.pathname.split("/")[1].toLowerCase();
	$: selected = pathname in selections ? selections[pathname as keyof typeof selections] : { name: "Not Found", pin: false };
	let active = false;
	let selector: HTMLButtonElement;
	onMount(() => {
		document.addEventListener("click", (event) => active = event.target === selector && active === false);
	});
</script>

<!-- Style -->
<style lang="scss">
	// Global
	:global {
		// Imports
		@import "src/lib/soda/apple.scss";
	}

	// Navigation
	nav {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 15px 20px;
	}

	// Title
	#title {
		align-items: center;
		display: flex;
		gap: 0px 10px;

		#logo {
			display: block;
			height: 30px;
			width: 30px;
		}

		#home {
			@extend .soda-font-20;
			@extend .soda-hover-underline;
			
			&::after {
				background-color: rgb(var(--soda-rgb-white)	);
			}
		}

		#tab {
			position: relative;

			#selector {
				@extend .soda-hover-background;
				background-color: rgba(var(--soda-rgb-light-black), 0.5);
				border-radius: 5px;
				display: flex;
				gap: 0px 5px;
				padding: 5px 10px;
						
				&:focus-visible, &:hover {
					background-color: rgba(var(--soda-rgb-light-black), 1);
				}

				&::after {
					content: "▾";
					transform: rotate(90deg);
					transition: transform 0.2s ease;
				}

				&.active::after {
					transform: rotate(0deg);
				}
			}

			#selections {
				align-items: center;
				border-radius: 5px;
				display: flex;
				flex-direction: column;
				left: 50%;
				overflow: hidden;
				position: absolute;
				top: 35px;
				transform: translate(-50%);
				width: 150px;
				z-index: 1;

				a {
					@extend .soda-hover-background;
					background-color: rgba(var(--soda-rgb-light-black), 0.5);
					padding: 5px 10px;
					text-align: center;
					width: 100%;
						
					&:focus-visible, &:hover {
						background-color: rgba(var(--soda-rgb-light-black), 1);
					}
				}
			}
		}
	}

	// Links
	#links {
		display: flex;
		gap: 0px 10px;

		a {
			@extend .soda-hover-background;
			background-color: rgba(var(--soda-rgb-light-black), 0.5);
			border-radius: 5px;
			padding: 5px 10px;
			
						
			&:focus-visible, &:hover {
				background-color: rgba(var(--soda-rgb-light-black), 1);
			}
		}
	}
</style>
