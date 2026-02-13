import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const APP_KEY = 'XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU';
const GRAPH_URL = `/api/graphql`;
//const GRAPH_URL = `/api/graphql?apikey=${APP_KEY}`;
const GRAPHQL_ENDPOINT = 'https://latest.cg.optimizely.com/content/v2?auth=bUebySzn1VGAOWvSyTuNHsRcfuWRQTJ05cVIAbQeauSZGFqa';

console.log('Using GRAPH_URL:', GRAPH_URL);

const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json',
  },

  fetch: async (uri, options) => {
    console.log('GraphQL Request:', uri);
    console.log('GraphQL Body:', options?.body);
    const response = await fetch(uri, options);
    console.log('GraphQL Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.clone().text();
      console.error('GraphQL Error Response:', errorText);
    }
    
    return response;
  },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});
