import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:10022/graphql', // Replace with your WordPress GraphQL endpoint
    cache: new InMemoryCache(),
});

export default client;
