<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	const nameOfCompany = 'Generic';
	const links = [
		{ name: 'Home', link: '/' },
		// { name: 'Dashboard', link: '/' },
		{ name: 'Three', link: '/three' },
		{ name: 'VR', link: '/VR' }
		// { name: 'Login', link: '/' }
	];
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
	const handleChangeTheme = () => {
		alert('theme changed');
		document.querySelector('html').setAttribute('data-theme', themes[3]);
	};
	const themes = ['cupcake', 'coffee', 'lofi', 'aqua', 'wireframe', 'forest'];

	// document.querySelector('html').setAttribute('data-theme', themes[0]);
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">{nameOfCompany}</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal items-center px-1">
			{#each links as link}
				<li><a href={link.link}>{link.name}</a></li>
			{/each}
			<!-- <li> -->
			<!-- 	<select data-choose-theme class="select select-primary max-w-xs"> -->
			<!-- 		<option disabled selected>Change theme</option> -->
			<!-- 		<option value="light">light</option> -->
			<!-- 		<option value="dark">dark</option> -->
			<!-- 		<option value="retro">retro</option> -->
			<!-- 		<option value="aqua">aqua</option> -->
			<!-- 		<option value="wireframe">wire</option> -->
			<!-- 		<option value="luxury">luxury</option> -->
			<!-- 		<option value="coffee">coffee</option> -->
			<!-- 	</select> -->
			<!-- </li> -->
			<!-- <li> -->
			<!-- 	<details> -->
			<!-- 		<summary>Parent</summary> -->
			<!-- 		<ul class="bg-base-100 rounded-t-none p-2"> -->
			<!-- 			<li><a>Link 1</a></li> -->
			<!-- 			<li><a>Link 2</a></li> -->
			<!-- 		</ul> -->
			<!-- 	</details> -->
			<!-- </li> -->
		</ul>
	</div>
</div>
