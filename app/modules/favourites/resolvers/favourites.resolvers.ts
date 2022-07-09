const resolvers = {
  Query: {
    async favourites(parent: any, args: any, context: any) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.favouritesAPI.getFavourites(
        context.token
      );
      return result ? result : null;
    },
  },
  Mutation: {
    async addTrackToFavourites(parent: any, { trackId }: any, context: any) {
      const result = await context.dataSources.favouritesAPI.addFavourites(
        context.token,
        "tracks",
        trackId
      );
      return result ? result : null;
    },
    async addBandToFavourites(parent: any, { bandId }: any, context: any) {
      const result = await context.dataSources.favouritesAPI.addFavourites(
        context.token,
        "bands",
        bandId
      );
      return result ? result : null;
    },
    async addArtistToFavourites(parent: any, { artistId }: any, context: any) {
      const result = await context.dataSources.favouritesAPI.addFavourites(
        context.token,
        "artists",
        artistId
      );
      return result ? result : null;
    },
    async addGenreToFavourites(parent: any, { genreId }: any, context: any) {
      const result = await context.dataSources.favouritesAPI.addFavourites(
        context.token,
        "genres",
        genreId
      );
      return result ? result : null;
    },
    async removeTrackFromFavourites(parent: any, { trackId }: any, context: any) {
      const result = await context.dataSources.favouritesAPI.removeFavourites(
        context.token,
        "tracks",
        trackId
      );
      return result ? result : null;
    },
    async removeBandFromFavourites(parent: any, { bandId }: any, context: any) {
      const result = await context.dataSources.favouritesAPI.removeFavourites(
        context.token,
        "bands",
        bandId
      );
      return result ? result : null;
    },
    async removeArtistFromFavourites(
      parent: any,
      { artistId }: any,
      context: any
    ) {
      const result = await context.dataSources.favouritesAPI.removeFavourites(
        context.token,
        "artists",
        artistId
      );
      return result ? result : null;
    },
    async removeGenreFromFavourites(parent: any, { genreId }: any, context: any) {
      const result = await context.dataSources.favouritesAPI.removeFavourites(
        context.token,
        "genres",
        genreId
      );
      return result ? result : null;
    },
  },
  Favourites: {
    id: (parent: any) => parent._id,
    bands: async (parent: any, args: any, context: any, info: any) => {
      return parent.bandsIds.map(
        async (bandsId: string) =>
          await context.dataSources.bandsAPI.getBand(bandsId)
      );
    },
    genres: async (parent: any, args: any, context: any, info: any) => {
      return parent.genresIds.map(
        async (genresId: string) =>
          await context.dataSources.genresAPI.getGenre(genresId)
      );
    },
    artists: async (parent: any, args: any, context: any, info: any) => {
      return parent.artistsIds.map(
        async (artistsId: string) =>
          await context.dataSources.artistsAPI.getArtist(artistsId)
      );
    },
    tracks: async (parent: any, args: any, context: any, info: any) => {
      return parent.tracksIds.map(
        async (trackId: string) =>
          await context.dataSources.tracksAPI.getTrack(trackId)
      );
    },
  },
};

export default resolvers;
