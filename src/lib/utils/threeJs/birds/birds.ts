import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { setupModel } from './setupModel';

export const loadBirds = async () => {
	const loader = new GLTFLoader();
	const [parrotData, flamingoData, storkData] = await Promise.all([
		loader.loadAsync('/assets/Models/Parrot.glb'),
		loader.loadAsync('/assets/Models/Flamingo.glb'),
		loader.loadAsync('/assets/Models/Stork.glb')
	]);
	const parrot = setupModel(parrotData);
	const flamingo = setupModel(flamingoData);
	const stork = setupModel(storkData);
	return { parrot, flamingo, stork };
};
