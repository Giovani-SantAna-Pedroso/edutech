<script>
	export let icon;
	export let title;
</script>

<div
	class={`flex flex-row items-center text-[24px] md:text-[20px] rounded-lg p-4 bg-secondary text-white mb-[20px] w-full md:w-[30%]`}
>
	<div class="mr-4">{icon}</div>
	{title}
</div>
