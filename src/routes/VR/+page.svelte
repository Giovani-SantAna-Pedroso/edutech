<script lang="ts">
	import { onMount } from 'svelte';
	import { WorldVR } from './T/World';
	onMount(() => {
		const root = document.querySelector('#root-three') as any;
		const wolrd = new WorldVR(root);
		wolrd.render();
	});
</script>

<!-- <div id="root-three" class="  min-h-screen"></div> -->
<video id="video" loop muted crossOrigin="anonymous" playsinline style="display:none">
	<source src="assets/videos/MaryOculus.webm" />
	<source src="assets/videos/MaryOculus.mp4" />
</video>
