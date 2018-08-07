import React from "react";
import { user_query, repo_query } from "../queries/query";
import { Query } from "react-apollo";

export const SearchData = props => {
  // map all data items
  const login = 'ledet20';
  return (
    <Query query={user_query} variables={ {props}}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        console.log(data);
        return (
          <div>
            <p> testing </p>
          </div>
        );
      }}
    </Query>
  );
};
