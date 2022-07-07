const resolvers = {
  Query: {
    track(trackId: string) {
      return {
        id: trackId,
      };
    },
    tracks() {
      return [];
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