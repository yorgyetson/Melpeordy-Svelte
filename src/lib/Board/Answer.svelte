<script lang="ts">
	import type { Answers } from '$lib/graphql/graphql';
	import AnswerModal from './AnswerModal.svelte';

	export let answer: Answers;

	let show = false;
</script>

{#if answer.hasBeenPlayed}
	<div>Blank</div>
{:else}
	<div class="text-center"
    on:click={() => (show = true)}>
		{answer.value}
	</div>
{/if}

{#if show}
	<AnswerModal
		answer={answer.answer}
		on:close={() => {
			show = false;
		}}
	/>
{/if}
