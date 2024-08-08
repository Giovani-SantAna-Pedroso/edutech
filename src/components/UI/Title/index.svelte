<script lang="ts">
	export let title: string;
	export let headerLevel: number;
	export let invert: string;
	const CLASS_TITLE = 'text-primary text-[32px] md:text-[64px]';
	let classTitle = `${CLASS_TITLE} ${invert == 'ignore' ? '' : invert == 'no' ? ' hidden md:flex' : 'md:hidden'}`;
</script>

{#if headerLevel == 1}
	<h1 class={classTitle}>{title}</h1>
{:else if headerLevel == 2}
	<h2 class={classTitle}>{title}</h2>
{:else if headerLevel == 3}
	<h3 class={classTitle}>{title}</h3>
{:else if headerLevel == 4}
	<h4 class={classTitle}>{title}</h4>
{/if}
