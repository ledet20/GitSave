import React from "react";
import { repo_query, user_query } from "../queries/query";
import { Query } from "react-apollo";
import { DisplayRepo } from "./DisplayRepo";

export const RepoSearch = props => {
  const { user_name, repo_name, onSearch } = props;
  console.log(onSearch);
  return (
    <Query query={repo_query} variables={{ repo_name, user_name }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error && onSearch) return `Error ${error.message}`;
        else if (error && !onSearch) return "";
        console.log(data.repository.issues.edges);
        const issues = data.repository.issues.edges;
        return (
          <div>
            <p>Repo description: {data.repository.description}</p>
            <p>fork count: {data.repository.forkCount}</p>
            {issues.map((issue, index) => {
              return (
                <div key={issue.node.title}>
                  <DisplayRepo title={issue.node.title} url={issue.node.url} />
                </div>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};
