import { RESTDataSource } from 'apollo-datasource-rest';

interface Track {
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

export default class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${url}:${port}`;
  }

  // GET
  async getTracks() {
    return this.get(path);
  }

  // GET
  async getTrack(id: string) {
    return this.get(`${path}/${encodeURIComponent(id)}`);
  }

  // POST
  async addTrack(track: Track) {
    return this.post(path, track);
  }

  // PUT
  async updTrack(id: string, track: Track) {
    return this.put(`${path}/${encodeURIComponent(id)}`, track);
  }

  // DELETE
  async deleteMovie(id: string) {
    return this.delete(`${path}/${encodeURIComponent(id)}`);
  }
}