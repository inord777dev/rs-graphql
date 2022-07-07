import { gql } from "apollo-server";

const typeDefs = gql`
  type Album {
      id: ID!
      name: String
      released: Int
      artists: [Artist]
      bands: [Band]
      tracks: [Track]
      genres: [Genre]
      image: String
  }

  type Query {
    albums(albumId: ID!): Album
  }
`

export default typeDefs