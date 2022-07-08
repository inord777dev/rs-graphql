import { gql } from "apollo-server";

const typeDefs = gql`
  type Member {
      id: ID!
      artist: Artist
      nikeName: String
  }

  type Query {
    member(memberId: ID!): Member
  }
`

export default typeDefs