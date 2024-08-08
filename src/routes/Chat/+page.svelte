<script lang="ts">
	let inputValue: string = '';
	const handleButton = () => {
		alert(inputValue);
	};
</script>

<div class="flex flex-col justify-between min-h-screen">
	<div>asfd</div>
	<form>
		<input bind:value={inputValue} type="text" />
		<button on:click={handleButton}>press</button>
	</form>
</div>
