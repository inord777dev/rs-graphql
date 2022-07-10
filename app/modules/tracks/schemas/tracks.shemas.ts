import { gql } from "apollo-server";

const typeDefs = gql`
  type Track {
      id: ID!
      title: String!
      album: Album
      artists: [Artist]
      bands: [Band]
      duration: Int
      released: Int
      genres: [Genre]
  }

  type Query {
    track(trackId: ID!): Track!
    tracks: [Track]!
  }

  type Mutation {
    createTrack(
      title: String!,
      albumId: String,
      artists: [String!],
      bands: [String!],
      duration: Int,
      released: Int,
      genres: [String!]): Track
    updateTrack(
      trackId: ID!,
      title: String!,
      album: String,
      artists: [String!],
      bands: [String!],
      duration: Int,
      released: Int,
      genres: [String!]): Track
    deleteTrack(trackId: ID!): DeletePayload
  }
`

export default typeDefs