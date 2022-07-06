import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from '@graphql-tools/schema'
import _ from "lodash";

import tracks from "./modules/tracks/tracks.module";

async function main() {
  const resolvers = {};

  const schema = makeExecutableSchema({
    typeDefs: [tracks.typeDef],
  });

  const server = new ApolloServer({ schema });

  const { url, port } = await server.listen();
  console.log(`
       🚀  Server is running
       🔉  Listening on port ${port}
       📭  Query at ${url}
      `);
}

main();