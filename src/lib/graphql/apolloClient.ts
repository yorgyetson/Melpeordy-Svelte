import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client/core';
import ws from 'ws';
import { getOperationAST } from 'graphql';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getAuthToken } from '$lib/token';
import { browser } from '$app/environment';

const cache = new InMemoryCache({
    addTypename: true
});

const httpLink = new HttpLink({
    uri: 'http://localhost:8080/v1/graphql'
});

const authLink = setContext(async (_, { headers }) => {
    const token = await getAuthToken();
    return {
        headers: {
            ...headers,
            ...(token && { Authorization: `Bearer ${token}` })
        }
    };
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://localhost:8080/v1/graphql',
        webSocketImpl: browser ? WebSocket : ws,
        connectionParams: async () => {
            const token = await getAuthToken();
            return {
                headers: {
                    ...(token && { Authorization: `Bearer ${token}` })
                }
            };
        }
    })
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (browser && graphQLErrors) {
        console.log('gql error');
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
    }
    if (browser && networkError) console.log(`[Network error]: ${networkError}`);
});

const link = ApolloLink.split(
    (op: any) => {
        // check if it is a subscription
        const operationAST = getOperationAST(op.query, op.operationName);
        return !!operationAST && operationAST.operation === 'subscription';
    },
    wsLink,
    ApolloLink.from([errorLink, authLink, httpLink])
);

export default new ApolloClient({ cache, link });
