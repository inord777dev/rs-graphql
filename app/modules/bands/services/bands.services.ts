import { RESTDataSource } from "apollo-datasource-rest";
import { DeletePayload } from "../../common/common";

export interface Band {
  _id: string;
  name: string;
  origin: string;
  membersId: string[];
  website: string;
  genresIds: string[];
}

const url = process.env.MICROSERVISE_URL || "http://localhost";
const port = Number(process.env.MICROSERVISE_BANDS_PORT) || 3003;
const path = process.env.MICROSERVISE_BANDS_PATH || "/v1/bands";

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  async getBands() {
    return await this.get(path);
  }

  async getBand(id: string) {
    return (await this.get(`${path}/${encodeURIComponent(id)}`)) as Band;
  }

  async createBand(
    token: string,
    name: string,
    origin: string,
    membersId: string[],
    website: string,
    genresIds: string[]
  ) {
    return (await this.post(
      path,
      {
        name,
        origin,
        membersId,
        website,
        genresIds,
      },
      { headers: { Authorization: token } }
    )) as Band;
  }

  async updateBand(
    token: string,
    id: string,
    name: string,
    origin: string,
    membersId: string[],
    website: string,
    genresIds: string[]
  ) {
    return (await this.put(
      `${path}/${encodeURIComponent(id)}`,
      {
        name,
        origin,
        membersId,
        website,
        genresIds,
      },
      { headers: { Authorization: token } }
    )) as Band;
  }

  async deleteBand(token: string, id: string) {
    return (await this.delete(`${path}/${encodeURIComponent(id)}`, undefined, {
      headers: { Authorization: token },
    })) as DeletePayload;
  }
}
