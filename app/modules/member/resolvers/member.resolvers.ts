const resolvers = {
  Query: {
    async member(parent: any, { artistId }: any, context: any) {
      const result = await context.dataSources.artistsAPI.getArtist(artistId);
      return result ? result : null;
    },
  },
  Member: {
    id: (parent: any) => parent._id,
    artist: (parent: any) => parent,
  }
}

export default resolvers