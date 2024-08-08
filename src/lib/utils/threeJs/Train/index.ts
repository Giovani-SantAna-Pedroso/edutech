import { Group } from 'three';
import { createMeshes } from './meshes';
import { tick } from 'svelte';

const wheelSpeed = 24;
export default class Train extends Group {
	constructor() {
		super();
		this.meshes = createMeshes();

		this.add(
			this.meshes.nose,
			this.meshes.cabin,
			this.meshes.bigWheel,
			this.meshes.chimney,
			this.meshes.smallWheelRear,
			this.meshes.smallWheelCenter,
			this.meshes.smallWheelFront
		);
	}
	tick(delta) {
		this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
		this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
		this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
		this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
	}
}
