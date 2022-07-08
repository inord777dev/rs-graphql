import { User } from '../services/users.services';

interface userParams {
  userId: string;
}

interface jwtParams {
  email: string;
  password: string;
}

interface registerParams {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  favouriteArtistIds: string;
}

const resolvers = {
  Query: {
    async user(parent:any, {userId} : userParams , context: any) {
      const result = await context.dataSources.usersAPI.getUser(userId) as User;
      return result ?  {...result, id: result._id} : result;
    },
    async jwt(parent:any, {email, password} : jwtParams , context: any) {
      const result = await context.dataSources.usersAPI.login(email, password);
      return result.jwt;
    },
    async verify(parent:any, args:any , context: any) {
      const result = await context.dataSources.usersAPI.verify(context.token) as User;
      return result ?  {...result, id: result._id} : result;
    },
    async register(parent:any, {firstName, lastName, password, email, favouriteArtistIds} : registerParams , context: any) {
      const result = await context.dataSources.usersAPI.register(firstName, lastName, password, email, favouriteArtistIds) as User;
      return result ?  {...result, id: result._id} : result;
    }
  },
  User: {
  }
}

export default resolvers