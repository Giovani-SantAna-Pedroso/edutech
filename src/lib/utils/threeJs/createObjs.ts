import {
	AmbientLight,
	BoxGeometry,
	Color,
	DirectionalLight,
	HemisphereLight,
	MathUtils,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	PerspectiveCamera,
	Scene,
	SphereGeometry,
	TextureLoader,
	Group,
	WebGLRenderer,
	CylinderGeometry
} from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export function createPowerup() {
	const geometry = new BoxGeometry(2, 2, 2);
	const material = new MeshStandardMaterial({ color: 'purple' });
	const powerup = new Mesh(geometry, material);

	// this method will be called once per frame
	powerup.tick = () => {
		// increase the powerup's rotation each frame
		powerup.rotation.z += 0.05;
	};

	return powerup;
}

export function createRenderer() {
	const render = new WebGLRenderer({ antialias: true });
	return render;
}

export function createRendererPhycLight() {
	const renderer = new WebGLRenderer({ antialias: true });
	return renderer;
}

export const createScene = () => {
	const scene = new Scene();
	scene.background = new Color('#1a1a1a');
	return scene;
};

export const createLights = () => {
	// const ambientLigh = new AmbientLight('#ffffff', 2);
	const ambientLigh = new HemisphereLight('white', 'darkslategrey', 6);
	const light = new DirectionalLight('white', 8);
	light.position.set(10, 10, 10);
	return { light, ambientLigh };
};

export const createCamera = (fov = 75, ratio = 1, near = 0.2, far = 2000) => {
	const camera = new PerspectiveCamera(fov, ratio, near, far);
	camera.position.set(0, 0, 10);
	return camera;
};

export const createCamera1 = (fov = 75, ratio = 1, near = 0.2, far = 2000) => {
	const camera = new PerspectiveCamera(fov, ratio, near, far);
	camera.position.set(0, 0, 60);
	const amplitude = 10;
	const frequency = 0.01;
	let dis = 15;
	camera.tick = (delta) => {
		const x = amplitude * Math.sin(dis) + 14;
		dis += frequency;
		camera.position.z = x;
	};
	return camera;
};

export const createCube = () => {
	const geo = new BoxGeometry(4, 4, 4);
	const mat = new MeshBasicMaterial({ color: '#ffffff' });
	const cube = new Mesh(geo, mat);
	return cube;
};

export const createCube1 = () => {
	const radiansPerSecond = MathUtils.degToRad(30);
	const geo = new BoxGeometry(4, 4, 4);
	const mat = new MeshStandardMaterial({ color: '#ff00ff' });
	const cube = new Mesh(geo, mat);

	cube.rotation.set(-0.5, -0.1, 0.8);

	// cube.tick = (delta: any) => {
	// 	cube.rotation.x += radiansPerSecond * delta;
	// 	cube.rotation.y += radiansPerSecond * delta;
	// 	cube.rotation.z += radiansPerSecond * delta;
	// };
	return cube;
};

export const createCube2 = () => {
	const radiansPerSecond = MathUtils.degToRad(30);
	const geo = new BoxGeometry(4, 4, 4);
	const mat = new MeshStandardMaterial({ color: '#ff00ff' });
	const cube = new Mesh(geo, mat);

	cube.rotation.set(-0.5, -0.1, 0.8);

	cube.tick = (delta: any) => {
		cube.rotation.x += radiansPerSecond * delta;
		cube.rotation.y += radiansPerSecond * delta;
		cube.rotation.z += radiansPerSecond * delta;
	};
	return cube;
};

function createMaterial() {
	// const textureLoader = new TextureLoader();
	// const texture = textureLoader.load('../../assets/textures/grass.png');
	// // const mat = new MeshStandardMaterial({ map: texture });
	// const mat = new MeshStandardMaterial({ color: '0xff0000' });
	// return mat;

	const textureLoader = new TextureLoader();
	// The textures must be in the static folder
	const texture = textureLoader.load('/assets/textures/Carbon.png');
	const mat = new MeshStandardMaterial({ map: texture });
	return mat;
}

export const createCube3 = () => {
	const radiansPerSecond = MathUtils.degToRad(30);
	const geo = new BoxGeometry(4, 4, 4);
	const mat = createMaterial();
	console.log(mat);
	const cube = new Mesh(geo, mat);

	// cube.rotation.set(-0.5, -0.1, 0.8);

	cube.tick = (delta: any) => {
		cube.rotation.x += radiansPerSecond * delta;
		cube.rotation.y += radiansPerSecond * delta;
		cube.rotation.z += radiansPerSecond * delta;
	};
	return cube;
};

export const createControls = (camera: any, canvas: any) => {
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	controls.minDistance = 140;
	controls.maxDistance = 400;

	controls.tick = () => controls.update();

	return controls;
	// OrbitControls
};
export const createSphere0 = () => {
	const radius = 0.25;
	const widthSegments = 16;
	const heightSegments = 16;
	const ballGeo = new SphereGeometry(radius, widthSegments, heightSegments);
	const ballMat = new MeshBasicMaterial({ color: '#0000ff' });
	const ball = new Mesh(ballGeo, ballMat);

	return ball;
};

export const createMeshGroup = () => {
	const group = new Group();
	const radiansPerSecond = MathUtils.degToRad(30);
	const geo = new SphereGeometry(0.5, 16, 16);
	const mat = new MeshStandardMaterial({ color: 'red' });
	const protoBall = new Mesh(geo, mat);
	group.add(protoBall);

	for (let i = 0; i < 1; i += 0.05) {
		const sphere = protoBall.clone();
		sphere.position.x = Math.cos(2 * Math.PI * i);
		sphere.position.y = Math.sin(2 * Math.PI * i);
		sphere.scale.multiplyScalar(0.01 + i);
		group.add(sphere);
	}

	group.tick = (delta) => {
		group.rotation.z -= delta * radiansPerSecond;
	};

	return group;
};
