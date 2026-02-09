// components/ArticleSearch.tsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ARTICLES, SEARCH_ARTICLES } from '../queries';

interface ArticleResult
{
    id: string;
    displayName: string;
    relativePath: string;
}

const ArticleSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    // Load articles on component mount
    const { data, loading, error } = useQuery(debouncedQuery.trim() ? SEARCH_ARTICLES: GET_ALL_ARTICLES,
        {
        variables: {
            search: debouncedQuery.trim() || undefined, 
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
        <h2>Article Search</h2>
      <div className="search-form">
          <input
            type="text"
            placeholder="Search content..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>
      {error && (
        <div className="error-message">
          <p>Error: {error.message}</p>
        </div>
      )}

      {results.length > 0 ? (
         <div className="search-results">
          <h5>Search Results</h5>
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
        ) : (
        !loading && results.length === 0 && query && !error && (
        <div className="no-results">
          <p>No results found for "{query}"</p>
        </div>
        )
      )}
    </div>
  );
};

export default ArticleSearch;

