<script lang="ts">
	import type { Categories } from '$lib/graphql/graphql';
	import Answer from './Answer.svelte';

	export let category: Categories;
</script>

<div class="flex flex-col justify-between border border-black w-1/6">
	<div class="text-center p-4 font-bold text-2xl">{category.name}</div>
	{#each category.answers as answer}
		<Answer {answer} />
	{/each}
</div>
