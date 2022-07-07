import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
      id: ID!
      firstName: String
      lastName: String
      password: String
      email: String!
  }

  type Query {
    user(userId: ID!): User
    jwt(email: String, password: String): String
    verify: User
  }
`

export default typeDefs