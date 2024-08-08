import {
	BoxGeometry,
	Camera,
	Color,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer
} from 'three';
import { createCamera, createCube, createRenderer, createScene } from './createObjs';

export class World {
	camera: PerspectiveCamera;
	scene: Scene;
	renderer: WebGLRenderer;
	constructor(container: HTMLElement) {
		// this.camera = createCamera(75, container.clientWidth / container.clientHeight);
		this.camera = createCamera();
		this.scene = createScene();
		this.renderer = createRenderer();
		container.append(this.renderer.domElement);

		const cube = createCube();
		this.scene.add(cube);

		const resizer = new Resizer(this.camera, this.renderer, container);
	}
	render(): void {
		this.renderer.render(this.scene, this.camera);
	}
}

export class Resizer {
	constructor(camera: PerspectiveCamera, renderer: WebGLRenderer, container: HTMLElement) {
		camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
	}
}
