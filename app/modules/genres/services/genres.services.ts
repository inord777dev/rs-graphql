import { RESTDataSource } from "apollo-datasource-rest";
import { DeletePayload } from "../../common/common";

export interface Genre {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

const url = process.env.MICROSERVISE_URL || "http://localhost";
const port = Number(process.env.MICROSERVISE_GENRES_PORT) || 3001;
const path = process.env.MICROSERVISE_GENRES_PATH || "/v1/genres";

export class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  async getGenres() {
    const result = await this.get(path);
    return result;
  }

  async getGenre(id: string) {
    return (await this.get(`${path}/${encodeURIComponent(id)}`)) as Genre;
  }

  async createGenre(
    token: string,
    name: string,
    description: string,
    country: string,
    year: number
  ) {
    return (await this.post(
      path,
      {
        name,
        description,
        country,
        year,
      },
      { headers: { Authorization: token } }
    )) as Genre;
  }

  async updateGenre(
    token: string,
    id: string,
    name: string,
    description: string,
    country: string,
    year: number
  ) {
    return (await this.put(
      `${path}/${encodeURIComponent(id)}`,
      {
        name,
        description,
        country,
        year,
      },
      { headers: { Authorization: token } }
    )) as Genre;
  }

  async deleteGenre(token: string, id: string) {
    return (await this.delete(`${path}/${encodeURIComponent(id)}`, undefined, {
      headers: { Authorization: token },
    })) as DeletePayload;
  }
}
