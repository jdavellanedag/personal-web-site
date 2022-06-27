import { ApolloClient, InMemoryCache } from "@apollo/client";

export const useGraphql = () => {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_BACKEND_GQL ? import.meta.env.VITE_BACKEND_GQL.toString() : "",
    cache: new InMemoryCache(),
  });

  return {
    client,
  };
};
