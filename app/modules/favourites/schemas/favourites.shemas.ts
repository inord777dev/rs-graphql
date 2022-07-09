import { gql } from "apollo-server";

const typeDefs = gql`
  type Favourites {
      id: ID!
      userId: ID
      bands: [Band]
      genres: [Genre]
      artists: [Artist]
      tracks: [Track]
  }

  type Query {
    favourites: Favourites
  }

  type Mutation {
    addTrackToFavourites(trackId: String): Favourites
    addBandToFavourites(bandId: String): Favourites
    addArtistToFavourites(artistId: String): Favourites
    addGenreToFavourites(genreId: String): Favourites
    removeTrackFromFavourites(trackId: String): Favourites
    removeBandFromFavourites(bandId: String): Favourites
    removeArtistFromFavourites(artistId: String): Favourites
    removeGenreFromFavourites(genreId: String): Favourites
  }
`

export default typeDefs