import { gql } from "apollo-server";

const typeDefs = gql`
  type Favourites {
      id: ID!
      userId: ID
      bands: [Band]
      genres: [Genre]
      artists: [Artist]
      tracks: [Track]
  }

  type Query {
    favourites(favouritesId: ID!): Favourites
  }
`

export default typeDefs