import React from "react";
import { user_query, repo_query } from "../queries/query";
import { Query } from "react-apollo";

export const SearchData = props => {
  const { user_name, repon_name } = props;
  // map all data items
  console.log(props.user_name);
  return (
    <Query query={user_query} variables={{ user_name }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        console.log(
          data.user.repositories.edges.filter(val => val.node.isFork === false)
        );
        return (
          <div>
            <p> test</p>
            {data.user.repositories.edges
              .filter(val => val.node.isFork === false)
              .map((user, index) => {
                console.log(user.node.name);
                console.log(user.node.description);
                <div key={index}>
                  <h1>{user.node.name}</h1>
                  <p> {user.node.description} </p>
                </div>;
              })}
          </div>
        );
      }}
    </Query>
  );
};
