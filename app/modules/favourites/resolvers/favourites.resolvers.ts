
const resolvers = {
  Query: {
    async favourites(parent: any, args: any, context: any) {
      if (!context.token) throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.favouritesAPI.getFavourites(context.token);
      return result ? result : null;
    },
  },
  Favourites: {
    id: (parent:any) => parent._id,
    tracks: async(parent: any, args: any, context: any, info:any) => {
      return parent.tracksIds.map(async (trackId:string) => await context.dataSources.tracksAPI.getTrack(trackId));
    }
  }
}

export default resolvers