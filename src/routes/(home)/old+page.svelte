<!-- Container -->
<div id="container">
	<!-- Welcome -->
	<div id="welcome">
		<div id="welcome-title">Geesecraft</div>
		<div id="welcome-subtitle">"Of the geese, by the geese, for the geese."</div>
		<div id="welcome-geese">🪿 🪿 🪿 🪿 🪿</div>
	</div>

	<!-- About -->
	<div id="about">
		<div id="about-title">About</div>
		<p class="about-description">
			Welcome to Geesecraft! We are a bunch of geese who group together every summer to have some fun in Minecraft and forget about our future worries temporarily. Geesecraft is a casual, cooperative, survival Minecraft server that focuses primarily on discoverying new features, building huge (and honestly sometimes quite ugly too, but ¯\_(ツ)_/¯) structures, and maximizing farm outputs.
		</p>
		<enhanced:img
			src="$lib/gallery/s3/welcome_to_geeseville.png?w=750;250"
			alt="welcome to geeseville"
			sizes="(min-width:750px) 750px, 250px"
			class="about-image"
		/>
		<p class="about-description">
			(Season 3: Screenshot of our base)
		</p>
		<p class="about-description">
			Sometimes, we put mods to make the server more interesting.
			Everything is powered by
			<a href="https://fabricmc.net/" target="_blank" rel="noopener noreferrer" class="about-link">Fabric</a>
			because we only use the fastest, cleanest, and most optimized option.
			You can find the mod list in the mods section of each season.
		</p>
		<enhanced:img
			src="$lib/gallery/s4/race_to_space.png?w=500;250"
			alt="welcome to geeseville"
			sizes="(min-width:500px) 500px, 250px"
			class="about-image"
		/>
		<p class="about-description">
			(Season 4: Screenshot of space race)
		</p>
		<p class="about-description">
			Check out some of our amazing content on YouTube too!
		</p>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/pS_-XAJgWIE?si=QVE5govuKSI3Zxo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="about-youtube"></iframe>
		<p class="about-description">
			(Season 4: Video of a spinning cat)
		</p>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/YHOWsCPelCc?si=qx4Ssvgi712b3LP1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="about-youtube"></iframe>
		<p class="about-description">
			(Season 4: Video of the construction process of the end XP farm)
		</p>
		<p class="about-description">
			Join our
			<a href="https://discord.gg/HYgcp85g6u" target="_blank" rel="noopener noreferrer" class="about-link">Discord</a>
			and shoot us a message if you would like to join us!
		</p>
	</div>

	<!-- Seasons -->
	<div id="seasons">
		<div id="seasons-title">

		</div>
		<div id="seasons-active">

		</div>
		<div id="seasons-archive">

		</div>
	</div>
</div>

<!-- Script -->
<script lang="ts">

</script>

<!-- Style -->
<style lang="scss">

	// Container
	#container {
		display: flex;
		flex-direction: column;
		gap: 100px 0px;

		// Welcome
		#welcome {
			display: flex;
			align-items: center;
			flex-direction: column;
			height: 750px;
			width: 100%;
			position: relative;
			gap: 15px 0px;
			justify-content: center;

			@media screen and (max-width: 750px) {
				height: 500px;
			}

			// Welcome title
			#welcome-title {
				// @extend .soda-font-75;
				// @extend .soda-hover-underline;

				@media screen and (max-width: 750px) {
					font-size: 25px;
					line-height: 30px;
				}

				&::after {
					background-color: rgb(var(--soda-rgb-white));
				}
			}

			// Welcome subtitle
			// Welcome geese
			#welcome-subtitle, #welcome-geese {
				// @extend .soda-font-20;
				font-weight: normal;
				text-align: center;

				@media screen and (max-width: 750px) {
					font-size: 15px;
					line-height: 20px;
				}
			}
		}

		// About
		#about {
			align-items: center;
			display: flex;
			flex-direction: column;
			gap: 35px 0px;

			// About title
			#about-title {
				// @extend .soda-font-25;
			}

			// About description
			.about-description {
				text-align: center;
			}

			// About image
			.about-image {
				height: auto;
				width: 500px;

				@media screen and (max-width: 750px) {
					width: 250px;
				}
			}

			// About link
			.about-link {
				color: rgb(var(--soda-rgb-sky-blue));
			}

			// About image
			.about-youtube {
				aspect-ratio: 16 / 9;
				height: auto;
				width: 500px;

				@media screen and (max-width: 750px) {
					width: 250px;
				}
			}
		}
	}
</style>