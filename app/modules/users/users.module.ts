import typeDef from "./schemas/users.shemas";
import resolvers from "./resolvers/users.resolvers";
import { UsersAPI } from "./services/users.services";

export default {
  typeDef,
  resolvers,
  UsersAPI,
};
