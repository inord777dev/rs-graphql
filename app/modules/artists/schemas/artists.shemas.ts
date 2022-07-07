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
  }
`

export default typeDefs