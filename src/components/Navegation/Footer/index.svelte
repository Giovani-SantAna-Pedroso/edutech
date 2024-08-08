<script>
	import Logo from '$lib/assets/Logo.webp';
	const company = { name: 'Generic company', philosoph: 'asdfsdfadfs' };
	const pages = [
		{ name: 'home', link: '/' },
		{ name: 'home', link: '/' },
		{ name: 'home', link: '/' },
		{ name: 'home', link: '/' },
		{ name: 'home', link: '/' }
	];
	const contactInfo = {
		email: 'asd@email.con',
		tel: '(00) 90000-0000'
	};
	const creator = { name: 'gasd', link: '/' };
</script>

<footer class="footer p-10 bg-base-300 text-base-content">
	<aside>
		<img width={120} alt="logo da empresa" src={Logo} />
		<p>
			{company.name}
			<br />
			{company.philosoph}
		</p>
	</aside>
	<nav>
		<header class="footer-title">Paginas</header>
		{#each pages as page}
			<a href={page.link} class="link link-hover">
				{page.name}
			</a>
		{/each}
	</nav>
	<nav>
		<header class="footer-title">Contato</header>
		<p class="flex items-center mb-1">
			<!-- <AiOutlineMail class="mr-4" /> -->
			{contactInfo.email}
		</p>
		<p class="flex items-center mb-1">
			<!-- <AiOutlineWhatsApp class="mr-4" /> -->
			{contactInfo.tel}
		</p>
	</nav>
</footer>
<footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
	<nav class="md:place-self-center md:justify-self-end">
		<p>
			Site made by{' '}
			<a href={creator.link} class="link link-hover underline">
				{creator.name}
			</a>
		</p>
		<p class="hidden">.</p>
	</nav>
</footer>
