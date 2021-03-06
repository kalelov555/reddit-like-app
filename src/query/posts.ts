import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query {
    feed(orderBy: { createdAt: desc }) {
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
