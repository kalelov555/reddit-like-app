import { gql } from "@apollo/client";

export const CREATE_FEED_MUTATION = gql`
  mutation CreateMutation($url: String!, $description: String!) {
    post(url: $url, description: $description) {
      id
    }
  }
`;
