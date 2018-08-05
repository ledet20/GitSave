import React, { Component } from "react";
import { Header } from "./components/Header";
import Search from "./components/Search";
import { SearchData } from "./components/SearchData";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <SearchData />
      </div>
    );
  }
}

export default App;
