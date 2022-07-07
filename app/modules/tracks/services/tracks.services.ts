import { RESTDataSource } from 'apollo-datasource-rest';

export interface Track {
  _id: string;
  title: string;  
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

const url = process.env.MICROSERVISE_URL || 'http://localhost';
const port = Number(process.env.MICROSERVISE_TRACKS_PORT) || 3004;
const path = process.env.MICROSERVISE_TRACKS_PATH || '/v1/tracks';

export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  async getTracks() {
    return this.get(path);
  }

  async getTrack(id: string) {
    return this.get(`${path}/${encodeURIComponent(id)}`);
  }

  async addTrack(track: Track) {
    return this.post(path, track);
  }

  async updTrack(id: string, track: Track) {
    return this.put(`${path}/${encodeURIComponent(id)}`, track);
  }

  async deleteMovie(id: string) {
    return this.delete(`${path}/${encodeURIComponent(id)}`);
  }
}