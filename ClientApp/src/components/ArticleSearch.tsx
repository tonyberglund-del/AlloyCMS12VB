// components/ArticleSearch.tsx
import React, { useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOTAL_ITEMS, SEARCH_ARTICLES } from '../queries';

interface ArticleResult
{
    id: string;
    displayName: string;
    relativePath: string;
}

interface AppProps {
  initialQuery?: string;
}

const ArticleSearch: React.FC<AppProps> = ({ initialQuery = '' }) => {
    const [query, setQuery] = useState(initialQuery);


     // Get total items count
    const { data: totalData } = useQuery(GET_TOTAL_ITEMS);

    // Load articles on component mount
    const { data, loading, error } = useQuery(SEARCH_ARTICLES, {
        variables: {
            search: query || null, // null = show all
            limit: 100,
            skip: 0,
        },
    });


    const results: ArticleResult[] =
        data?.ArticlePage?.items?.map((item: any) => ({
            id: item._id,
            displayName: item.Name,
            relativePath: item.RelativePath,
        })) ?? [];

return (
    <div className="graphql-search-container">
      <div className="search-form">
        <h2>Total Items: {totalData?.Data?.total ?? 'Loading...'}</h2>
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
      </div>

      {error && (
        <div className="error-message">
          <p>Error: {error.message}</p>
        </div>
      )}

      {results.length > 0 && (
         <div className="search-results">
           <h2>Search Results</h2>
          <p>Found {results.length} result(s) for "{query}"</p>
          
          <div className="results-list">

            {results.map((result) => (
                <div key={result.id} className="result-item">
                    <a href={result.relativePath || '#'}>
                        <h3>{result.displayName}</h3>
                    </a>
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

export default ArticleSearch;

