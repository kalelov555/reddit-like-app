import { gql } from "@apollo/client";

export const UPVOTE_POST = gql`
  mutation UpvotePost($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      user {
        id
        name
      }
    }
  }
`;
