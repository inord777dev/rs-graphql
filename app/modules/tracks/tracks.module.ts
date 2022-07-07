import typeDef from "./schemas/tracks.shemas";
import resolvers from "./resolvers/tracks.resolvers";
import { TracksAPI } from "./services/tracks.services";

export default {
  typeDef,
  resolvers,
  TracksAPI,
};
