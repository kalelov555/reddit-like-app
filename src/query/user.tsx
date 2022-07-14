import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query {
    user {
      id
      name
      email
    }
  }
`;
