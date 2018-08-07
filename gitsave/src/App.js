import React, { Component } from "react";
import { Header } from "./components/Header";
import Search from "./components/Search";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


console.log(process.env.REACT_APP_API_KEY);

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_API_KEY
    }`,
  },
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
