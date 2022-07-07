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

export default class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3006/';
  }

  // GET
  async getTracks() {
    return await this.get(`v1/tracks`);
  }

  // GET
  async getTrack(id: string) {
    return this.get(`v1/tracks/${encodeURIComponent(id)}`);
  }

  // POST
  async addTrack(track: Track) {
    return this.post(`v1/tracks`, track);
  }

  // PUT
  async updTrack(id: string, track: Track) {
    return this.put(`v1/tracks/${encodeURIComponent(id)}`, track);
  }

  // DELETE
  async deleteMovie(id: string) {
    return this.delete(`v1/tracks/${encodeURIComponent(id)}`);
  }
}