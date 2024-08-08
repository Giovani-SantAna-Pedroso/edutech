import { PerspectiveCamera } from 'three';

export const createCameraVR = (fov = 75, ratio = 1, near = 0.2, far = 2000) => {
	const camera = new PerspectiveCamera(fov, ratio, near, far);
	camera.position.z = 10;
	return camera;
};
