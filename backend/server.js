const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');

// Dữ liệu giả
const animals = [
  {
    name: "Dog",
  },
  {
    name: 'Cat',
  },
];

const typeDefs = `
  type Query {
   animals: [Animal]
  }

  type Animal {
   name: String
  }
`;

const resolvers = {
  Query: {
    animals: () => animals
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, 1 giao diện interface của GraphQL
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Chạy server
app.listen(4000, () => {
  console.log('Vào đường dẫn http://localhost:4000/graphiql để query thử nhé!');
});
