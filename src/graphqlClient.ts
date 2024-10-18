import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export default new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});
