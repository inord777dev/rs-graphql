import typeDef from './schemas/favourites.shemas'
import resolvers from './resolvers/favourites.resolvers'
import { FavoritesAPI } from './services/favourites.services'

export default {
    typeDef,
    resolvers,
    FavoritesAPI
}