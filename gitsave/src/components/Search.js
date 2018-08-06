import React, { Component } from "react";
import "../stylesheets/search.css";

class Search extends Component {
  state = {
    repoName: "",
    userName: ""
  };

  setRepoName = e => {
    this.setState({
      repoName: e.target.value
    });
    console.log(this.state.repoName);
  };

  setUserName = e => {
    this.setState({
      userName: e.target.value
    });
    console.log(this.state.userName);
  };

  clearSearchBox = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.clearSearchBox}>
          <h2 className="searchTitle"> Search by User or Repository</h2>
          <input
            className="inputField"
            type="text"
            value={this.state.repoName}
            onChange={this.setRepoName}
          />
          <input
            className="inputField"
            type="text"
            value={this.state.userName}
            onChange={this.setUserName}
          />
          <input type="button" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
