import { RESTDataSource } from 'apollo-datasource-rest';
import { DeletePayload } from '../../common/common';

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
    return await this.get(`${path}/${encodeURIComponent(id)}`) as Track;
  }

  async createTrack(token: string,
    title: string,
    albumId: string,
    artistsIds: string[],
    bandsIds: string[],
    duration: number,
    released: number,
    genresIds: string[]) {
    return await this.post(path, {
      title,
      albumId,
      artistsIds,
      bandsIds,
      duration,
      released,
      genresIds
    }, { headers: { 'Authorization': token } }) as Track;
  }

  async updateTrack(
    token: string,
    id: string,
    title: string,
    albumId: string,
    artistsIds: string[],
    bandsIds: string[],
    duration: number,
    released: number,
    genresIds: string[]) {
    console.log({
      title,
      albumId,
      artistsIds,
      bandsIds,
      duration,
      released,
      genresIds
    });  
    return await this.put(`${path}/${encodeURIComponent(id)}`, {
      title,
      albumId,
      artistsIds,
      bandsIds,
      duration,
      released,
      genresIds
    }, { headers: { 'Authorization': token } });
  }

  async deleteTrack(token: string, id: string) {
    return await this.delete(`${path}/${encodeURIComponent(id)}`, undefined, { headers: { 'Authorization': token } }) as DeletePayload;
  }
}