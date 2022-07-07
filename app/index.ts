import 'dotenv/config';
import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from '@graphql-tools/schema'
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
  const resolvers = {};

  const schema = makeExecutableSchema({
    typeDefs: [albums.typeDef,
    artists.typeDef,
    bands.typeDef,
    favourites.typeDef,
    genres.typeDef,
    member.typeDef,
    tracks.typeDef,
    users.typeDef],
  });

  const server = new ApolloServer({ schema });

  
  const port = Number(process.env.PORT) || 4000;
  console.log(process.env.PORT);

  const { url } = await server.listen({ port });
  console.log(`
    🚀  Server is running
    🔉  Listening on port ${port}
    📭  Query at ${url}
    `);
}

main();