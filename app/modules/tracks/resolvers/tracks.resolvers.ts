// import DataSource from 'apollo-datasource';

const resolvers = {
  Query: {
    track(parent:any, args:any, context: any) {
      return {};
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