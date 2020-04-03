# Apollo server running in an Amplify Function

This is an example of how to deploy an Apollo GraphQL Server in an Amplify Function

There are two options to follow along with this example. You can either create this project from scratch by following the tutorial, or you can deploy this project itself with a couple of commands from the Amplify CLI

## Tutorial

To create this from scratch, please see the dev.to tutorial [here](https://dev.to/aws/10-minute-tutorial-deploy-an-apollo-graphql-server-with-amplify-functions-38p1).

## Deploy this project

To deploy this full stack serverless project, follow these steps.

1. Clone the project, change into the folder, install dependencies

```sh
$ git clone https://github.com/dabit3/apollo-server-in-amplify-function.git

$ cd apollo-server-in-amplify-function

$ npm install
```

2. Initialize the Amplify back end

```sh
$ amplify init
```

3. Run the app

```sh
$ npm start
```

## The server

The server is located in the Lambda handler at __amplify/backend/function/apolloserver/src/index.js__

Here is what you get out of the box:

```js
const { ApolloServer, gql } = require('apollo-server-lambda');

/* Construct a schema, using GraphQL schema language */
const typeDefs = gql`
  type Query { hello: String }
`;

/* Provide resolver functions for your schema fields */
const resolvers = {
  Query: {
    hello: () => 'Hello from Apollo!!',
  },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    }),
  });

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});
```

## Modifying the schema

To create a custom schema, update the `typeDefs` definition and add your types, queries, mutations, and subscriptions.

## Adding a database

If you'd like to add a persistence layer, you can easily add DynamoDB to this app by using the `storage` category.

```sh
$ amplify add storage

> Choose DynabDB Database + your preferred options
```