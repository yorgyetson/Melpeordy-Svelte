<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closeAnswer() {
		dispatch('close', {});
	}
	export let answer: String;
</script>

<div
	in:scale
	out:fade
	on:click={closeAnswer}
	class="flex items-center justify-center w-full h-full absolute top-0 left-0 font-bold text-white bg-blue-500"
>
	{answer}
</div>
