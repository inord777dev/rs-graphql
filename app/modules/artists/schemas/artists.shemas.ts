import { gql } from "apollo-server";

const typeDefs = gql`
  type Artist {
      id: ID!
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bands: [Band]
      instruments: [String]
  }

  type Query {
    artist(artistId: ID!): Artist
    artists: [Artist]!
  }

  type Mutation {
    createArtist(
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bands: [String!]
      instruments: [String]): Artist

    updateArtist(
      artistId: ID!,
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bands: [String!]
      instruments: [String]): Artist

    deleteArtist(artistId: ID!): DeletePayload
  }
`

export default typeDefs