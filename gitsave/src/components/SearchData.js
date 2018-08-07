import React from "react";
import { user_query , repo_query } from '../queries/query';
import { Query } from "react-apollo";

export const SearchData = props => {
const {user_name, repo_name } = props;
  // map all data items
  // use the Apollo Query Component
  return (
  <Query   query={user_query} variables={user_name} >
  {({loading, error, data }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
    <div>
      <p> {user_name} </p>
      <p> {repo_name} </p>
    </div>
    )
  }}
  </Query>
  );
};
