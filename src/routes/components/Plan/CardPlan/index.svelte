<script>
	export let title;
	export let subTitle;
	export let text;
</script>

<div class="flex flex-col items-center w-ful md:w-[30%] mb-8">
	<h2 class={` title-2 text-secondary leading-[50px]`}>
		{title}
	</h2>
	<h3 class={` mb-6`}>{subTitle}</h3>
	<p class=" ">{text}</p>
</div>
