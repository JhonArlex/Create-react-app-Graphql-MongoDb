
const mongoose = require('mongoose');
var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


const DBString = mongoose.model('DBString', { name: String });
// Some fake data
// The GraphQL schema in string form

// Put together a schema
mongoose.connect('mongodb://dbuser:cabedi1@ds127490.mlab.com:27490/ctestdb');


// Initialize the app
const app = express();

app.use(cors());
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context:{DBString} }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


// Start the server
app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});
