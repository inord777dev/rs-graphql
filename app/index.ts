import "dotenv/config";
import { ApolloServer, gql } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import _ from "lodash";

import albums from "./modules/albums/albums.module";
import artists from "./modules/artists/artists.module";
import bands from "./modules/bands/bands.module";
import favourites from "./modules/favourites/favourites.module";
import genres from "./modules/genres/genres.module";
import member from "./modules/member/member.module";
import tracks from "./modules/tracks/tracks.module";
import users from "./modules/users/users.module";

async function main() {
  const typeDefs = gql`
    type DeletePayload {
      acknowledged: Boolean
      deletedCount: Int
    }
  `;

  const resolvers = {};

  const schema = makeExecutableSchema({
    typeDefs: [
      typeDefs,
      albums.typeDef,
      artists.typeDef,
      bands.typeDef,
      favourites.typeDef,
      genres.typeDef,
      member.typeDef,
      tracks.typeDef,
      users.typeDef,
    ],
    resolvers: _.merge(
      resolvers,
      tracks.resolvers,
      users.resolvers,
      genres.resolvers,
      artists.resolvers,
      bands.resolvers
    ),
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
      return {
        tracksAPI: new tracks.TracksAPI(),
        usersAPI: new users.UsersAPI(),
        genresAPI: new genres.GenresAPI(),
        artistsAPI: new artists.ArtistsAPI(),
        bandsAPI: new bands.BandsAPI(),
      };
    },
    context: ({ req }) => {
      const token = (req.get("Authorization") || "").trim();
      return { token };
    },
  });

  const port = Number(process.env.PORT) || 4000;

  const { url } = await server.listen({ port });
  console.log(`
    🚀  Server is running
    🔉  Listening on port ${port}
    📭  Query at ${url}
    `);
}

main();
