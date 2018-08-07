import gql from "graphql-tag";

export const user_query = gql`
query($user_name:String!) {
    user(login: $user_name) {
      websiteUrl
      repositories(last:5) {
        edges {
          node{
            description
            name
            hasIssuesEnabled
            viewerHasStarred
            url
            isFork
          }
        }
      }
      avatarUrl(size: 3)
      bio
    }
  }  
`

export const repo_query = gql`
query($user_name: String!,$repo_name: String!) {
    repository(owner: $user_name,name:$repo_name) {
      description
      forkCount
      issues(last:4, states:OPEN) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`