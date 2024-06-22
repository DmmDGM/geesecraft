<!--  -->
<div id="about">
	<div class="header">Description</div>
	<p class="content">{data.description}</p>
	<p class="footnote">{data.active === true ? "Active": "Inactive"}</p>
	<p class="footnote">Version {data.version}</p>
</div>

<!-- Script -->
<script lang="ts">
	// Imports
	export let data;
</script>