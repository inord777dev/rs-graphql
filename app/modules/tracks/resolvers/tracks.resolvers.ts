interface trackParams {
  trackId: string;
}

interface createTrackParams {
  title: string;
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

interface updateTrackParams extends createTrackParams {
  trackId: string;
}

interface deleteTrackParams {
  trackId: string;
}

const resolvers = {
  Query: {
    async track(parent: any, { trackId }: trackParams, context: any) {
      const result = await context.dataSources.tracksAPI.getTrack(trackId);
      return result ? result : null;
    },
    async tracks(parent: any, args: any, context: any) {
      const result = await context.dataSources.tracksAPI.getTracks();
      return result.items;
    },
  },
  Mutation: {
    async createTrack(
      parent: any,
      {
        title,
        albumId,
        artistsIds,
        bandsIds,
        duration,
        released,
        genresIds,
      }: createTrackParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.tracksAPI.createTrack(
        context.token,
        title,
        albumId,
        artistsIds,
        bandsIds,
        duration,
        released,
        genresIds
      );
      return result ? result : null;
    },
    async updateTrack(
      parent: any,
      {
        trackId,
        title,
        albumId,
        artistsIds,
        bandsIds,
        duration,
        released,
        genresIds,
      }: updateTrackParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.tracksAPI.updateTrack(
        context.token,
        trackId,
        title,
        albumId,
        artistsIds,
        bandsIds,
        duration,
        released,
        genresIds
      );
      return result ? result : null;
    },
    async deleteTrack(
      parent: any,
      { trackId }: deleteTrackParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.tracksAPI.deleteTrack(
        context.token,
        trackId
      );
      return result;
    },
  },
  Track: {
    id: (parent: any) => parent._id,
    album: async (parent: any, args: any, context: any, info: any) => {
      return await context.dataSources.artistsAPI.getArtist(parent.albumId);
    },
    artists: async (parent: any, args: any, context: any, info: any) => {
      return parent.artistsIds.map(
        async (artistsId: string) =>
          await context.dataSources.artistsAPI.getArtist(artistsId)
      );
    },
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
  },
};

export default resolvers;
