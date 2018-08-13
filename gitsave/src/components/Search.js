import React, { Component } from "react";
import "../stylesheets/search.css";
import { UserSearch } from "./UserSearch";
import { RepoSearch } from "./RepoSearch";

class Search extends Component {
  state = {
    repoName: "",
    userName: "",
    component: {
      repo: RepoSearch,
      user: UserSearch
    },
    searchButtonPressed: false
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

  setSearchState = () => {
    this.setState({
      searchButtonPressed: true
    });
  };

  render() {
    return (
      <div>
        <h2 className="searchTitle">
          {" "}
          Search by User and Repository or just User{" "}
        </h2>
        Repository Name:{" "}
        <input
          className="inputField"
          type="text"
          value={this.state.repoName}
          onChange={this.setRepoName}
        />
        User Name:{" "}
        <input
          className="inputField"
          type="text"
          value={this.state.userName}
          onChange={this.setUserName}
        />
        <button type="submit" onClick={this.setSearchState}>
          {" "}
          Search{" "}
        </button>
        {/* <UserSearch
          user_name={this.state.userName}
        /> */}
        <RepoSearch
          user_name={this.state.userName}
          repo_name={this.state.repoName}
          onSearch={this.state.searchButtonPressed}
        />
      </div>
    );
  }
}

export default Search;
