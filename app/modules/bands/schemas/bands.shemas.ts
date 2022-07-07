import { gql } from "apollo-server";

const typeDefs = gql`
  type Band {
      id: ID!
      name: String
      origin: String
      members: [Member]
      website: String
      genres: [Genre]
  }

  type Query {
    band(bandId: ID!): Band
  }
`

export default typeDefs