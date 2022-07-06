import { gql } from "apollo-server";

const typeDefs = gql`
  type Author {
    id: ID!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    author: Author
    votes: Int
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    upvotePost(postId: ID!): Post
  }
`

export default typeDefs