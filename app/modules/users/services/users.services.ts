import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  favouriteArtistIds: string[];
}

const url = process.env.MICROSERVISE_URL || "http://localhost";
const port = Number(process.env.MICROSERVISE_USERS_PORT) || 3004;
const path = process.env.MICROSERVISE_USERS_PATH || "/v1/users";

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  async register(
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    favouriteArtistIds: string[]
  ) {
    return this.post(path, {
      firstName,
      lastName,
      password,
      email,
      favouriteArtistIds,
    });
  }

  async login(email: string, password: string) {
    console.log(email, password);
    return this.post(`${path}/login`, {
      email,
      password,
    });
  }

  async getUser(id: string) {
    return this.get(`${path}/${encodeURIComponent(id)}`);
  }

  async verify(token: string) {
    return this.post(`${path}/verify`, undefined, { headers: { 'Authorization': token } });
  }

  willSendRequest(request: RequestOptions) {
    // console.log(this.context.token, request);
    // if (request.path == `${path}/verify`) {
    //   request.headers.set('Authorization', `Bearer ${this.context.token}`);
    // }
  }
}
