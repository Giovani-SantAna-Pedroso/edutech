import type { GLTF } from 'three/examples/jsm/Addons.js';

export const setupModel = (data: GLTF) => {
	const model = data.scene.children[0];
	return model;
};
