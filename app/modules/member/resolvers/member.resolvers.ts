const resolvers = {
  Query: {
    async member(parent: any, { memberId }: any, context: any) {
      const result = await context.dataSources.artistsAPI.getArtist(memberId);
      return result ? result : null;
    },
  },
  Member: {
    id: (parent: any) =>parent._id,
    artist: (parent: any) => parent,
  },
};

export default resolvers;
