import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

export const createCubeVR = () => {
	const geo = new BoxGeometry();
	const mat = new MeshBasicMaterial();
	const cube = new Mesh(geo, mat);

	return cube;
};
