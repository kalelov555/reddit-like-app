import { gql } from "@apollo/client";

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($url: String!, $description: String!) {
    post(url: $url, description: $description) {
      id
    }
  }
`;
