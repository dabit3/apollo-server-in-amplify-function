import React from 'react'
import logo from './logo.svg'
import './App.css'

import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, useQuery} from '@apollo/react-hooks';
import config from './aws-exports'

const { endpoint } = config.aws_cloud_logic_custom[0]

const query = gql`{ hello }`;

function App() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log('error: ', error)
    return <p>Error :(</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.hello}</h1>
      </header>
    </div>
  );
}

const client = new ApolloClient({
  uri: endpoint + '/graphql'
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppWithProvider