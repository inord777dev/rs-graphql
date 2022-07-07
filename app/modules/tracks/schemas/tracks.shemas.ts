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
    track(trackId: ID!): Track
  }
`

export default typeDefs