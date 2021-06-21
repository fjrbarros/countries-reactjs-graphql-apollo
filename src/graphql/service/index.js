import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://testefront.dev.softplan.com.br/',
    cache: new InMemoryCache()
});

export default client;