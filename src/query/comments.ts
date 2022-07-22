import { gql } from "@apollo/client";

export const GET_ALL_COMMENTS = gql`
  query GetAllComments($filter: String!) {
    feed(filter: $filter, orderBy: { createdAt: desc }) {
      count
      links {
        id
        description
        url
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
            name
          }
        }
      }
    }
  }
`;
