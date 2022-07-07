import { Track } from "../services/tracks.services";

interface trackParams {
  trackId: string;
}

const resolvers = {
  Query: {
    async track(parent:any, { trackId } : trackParams , context: any) {
      const result = await context.dataSources.tracksAPI.getTrack(trackId);
      return result as Track;
    },
    async tracks(parent:any, args:any, context: any) {
      const result = await context.dataSources.tracksAPI.getTracks();
       return result.items;
    }
  },
  Mutation: {
    addTrack() {

    },
    updTrack() {
      
    },
    delTrack() {
      return { msg: 'delete complete'}
    }
  },
  Track: {

  }
}

export default resolvers