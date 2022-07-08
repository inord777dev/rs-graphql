interface albumParams {
  albumId: string;
}

interface createAlbumParams {
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
}

interface updateAlbumParams extends createAlbumParams {
  albumId: string;
}

interface deleteAlbumParams {
  albumId: string;
}

const resolvers = {
  Query: {
    async album(parent: any, { albumId }: albumParams, context: any) {
      const result = await context.dataSources.albumsAPI.getAlbum(albumId);
      return result ? result : null;
    },
    async albums(parent: any, args: any, context: any) {
      const result = await context.dataSources.albumsAPI.getAlbums();
      return result.items;
    },
  },
  Mutation: {
    async createAlbum(
      parent: any,
      {
        name,
        released,
        artistsIds,
        bandsIds,
        trackIds,
        genresIds,
        image,
      }: createAlbumParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.albumsAPI.createAlbum(
        context.token,
        name,
        released,
        artistsIds,
        bandsIds,
        trackIds,
        genresIds,
        image
      );
      return result ? result : null;
    },
    async updateAlbum(
      parent: any,
      {
        albumId,
        name,
        released,
        artistsIds,
        bandsIds,
        trackIds,
        genresIds,
        image,
      }: updateAlbumParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.albumsAPI.updateAlbum(
        context.token,
        albumId,
        name,
        released,
        artistsIds,
        bandsIds,
        trackIds,
        genresIds,
        image,
      );
      return result ? result : null;
    },
    async deleteAlbum(
      parent: any,
      { albumId }: deleteAlbumParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.albumsAPI.deleteAlbum(
        context.token,
        albumId
      );
      return result;
    },
  },
  Album: {
    id: (parent: any) => parent._id,
  },
};

export default resolvers;
