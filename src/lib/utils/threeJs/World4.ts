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
import Train from './Train';
import { Loop } from './Clock';
import { Resizer } from './Resizer';
import { loadBirds } from './birds/birds';

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
		// this.loop.updatables.push(cube);
		// this.loop.updatables.push(this.camera);
		// cube.rotateX = 0.
		const { light, ambientLigh } = createLights();
		this.scene.add(light, ambientLigh);

		// const meshGroup = createMeshGroup();
		// const train = new Train();
		this.loop.updatables.push(controls);
		// this.scene.add(train);
		// this.loop.updatables.push(meshGroup);
		const resizer = new Resizer(this.camera, this.renderer, container);
		// With animation this is no longer necessari
		// resizer.onResize = () => {
		// 	this.render();
		// };
	}

	async init() {
		const { parrot, flamingo, stork } = await loadBirds();
		parrot.position.z = 240;
		flamingo.position.x = 120;
		stork.position.x = -120;
		this.scene.add(parrot);
		this.scene.add(flamingo);
		this.scene.add(stork);
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
