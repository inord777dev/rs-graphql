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
    bands: [Band]!
  }

  type Mutation {
    createBand(
      name: String
      origin: String
      members: [String]
      website: String
      genres: [String]): Band
    updateBand(
      bandId: ID!,
      name: String
      origin: String
      members: [String]
      website: String
      genres: [String]): Band
    deleteBand(bandId: ID!): DeletePayload
  }
`

export default typeDefs