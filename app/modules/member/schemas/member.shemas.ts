import { gql } from "apollo-server";

const typeDefs = gql`
  type Member {
      id: ID!
      artist: Artist
  }

  type Query {
    member(memberId: ID!): Member
  }
`

export default typeDefs