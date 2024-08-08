<script>
	import Container from '../../../components/UI/Container/index.svelte';

	import CardPlan from './CardPlan/index.svelte';
	const cardsData = [
		{
			title: '01',
			subTitle: 'A sub title',
			text: 'O primeiro passo você já deu, chegou até aqui. Muito bem! Em sua primeira sessão já será possível estabelecer um vínculo com sua terapeuta. Fique à vontade, não existe um cronograma pronto para levar à terapia. Importante dizer que nesse espaço você não vai se deparar com críticas ou julgamentos. Independente de qual assunto seja tratado, estarei pronta para te acolher.'
		},
		{
			title: '02',
			subTitle: 'A sub title',
			text: 'O primeiro passo você já deu, chegou até aqui. Muito bem! Em sua primeira sessão já será possível estabelecer um vínculo com sua terapeuta. Fique à vontade, não existe um cronograma pronto para levar à terapia. Importante dizer que nesse espaço você não vai se deparar com críticas ou julgamentos. Independente de qual assunto seja tratado, estarei pronta para te acolher.'
		},
		{
			title: '03',
			subTitle: 'A sub title',
			text: 'O primeiro passo você já deu, chegou até aqui. Muito bem! Em sua primeira sessão já será possível estabelecer um vínculo com sua terapeuta. Fique à vontade, não existe um cronograma pronto para levar à terapia. Importante dizer que nesse espaço você não vai se deparar com críticas ou julgamentos. Independente de qual assunto seja tratado, estarei pronta para te acolher.'
		}
	];
</script>

<Container>
	<h1 class={` title-1   mb-8 `}>3 passos para mudança</h1>

	<div class="flex flex-col md:flex-row md:justify-between">
		{#each cardsData as card}
			<CardPlan {...card} />
		{/each}
	</div>
	<div class="flex justify-center">
		<button class="btn btn-primary">Just another button</button>
	</div>
</Container>
