import React, { Component } from "react";
import { Header } from "./components/Header";
import Search from "./components/Search";
import {ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HttpLink  }from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink , concat} from 'apollo-link';


const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql'});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
      headers: {
          authorization: 'Bearer f7eecca8395a0fda567cb25cca93d9612484c27e',
      }
  });

  return forward(operation);
})
const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <Search />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
