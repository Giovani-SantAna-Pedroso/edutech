import { Mesh } from 'three';
import { createGeometries } from './geometries';
import { createMaterials } from './material';

export const createMeshes = () => {
	const geometries = createGeometries();
	const mats = createMaterials();

	const cabin = new Mesh(geometries.cabin, mats.body);
	cabin.position.set(1.5, 1.4, 0);
	const chimney = new Mesh(geometries.chimney, mats.detail);
	chimney.position.set(-2, 1.9, 0);

	const nose = new Mesh(geometries.nose, mats.body);
	nose.position.set(-1, 1, 0);
	nose.rotation.z = Math.PI / 2;

	const smallWheelRear = new Mesh(geometries.wheel, mats.detail);
	smallWheelRear.position.y = 0.5;
	smallWheelRear.rotation.x = Math.PI / 2;

	const smallWheelCenter = smallWheelRear.clone();
	smallWheelCenter.position.x = -1;

	const smallWheelFront = smallWheelRear.clone();
	smallWheelFront.position.x = -2;

	const bigWheel = smallWheelRear.clone();
	bigWheel.position.set(1.5, 0.9, 0);
	bigWheel.scale.set(2, 1.25, 2);

	return {
		bigWheel,
		cabin,
		chimney,
		nose,
		smallWheelRear,
		smallWheelFront,
		smallWheelCenter
	};
};
