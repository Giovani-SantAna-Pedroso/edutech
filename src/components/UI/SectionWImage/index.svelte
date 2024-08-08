<script lang="ts">
	import Title from '../Title/index.svelte';
	export let img: any;
	export let headerLevel: number;
	export let reverse = undefined;
	export let title: string;
</script>

<section>
	<Title {headerLevel} {title} invert="yes" />
	<div class={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-between`}>
		<img src={img} alt="Logo" class="w-full md:w-[40%]" />
		<div class="md:max-w-[40%]">
			<Title {headerLevel} {title} invert="no" />
			<p><slot /></p>
		</div>
	</div>
</section>
