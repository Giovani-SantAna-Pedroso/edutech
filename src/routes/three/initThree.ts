import * as T from 'three';
import type { Element } from 'svelte/types/compiler/interfaces';

type Three = {
	camera: T.Camera;
	scene: T.Scene;
	renderer: T.WebGLRenderer;
	render: () => void;
};

export const initThreeJs = (container: Element): Three => {
	const w = window.innerWidth;
	const h = window.innerHeight;
	console.log(w);
	console.log(h);

	const renderer = new T.WebGLRenderer({ antialias: true });
	renderer.setSize(w, h);
	container.appendChild(renderer.domElement);
	const camera = new T.PerspectiveCamera(75, w / h, 2, 2000);
	camera.position.z = 4;
	const scene = new T.Scene();

	function render() {
		renderer.render(scene, camera);
	}

	return { camera, scene, renderer, render };
};
