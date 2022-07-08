import { RESTDataSource } from "apollo-datasource-rest";
import { DeletePayload } from "../../common/common";

interface Artist {
  _id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[];
  instruments: string[];
}

const url = process.env.MICROSERVISE_URL || "http://localhost";
const port = Number(process.env.MICROSERVISE_ARTISTS_PORT) || 3002;
const path = process.env.MICROSERVISE_ARTISTS_PATH || "/v1/artists";

export class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  async getArtists() {
    return await this.get(path);
  }

  async getArtist(id: string) {
    return (await this.get(`${path}/${encodeURIComponent(id)}`)) as Artist;
  }

  async createArtist(
    token: string,
    firstName: string,
    secondName: string,
    middleName: string,
    birthDate: string,
    birthPlace: string,
    country: string,
    bandsIds: string[],
    instruments: string[]
  ) {
    return (await this.post(
      path,
      {
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments,
      },
      { headers: { Authorization: token } }
    )) as Artist;
  }

  async updateArtist(
    token: string,
    id: string,
    firstName: string,
    secondName: string,
    middleName: string,
    birthDate: string,
    birthPlace: string,
    country: string,
    bandsIds: string[],
    instruments: string[]
  ) {
    return (await this.put(
      `${path}/${encodeURIComponent(id)}`,
      {
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments,
      },
      { headers: { Authorization: token } }
    )) as Artist;
  }

  async deleteArtist(token: string, id: string) {
    return (await this.delete(`${path}/${encodeURIComponent(id)}`, undefined, {
      headers: { Authorization: token },
    })) as DeletePayload;
  }
}
