import { RESTDataSource } from "apollo-datasource-rest";
import { DeletePayload } from "../../common/common";

export interface Album {
  _id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
}

const url = process.env.MICROSERVISE_URL || "http://localhost";
const port = Number(process.env.MICROSERVISE_ALBUMS_PORT) || 3005;
const path = process.env.MICROSERVISE_ALBUMS_PATH || "/v1/albums";

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  async getAlbums() {
    return await this.get(path);
  }

  async getAlbum(id: string) {
    return (await this.get(`${path}/${encodeURIComponent(id)}`)) as Album;
  }

  async createAlbum(
    token: string,
    name: string,
    released: number,
    artistsIds: string[],
    bandsIds: string[],
    trackIds: string[],
    genresIds: string[],
    image: string
  ) {
    return (await this.post(
      path,
      {
        name,
        released,
        artistsIds,
        bandsIds,
        trackIds,
        genresIds,
        image,
      },
      { headers: { Authorization: token } }
    )) as Album;
  }

  async updateAlbum(
    token: string,
    id: string,
    name: string,
    released: number,
    artistsIds: string[],
    bandsIds: string[],
    trackIds: string[],
    genresIds: string[],
    image: string
  ) {
    return (await this.put(
      `${path}/${encodeURIComponent(id)}`,
      {
        name,
        released,
        artistsIds,
        bandsIds,
        trackIds,
        genresIds,
        image,
      },
      { headers: { Authorization: token } }
    )) as Album;
  }

  async deleteAlbum(token: string, id: string) {
    return (await this.delete(`${path}/${encodeURIComponent(id)}`, undefined, {
      headers: { Authorization: token },
    })) as DeletePayload;
  }
}
