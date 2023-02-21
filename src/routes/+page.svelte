<script>
	import { GetUserByUsername } from '$lib/graphql/graphql';
	import { authToken } from '$lib/stores';

	// import Board from '../lib/Board.svelte';
	$: query = GetUserByUsername({ variables: { username: 'fizi' } });
	
	// $: console.log($query);
	$: user = $query?.data?.users?.[0];
	$: console.log($authToken)
</script>

{#if $query.loading}
	<p>Loading...</p>
{:else}
	<p>Hello {user.username}</p>
{/if}
