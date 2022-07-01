import { IResolvers, TypeSource } from '@graphql-tools/utils';
import { ApolloServer } from "apollo-server";

async function startApolloServer(typeDefs: TypeSource, resolvers:  IResolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
  });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
// const TrackAPI = require('./datasources/track-api');

//  async function startApolloServer(typeDefs: any) {
//     const server = new ApolloServer({typeDefs});
// //      typeDefs,
// // //     resolvers,
// // //     dataSources: () => {
// // //       return {
// // //         trackAPI: new TrackAPI(),
// // //       };
//       },

// //    const { url, port } = await server.listen();
// //    console.log(`
// //        🚀  Server is running
// //        🔉  Listening on port ${port}
// //       📭  Query at ${url}
// //      `); 
// }

//  startApolloServer(tracksTypeDefs);

console.log('123');