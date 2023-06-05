import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql', // Reemplaza con la URL de tu servidor GraphQL
    cache: new InMemoryCache(),
  });

export default client;
