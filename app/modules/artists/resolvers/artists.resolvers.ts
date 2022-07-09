interface artistParams {
  artistId: string;
}

interface createArtistParams {
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[];
  instruments: string[];
}

interface updateArtistParams extends createArtistParams {
  artistId: string;
}

interface deleteArtistParams {
  artistId: string;
}

const resolvers = {
  Query: {
    async artist(parent: any, { artistId }: artistParams, context: any) {
      const result = await context.dataSources.artistsAPI.getArtist(artistId);
      return result ? result : null;
    },
    async artists(parent: any, args: any, context: any) {
      const result = await context.dataSources.artistsAPI.getArtists();
      return result.items;
    },
  },
  Mutation: {
    async createArtist(
      parent: any,
      {
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments,
      }: createArtistParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.artistsAPI.createArtist(
        context.token,
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments
      );
      return result ? result : null;
    },
    async updateArtist(
      parent: any,
      {
        artistId,
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments,
      }: updateArtistParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.artistsAPI.updateArtist(
        context.token,
        artistId,
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments,
      );
      return result ? result : null;
    },
    async deleteArtist(
      parent: any,
      { artistId }: deleteArtistParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.artistsAPI.deleteArtist(
        context.token,
        artistId
      );
      return result;
    },
  },
  Artist: {
    id: (parent: any) => parent._id,
    bands: async (parent: any, args: any, context: any, info: any) => {
      return parent.bandsIds.map(
        async (bandsId: string) =>
          await context.dataSources.bandsAPI.getBand(bandsId)
      );
    },
  },
};

export default resolvers;
