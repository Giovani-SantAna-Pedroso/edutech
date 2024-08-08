import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

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
