const { gql } = require('apollo-server');

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    bands: [Band]
    artists: [Artists]
    duration: Int
    realeased: Int
    genres: [Genre]
  }

  type Query {
    tracks(limit: Int, offset: Int): [Track]
    track[id: ID!]: Track
  }`

module.exports = typeDefs;