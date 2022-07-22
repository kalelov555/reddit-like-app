import { gql } from "@apollo/client";

export const GET_ALL_COMMENTS = gql`
  query {
    feed(filter: "#comment#   ", orderBy: { createdAt: desc }) {
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
