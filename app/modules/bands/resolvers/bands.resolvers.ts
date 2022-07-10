interface bandParams {
  bandId: string;
}

interface createBandParams {
  name: string;
  origin: string;
  membersId: string[];
  website: string;
  genresIds: string[];
}

interface updateBandParams extends createBandParams {
  bandId: string;
}

interface deleteBandParams {
  bandId: string;
}

const resolvers = {
  Query: {
    async band(parent: any, { bandId }: bandParams, context: any) {
      const result = await context.dataSources.bandsAPI.getBand(bandId);
      return result ? result : null;
    },
    async bands(parent: any, args: any, context: any) {
      const result = await context.dataSources.bandsAPI.getBands();
      return result.items;
    },
  },
  Mutation: {
    async createBand(
      parent: any,
      { name, origin, membersId, website, genresIds }: createBandParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.bandsAPI.createBand(
        context.token,
        name,
        origin,
        membersId,
        website,
        genresIds
      );
      return result ? result : null;
    },
    async updateBand(
      parent: any,
      { bandId, name, origin, membersId, website, genresIds }: updateBandParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.bandsAPI.updateBand(
        context.token,
        bandId,
        name,
        origin,
        membersId,
        website,
        genresIds
      );
      return result ? result : null;
    },
    async deleteBand(parent: any, { bandId }: deleteBandParams, context: any) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.bandsAPI.deleteBand(
        context.token,
        bandId
      );
      return result;
    },
  },
  Band: {
    id: (parent: any) => parent._id,
    members: async (parent: any, args: any, context: any, info: any) => {
      return parent.members.map(async (artistsId: string) => {
        const result = await context.dataSources.artistsAPI.getArtist(artistsId);
        console.log(result);
        return result;
      });
    },
    genres: async (parent: any, args: any, context: any, info: any) => {
      return parent.genresIds.map(
        async (genresId: string) =>
          await context.dataSources.genresAPI.getGenre(genresId)
      );
    },
  },
};

export default resolvers;
