<script lang="ts">
	import Category from '$lib/Board/Category.svelte';
	import type { Games } from '$lib/graphql/graphql';

	export let game: Games;
</script>

<div class="flex justify-between items-stretch">
	{#each game.categories as category}
		<Category {category} />
	{/each}
</div>
