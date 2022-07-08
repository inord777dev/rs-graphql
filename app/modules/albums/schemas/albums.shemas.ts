import { gql } from "apollo-server";

const typeDefs = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    albums: [Album]
    genres: [Genre]
    image: String
  }

  type Query {
    album(albumId: ID!): Album
    albums: [Album]!
  }

  type Mutation {
    createAlbum(
      name: String
      released: Int
      artists: [String]
      bands: [String]
      albums: [String]
      genres: [String]
      image: String
    ): Album

    updateAlbum(
      albumId: ID!
      name: String
      released: Int
      artists: [String]
      bands: [String]
      albums: [String]
      genres: [String]
      image: String
    ): Album

    deleteAlbum(albumId: ID!): DeletePayload
  }
`;

export default typeDefs;
