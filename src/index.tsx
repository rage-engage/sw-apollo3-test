import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { personTypePolicy } from './store/Person';

const restLink = new RestLink({ uri: "https://swapi.dev/api/" });

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Person: personTypePolicy,
    }
  }),
  link: restLink
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
