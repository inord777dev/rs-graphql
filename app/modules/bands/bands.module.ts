import typeDef from './schemas/bands.shemas'
import resolvers from './resolvers/bands.resolvers'
import { BandsAPI } from "./services/bands.services";

export default {
    typeDef,
    resolvers,
    BandsAPI
}