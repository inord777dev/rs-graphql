interface userParams {
  userId: string;
}

interface jwtParams {
  email: string;
  password: string;
}

const resolvers = {
  Query: {
    async user(parent:any, {userId} : userParams , context: any) {
      return await context.dataSources.usersAPI.getUser(userId);
    },
    async jwt(parent:any, {email, password} : jwtParams , context: any) {
      const result = await context.dataSources.usersAPI.login(email, password);
      return result.jwt;
    },
    async verify(parent:any, args:any , context: any) {
      const result = await context.dataSources.usersAPI.verify(context.token);
      return result;
    }
  },
  User: {

  }
}

export default resolvers