<script>
	import { page } from '$app/stores';
	import Board from '$lib/Board/Board.svelte';
	import { SubscribeGameByPK } from '$lib/graphql/graphql';
	$: gameId = $page.params.gameId;
	$: console.log(gameId);
	$: gameSubscription = SubscribeGameByPK({ variables: { id: gameId } });
	$: game = $gameSubscription?.data?.games_by_pk;
	$: console.log(game);
</script>

{#if game}
	<h1 class="text-center">{game.name}</h1>
	<Board {game} />
{/if}
