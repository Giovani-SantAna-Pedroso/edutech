import type { PerspectiveCamera, WebGLRenderer } from 'three';

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
