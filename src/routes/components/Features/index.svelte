<script>
	import Container from '../../../components/UI/Container/index.svelte';
	import CardFeature from './CardFeatures/index.svelte';

	const features = [
		{ name: 'Carreira', icon: 'adsf' },
		{ name: 'Carreira', icon: 'adsf' },
		{ name: 'Carreira', icon: 'adsf' },
		{ name: 'Carreira', icon: 'adsf' },
		{ name: 'Carreira', icon: 'adsf' },
		{ name: 'Carreira', icon: 'adsf' }
	];
</script>

<Container>
	<h1 class="title-1 mb-6">Features</h1>
	<div class="flex flex-row flex-wrap justify-between">
		{#each features as feature}
			<CardFeature icon={feature.icon} title={feature.name} />
		{/each}
	</div>
</Container>
