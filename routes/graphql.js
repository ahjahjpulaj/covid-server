var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

module.exports = app => {
  // Construct a schema, using GraphQL schema language
  var schema = buildSchema(`
type Query {
  hello: String
}
`);

  // The root provides a resolver function for each API endpoint
  var root = {
    hello: () => {
      return "Hello world!";
    }
  };

  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  );
};
