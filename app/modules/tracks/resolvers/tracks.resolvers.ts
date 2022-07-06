const resolvers = {
  Query: {
    posts() {
      return {};
    }
  },
  Post: {
    author(post: string) {
      return {};
    }
  }
}

export default resolvers