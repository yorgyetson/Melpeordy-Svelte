import jwt_decode from 'jwt-decode';
import { browser } from '$app/environment';
import { authToken } from '$lib/stores';
import { goto } from '$app/navigation';
import { get } from 'svelte/store';
import { PUBLIC_AUTH_URL } from '$env/static/public';

export const getAuthToken = async () => {
	if (!browser) {
		return null;
	}
	const token = get(authToken);
	try {
		const decoded: any = jwt_decode(token);
		if (Math.floor(new Date().getTime() / 1000) >= decoded.exp) {
			return await refreshAuthToken();
		}
	} catch (e) {
		return await refreshAuthToken();
	}
	return token;
};

export const refreshAuthToken = async () => {
	console.log("refreshing")
	return await fetch(`${PUBLIC_AUTH_URL}/users/refresh`, {
		method: 'POST',
		credentials: 'include'
	})
		.then(async (data) => {
			const response = await data.json();
			if (response.token) {
				authToken.set(response.token);
				return response.token;
			} else {
				throw "Can't refresh token";
			}
		})
		.catch((e) => {
			console.log(e);
			if (browser) {
				goto('/login');
			}
		});
};
