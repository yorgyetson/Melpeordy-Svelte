<script lang="ts">
	import { goto } from '$app/navigation';
	import { authToken } from '$lib/stores';
	import { get } from 'svelte/store';
	import { PUBLIC_AUTH_URL } from '$env/static/public';

	let username: string = 'fizi';
	let password: string = 'Sucks';

	const login = async () => {
		await fetch(`${PUBLIC_AUTH_URL}/users/login`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		}).then(async (data) => {
			await data.json().then(
				(data) => {
					authToken.set(data.token);
					console.log(data)
					console.log(data.token)
					return data.token;
				},
				(error) => {
					console.log(error);
					return error;
				}
			);
			goto('/');

			console.log(get(authToken));
		});
	};
</script>

<div class="flex w-full justify-center">
	<div class="flex flex-col w-1/2">
		<input class="border border-black" type="text" bind:value={username} />
		<input type="text" bind:value={password} />

		<button on:click={login}>Submit</button>
	</div>
</div>

<style>
	input {
		@apply border border-black rounded m-2 p-2;
	}
	button {
		@apply border border-black rounded m-2 p-2 bg-green-700 text-white font-bold hover:bg-green-800 active:bg-green-900;
	}
</style>
