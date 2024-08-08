import type { Element } from 'svelte/types/compiler/interfaces';
import { createCameraVR } from './Objs/createCameraVR';
import { createSceneVR } from './Objs/createSceneVR';
import { createRenderer } from '$lib/utils/threeJs/createObjs';
import { ResizerVR } from './Objs/ResiserVR';
import { createCubeVR } from './Objs/createCubeVR';

export class WorldVR {
	camera = createCameraVR();
	scene = createSceneVR();
	renderer = createRenderer();
	constructor(root: HTMLElement) {
		const resizer = new ResizerVR(this.camera, this.renderer, root);

		const cube = createCubeVR();
		cube.position.x = 4;
		this.scene.add(cube);

		root.appendChild(this.renderer.domElement);
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}
}
