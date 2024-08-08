import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import {
	createCamera,
	createCamera1,
	createControls,
	createCube,
	createCube2,
	createCube3,
	createLights,
	createMeshGroup,
	createRenderer,
	createScene,
	createSphere0
} from './createObjs';

export class World {
	camera: PerspectiveCamera;
	scene: Scene;
	renderer: WebGLRenderer;
	loot: Loop;
	constructor(container: HTMLElement) {
		// this.camera = createCamera(75, container.clientWidth / container.clientHeight);
		// this.camera = createCamera();

		this.camera = createCamera1();
		this.scene = createScene();
		this.renderer = createRenderer();
		this.loop = new Loop(this.camera, this.scene, this.renderer);
		const controls = createControls(this.camera, this.renderer.domElement);

		container.append(this.renderer.domElement);

		// const cube = createCube();
		// const cube = createCube2();
		const cube = createCube3();

		this.loop.updatables.push(controls);
		// this.loop.updatables.push(cube);
		// this.loop.updatables.push(this.camera);
		// cube.rotateX = 0.
		const { light, ambientLigh } = createLights();
		this.scene.add(light, ambientLigh);
		this.scene.add(cube);

		const meshGroup = createMeshGroup();
		this.loop.updatables.push(meshGroup);
		this.scene.add(meshGroup);
		const resizer = new Resizer(this.camera, this.renderer, container);
		// With animation this is no longer necessari
		// resizer.onResize = () => {
		// 	this.render();
		// };
	}

	render(): void {
		this.renderer.render(this.scene, this.camera);
	}

	stop() {
		this.loop.stop();
	}
	start() {
		this.loop.start();
	}
}

const setSize = (camera: PerspectiveCamera, renderer: WebGLRenderer, container: HTMLElement) => {
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
};

export class Resizer {
	onResize() {}
	constructor(camera: PerspectiveCamera, renderer: WebGLRenderer, container: HTMLElement) {
		setSize(camera, renderer, container);
		window.addEventListener('resize', () => {
			// console.log('Resized');
			setSize(camera, renderer, container);
			this.onResize();
		});
	}
}

const clock = new Clock();

export class Loop {
	camera: PerspectiveCamera;
	scene: Scene;
	renderer: WebGLRenderer;
	updatables: any[];
	constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
		this.renderer = renderer;
		this.camera = camera;
		this.scene = scene;
		this.updatables = [];
	}

	start() {
		this.renderer.setAnimationLoop(() => {
			this.tick();
			this.renderer.render(this.scene, this.camera);
		});
	}
	stop() {
		this.renderer.setAnimationLoop(null);
	}
	tick() {
		const delta = clock.getDelta();
		for (const obj of this.updatables) {
			obj.tick(delta);
		}
	}
}
