import typeDef from "./schemas/albums.shemas";
import resolvers from "./resolvers/albums.resolvers";
import { AlbumsAPI } from "./services/albums.services";

export default {
  typeDef,
  resolvers,
  AlbumsAPI,
};
