const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const animals = [
  {
    name: "Dog",
  },
  {
    name: 'Cat',
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query {
   animals: [Animal]
  }

  type Animal {
   name: String
  }
`;

// The resolvers
const resolvers = {
  Query: {
   animals: () => animals
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
