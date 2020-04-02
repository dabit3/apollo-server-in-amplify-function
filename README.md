# Apollo server running in an Amplify Function

This is an example of how to deploy an Apollo GraphQL Server in an Amplify Function

There are two options to follow along with this example. You can either create this project from scratch by following the tutorial, or you can deploy this project itself with a couple of commands from the Amplify CLI

## Tutorial

To create this from scratch, please see the dev.to tutorial [here]().

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