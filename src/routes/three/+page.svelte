<script lang="ts">
	import { onMount } from 'svelte';
	import { World } from '$lib/utils/threeJs/World4';
	let world: World;
	let toggleAni = true;

	onMount(async () => {
		const container = document.querySelector('#container-scene');
		// const world = new World(container);
		world = new World(container);
		await world.init();
		world.start();
	});
	const handletButton = () => {
		toggleAni = !toggleAni;
		if (toggleAni) {
			world.start();
			return;
		}
		world.stop();
	};
</script>

<button class="btn btn-primary" on:click={handletButton}>{toggleAni ? 'Stop' : 'Start'}</button>
<div id="container-scene" class="min-h-screen"></div>
