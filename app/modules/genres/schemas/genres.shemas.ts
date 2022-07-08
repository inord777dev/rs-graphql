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
    genre(genreId: ID!): Genre
    genres: [Genre]!
  }
`

export default typeDefs