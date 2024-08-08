<script>
	import Title from '../Title/index.svelte';
	export let headerLevel;
	export let reverse = undefined;
	export let title;
</script>

<section>
	<Title {headerLevel} {title} invert="yes" />
	<div
		class={`flex flex-col items-center md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-between`}
	>
		<Title {headerLevel} {title} invert="no" />
		<div class="  text-textM md:max-w-[40vw] mb-[20px]">
			<p><slot /></p>
		</div>
	</div>
</section>
