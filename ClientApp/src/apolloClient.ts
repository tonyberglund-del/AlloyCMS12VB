import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const APP_KEY = 'XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU';
//const GRAPHQL_ENDPOINT = `/api/graphql`;
const GRAPH_SCHEMA_URL = import.meta.env.VITE_CMS_SCHEMA_URL;
const SINGLE_KEY = import.meta.env.VITE_SINGLE_KEY
const GRAPHQL_ENDPOINT = 'https://latest.cg.optimizely.com/content/v2?auth=bUebySzn1VGAOWvSyTuNHsRcfuWRQTJ05cVIAbQeauSZGFqa';
const GRAPH_URL = `${GRAPH_SCHEMA_URL}?auth=${SINGLE_KEY}`
console.log('Using GRAPH_URL:', GRAPHQL_ENDPOINT);

const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json',
  },

  fetch: async (uri, options) => {
    console.log('GraphQL Request:', uri);
      if (options?.body) {
          try {
              console.log('GraphQL Request Body:', options?.body ? JSON.parse(options.body.toString()).query :'');
          } catch {
              console.log('GraphQL Request Body (raw):', options.body);
          }
      }
    const response = await fetch(uri, options);
      console.log('GraphQL Response status:', response.status);

      try {
          const json = await response.clone().json();
          console.log('GraphQL Response JSON:', json);
      } catch {
          console.warn('Could not parse GraphQL response as JSON');
      }
    
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
