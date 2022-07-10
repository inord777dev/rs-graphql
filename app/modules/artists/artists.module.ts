import typeDef from "./schemas/artists.shemas";
import resolvers from "./resolvers/artists.resolvers";
import { ArtistsAPI } from "./services/artists.services";

export default {
  typeDef,
  resolvers,
  ArtistsAPI,
};
