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
    jwt(email: String!, password: String!): String
    verify: User
  }
  type Mutation {
    register(firstName: String!, lastName: String!,
      password: String!, email: String!, favouriteArtistIds: [String]): User
  }
`

export default typeDefs