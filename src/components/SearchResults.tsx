import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://latest.cg.optimizely.com/content/v2?auth=XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU';

const SEARCH_QUERY = gql`
  query SearchContent($query: String!, $first: Int, $after: String) {
    search(query: $query, first: $first, after: $after) {
      edges {
        node {
          id
          displayName
          changed
          ... on Page {
            heading
            description
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

interface SearchResult {
  id: string;
  displayName: string;
  changed?: string;
  heading?: string;
  description?: string;
}

interface SearchResultsProps {
  initialQuery?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const client = new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
      credentials: 'include',
    }),
    cache: new InMemoryCache(),
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await client.query({
        query: SEARCH_QUERY,
        variables: {
          query: query,
          first: 20,
        },
      });

      setResults(data.search.edges.map((edge: any) => edge.node));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="graphql-search-container">
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search content..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="search-results">
          <h2>Search Results</h2>
          <p>Found {results.length} result(s) for "{query}"</p>
          
          <div className="results-list">
            {results.map((result) => (
              <div key={result.id} className="result-item">
                <h3>{result.heading || result.displayName}</h3>
                {result.description && <p>{result.description}</p>}
                {result.changed && (
                  <small>Last modified: {new Date(result.changed).toLocaleDateString()}</small>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && results.length === 0 && query && !error && (
        <div className="no-results">
          <p>No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
