<!-- Title -->
<div id="title">
	<enhanced:img src="$lib/images/bread.png" alt="logo" id="logo" />
	<a href="/" class="soda-underline" id="home">Geesecraft</a>
	<div id="tab">
		<button id="selector"
			class="soda-button {active === true ? "active" : null}"
			bind:this={selector}>
			{selected.name}
		</button>
		{#if active === true}
			<div id="selections">
				{#each Object.entries(selections).filter(([ , selection ]) => selection.pin === true) as [ url, selection ]}
					<a href="/{url}" class="soda-button">{selection.name}</a>
				{/each}
			</div>
		{/if}
	</div>
</div>

<!-- Script -->
<script lang="ts">
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
			font-size: 20px;
			font-weight: bold;
			line-height: 25px;
		}

		#tab {
			position: relative;

			#selector {
				display: flex;
				gap: 0px 5px;

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
					border-radius: 0px;
					text-align: center;
					width: 100%;
				}
			}
		}
	}
</style>