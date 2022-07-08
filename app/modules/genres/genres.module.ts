import typeDef from './schemas/genres.shemas'
import resolvers from './resolvers/genres.resolvers'
import { GenresAPI } from "./services/genres.services";

export default {
    typeDef,
    resolvers,
    GenresAPI
}