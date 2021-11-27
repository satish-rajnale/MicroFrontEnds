import { ApolloServer, gql, AuthenticationError } from 'apollo-server';
// import AuthenticationError from 'apollo-server-errors';
import jwt from 'jsonwebtoken';
import guid from 'guid';
import users from './users';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const typeDefs = gql`
  type Query {
    todos: [String!]
  }

  type Mutation {
    authenticate(name: String!, password: String!): String
  }
`;

const resolvers = {
  Query: {
    todos: (_parent: unknown, _args: unknown, context: { name: string }) => {
      if (!users[context?.name]) {
        throw new AuthenticationError('Invalid credentials');
      }
      return users[context?.name].todos;
    },
  },
  Mutation: {
    authenticate: (
      _: unknown, //first parameter for every resolver is the parent and as we dont have a parent we set it to unknown
      { name, password }: { name: string; password: string }
    ) => {
      if (users[name] && users[name].password === password) {
        return jwt.sign({ data: name }, JWT_SECRET, { expiresIn: '1h' });
      } else {
        throw new AuthenticationError('Invalid credentials');
      }
    },
  },
};

const server = new ApolloServer({
  cors: {
    origin: 'http://localhost:8080',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  },
  context: ({ req }) => {
    const ctx: { name: string | null } = { name: null };
    try {
      if (req.headers['x-access-token']) {
        const token = jwt.verify(
          req.headers['x-access-token'] as string,
          JWT_SECRET
        ) as unknown as { data: string };
        ctx.name = token.data;
      }
    } catch (error) {}
    return ctx;
  },
  typeDefs,
  resolvers,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 server ready at ${url}`);
});
