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
    genres: [Genre]
  }

  type Mutation {
    createGenre(
      name: String
      description: String
      country: String
      year: Int) : Genre
    updateGenre(
      genreId: ID!
      name: String
      description: String
      country: String
      year: Int): Genre
    deleteGenre(genreId: ID!): DeletePayload
  }
`

export default typeDefs