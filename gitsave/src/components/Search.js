import React, { Component } from "react";
import "../stylesheets/search.css";
import { SearchData } from './SearchData';

class Search extends Component {
  state = {
    repoName: "ledet20",
    userName: "ledet20"
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


  render() {
    return (
      <div>
          <h2 className="searchTitle"> Search by User and Repository or just User </h2>
         Repository Name: <input
            className="inputField"
            type="text"
            value={this.state.repoName}
            onChange={this.setRepoName}
          />
         User Name: <input
            className="inputField"
            type="text"
            value={this.state.userName}
            onChange={this.setUserName}
          />
        <button type='submit'> Search </button> 
        <SearchData user_name={this.state.userName} repo_name={this.state.repoName}/>
      </div>
    );
  }
}

export default Search;
