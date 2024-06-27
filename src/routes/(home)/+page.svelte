<!-- Home -->
<div id = "home">
    <div id = "title">Geesecraft</div>
    <div class = "subtitle">"For the Geese, by the Geese, of the Geese."</div>

    <!-- Image row -->
    <div id = "images">
        <enhanced:img src = "$lib/seasons/s3/gallery/dmmd_sunset.png" alt = "DmmD staring into the sunset." />
        <enhanced:img src = "$lib/seasons/s3/gallery/fepis_house.png" alt = "Fepi's house in Season 3." />
        <enhanced:img src = "$lib/seasons/s3/gallery/iipython_sunset.png" alt = "iiPython staring into the sunset." />
    </div>

    <!-- Scroll caret (using subtitle because lazy) -->
    <div class = "subtitle">▼</div>

    <!-- Individual home rows -->
    <div id = "home-rows">
        <div>
            <enhanced:img src = "$lib/seasons/s1/gallery/park_at_night.png" alt = "Season 1 park at night." />
            <div class = "row-details">
                <div class = "subtitle">Humble Beginnings</div>
                <p>
                    Geesecraft is a Minecraft SMP hosted by <a href = "https://iipython.dev">iiPython</a> yearly as part of summer break.
                    It started with 2 members (DmmD and iiPython) in May of 2021, and has since grew to 5 members and is still running as
                    of June 2024.
                </p>
            </div>
        </div>
        <div>
            <div class = "row-details">
                <div class = "subtitle">Freedom for All</div>
                <p>
                    What are the rules of Geesecraft? Simple, there are none. Geesecraft is a you-do-you type server where members aren't
                    required to do anything they don't want to. If you want to bomb somebodies house, go for it (although expect to be bombed back).
                </p>
            </div>
            <enhanced:img src = "$lib/seasons/s4/gallery/silly_dmmd.png" alt = "DmmD looking silly in a quantum suit." />
        </div>
        <div>
            <enhanced:img src = "$lib/seasons/s4/gallery/base_of_operations.png" alt = "iiPython's basement during Ad Astra segment." />
            <div class = "row-details">
                <div class = "subtitle">Automation First</div>
                <p>
                    This is an automation-centered server, and no matter what season you join, you will see automatic farms, game-breaking
                    contraptions, and whatever else you could imagine. Since Season 4, we've also incorporated tech mods such as Applied Energistics
                    2 into the server, giving us even more power over the landscape.
                </p>
            </div>
        </div>
    </div>

    <!-- Member list -->
    <div class = "subtitle">Member List</div>
    <div id = "members">
        {#each Object.entries(uuids) as [ uuid, username ]}
            <img src = "https://crafatar.com/avatars/{uuid}" alt = "{username}" />
        {/each}
    </div>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	import uuids from "$lib/data/uuids.json";
</script>

<!-- Style -->
<style lang="scss">
    @use "sass:math";

    // Constants
    $gap: 40px;  // Gap between home elements
    $padding: 25px;  // Comes from +layout.svelte
    $splash-height: math.div(385px, 2);  // Splash Height / 2

    // Mixins
    @mixin flex($direction, $item-gap: 0px) {
        display: flex;
        flex-direction: $direction;

        @if $item-gap != 0px {
            gap: $item-gap;
        }
    }

    // Homepage
    #home {
        @include flex(column, $gap);
        align-items: center;

        // 50% view height - half of splash height - top padding
        margin-top: calc(50vh - $splash-height - $padding);

        // Title & subtitle
        #title {
            font-size: 60px;
            font-weight: bold;
        }
        .subtitle {
            font-size: 24px;
            font-weight: bold;
        }
    }

    // Home rows
    #home-rows {
        @include flex(column, 50px);

        // 50% view height - half of splash height - flex gap
        margin-top: calc(50vh - $splash-height - $gap);
        margin-bottom: 10%;

        // Row styling
        div {
            @include flex(row, 25px);

            // Text detail styling
            .row-details {
                @include flex(column, 10px);
                align-items: center;
                justify-content: center;

                // I'm not lazy, I swear.
                max-width: 600px;
            }
        }
    }

    // Images
    #images {
        @include flex(row, 15px);
    }
    #members {
        @include flex(row, 20px);
        img {
            height: 75px;
        }
    }

    // Image sizing
    img {
        width: auto;
        height: 200px;
    }
</style>