<script>
	import Container from '../../../components/UI/Container/index.svelte';
	import SectionWImg from '../../../components/UI/SectionWImage/index.svelte';
	import ImgCTA from '$lib/assets/CTA.jpg';
	const handelButton = () => {
		alert('button CTA');
	};
</script>

<Container>
	<SectionWImg headerLevel={1} title={'Test CTA'} img={ImgCTA}>
		<p class="md:max-w-[34vw] text-text md:text-textM text-justify">
			Você está enfrentando dificuldades emocionais e precisa de ajuda para superá-las? Não se
			preocupe, estou aqui para ajudas. Sou uma psicóloga experiente, dedicada a auxiliar meus
			pacientes a encontrar o equilíbrio emocional e a lidar com os desafios da vida. Com abordagem
			humanizada e baseada em evidências, ofereço um ambiente seguro e confidencial para explorar
			seus sentimentos e preocupações. Agende agora sua primeira sessão e comece sua jornada para
			uma vida mais saudável e feliz.
		</p>
		<button on:click={handelButton} class="btn btn-primary mt-4">Just another button</button>
	</SectionWImg>
</Container>
