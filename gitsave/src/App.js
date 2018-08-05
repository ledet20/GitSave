import React, { Component } from "react";
import { Header } from "./components/Header";
import Search from "./components/Search";
import { SearchData } from "./components/SearchData";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https:///graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header />
          <Search />
          <SearchData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
