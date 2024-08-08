<script>
	import Container from '../../../components/UI/Container/index.svelte';
	import CardFeatures from './CardFAQ/index.svelte';
	const FAQs = [
		{
			question: 'Question x',
			ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. '
		},
		{
			question: 'Question x',
			ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. '
		},
		{
			question: 'Question x',
			ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. '
		},
		{
			question: 'Question x',
			ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. '
		},
		{
			question: 'Question x',
			ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. '
		},
		{
			question: 'Question x',
			ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla. Etiam non quam lacus suspendisse faucibus. '
		}
	];
</script>

<Container>
	<h1 class="title-1 mb-6">FAQ</h1>
	{#each FAQs as faq}
		<CardFeatures {...faq} />
	{/each}
</Container>
