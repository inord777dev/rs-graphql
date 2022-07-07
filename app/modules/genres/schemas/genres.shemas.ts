import { gql } from "apollo-server";

const typeDefs = gql`
  type Genre {
      id: ID!
      name: String
      description: String
      country: String
      year: Int
  }

  type Query {
    genres(genreId: ID!): Genre
  }
`

export default typeDefs