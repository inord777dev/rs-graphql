interface genreParams {
  genreId: string;
}

interface createGenreParams {
  name: string;
  description: string;
  country: string;
  year: string;
}

interface updateGenreParams extends createGenreParams {
  genreId: string;
}

interface deleteGenreParams {
  genreId: string;
}

const resolvers = {
  Query: {
    async genre(parent: any, { genreId }: genreParams, context: any) {
      const result = await context.dataSources.genresAPI.getGenre(genreId);
      return result ? result : null;
    },
    async genres(parent: any, args: any, context: any) {
      const result = await context.dataSources.genresAPI.getGenres();
      return result.items;
    },
  },
  Mutation: {
    async createGenre(
      parent: any,
      { name, description, country, year }: createGenreParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.genresAPI.createGenre(
        context.token,
        name,
        description,
        country,
        year
      );
      return result ? result : null;
    },
    async updateGenre(
      parent: any,
      { genreId, name, description, country, year }: updateGenreParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.genresAPI.updateGenre(
        context.token,
        genreId,
        name,
        description,
        country,
        year
      );
      return result ? result : null;
    },
    async deleteGenre(
      parent: any,
      { genreId }: deleteGenreParams,
      context: any
    ) {
      if (!context.token)
        throw new Error("Headers haven't Authorization: 'Bearer [Your token]'");
      const result = await context.dataSources.genresAPI.deleteGenre(
        context.token,
        genreId
      );
      return result;
    },
  },
  Genre: {
    id: (parent: any) => parent._id,
  },
};

export default resolvers;
