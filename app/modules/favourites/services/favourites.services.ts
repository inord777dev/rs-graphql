import { RESTDataSource } from "apollo-datasource-rest";

export interface Favorite {
  _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

const url = process.env.MICROSERVISE_URL || "http://localhost";
const port = Number(process.env.MICROSERVISE_FAVORITE_PORT) || 3007;
const path = process.env.MICROSERVISE_FAVORITE_PATH || "/v1/favourites";

export class FavoritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  async getFavourites(token: string) {
    const result = await this.get(path, undefined, {
      headers: { Authorization: token },
    });
    return result as Favorite;
  }

  async addFavourites(token: string, type: string, id: string) {
    const result = await this.put(
      `${path}/add`,
      {
        type,
        id,
      },
      {
        headers: { Authorization: token },
      }
    );
    return result as Favorite;
  }

  async removeFavourites(token: string, type: string, id: string) {
    const result = await this.put(
      `${path}/remove`,
      {
        type,
        id,
      },
      {
        headers: { Authorization: token },
      }
    );
    return result as Favorite;
  }
}
