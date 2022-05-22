import  {ApolloClient,createHttpLink,InMemoryCache,} from "@apollo/client/core";
//import {ApolloClient} from './apollo';    
const HttpLink = createHttpLink({
    uri:'https://countries.trevorblades.com/',
})
//import { provide } from "vue";
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
    link: HttpLink,
    cache,
});
//provideApolloClient (apolloClient);
export  { apolloClient };
