<script>
	export let question;
	export let ans;
</script>

<div class="collapse collapse-arrow rounded-md">
	<input type="checkbox" />
	<div
		class={`collapse-title  text-[20px] text-white md:text-[28px] bg-secondary rounded-md font-medium  `}
	>
		{question}
	</div>
	<div class="collapse-content mb-[10px] mt-[10px]">
		<p class="text-justify">{ans}</p>
	</div>
</div>
