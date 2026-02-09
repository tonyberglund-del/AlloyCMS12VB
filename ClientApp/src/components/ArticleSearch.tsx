// components/ArticleSearch.tsx
import React, { useState, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_TOTAL_ITEMS, SEARCH_ARTICLES, GET_ALL_ARTICLES } from '../queries';

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
    const [results, setResults] = useState<ArticleResult[]>([]);

     // Get total items count
    const { data: totalData } = useQuery(GET_TOTAL_ITEMS);

    // Get headers to articles
    const { data: initialData } = useQuery(GET_ALL_ARTICLES, { variables: { limit: 100, skip: 0 },
    });

    // Lazy query for search
    const [executeSearch, { loading, error, data: searchData }] = useLazyQuery(SEARCH_ARTICLES);

    // Load articles on component mount
    useEffect(() => {
        console.log('Component mounted, loading articles...');
        executeSearch({
          variables: {
            search: '',
            limit: 100,
            skip: 0,
          },
        });
      }, []);


    useEffect(() => {
    if (initialData?.ArticlePage?.items)
    {
        const mapped: ArticleResult[] = initialData.ArticlePage.items.map((item: any) => ({
          id: item._id,
          displayName: item.Name,
          relativePath: item.RelativePath,
        }));

       setResults(mapped);
      }
    }, [initialData]);

    useEffect(() => {
    if (searchData?.ArticlePage?.items)
    {
        const mapped = searchData.ArticlePage.items.map((item: any) => ({
        id: item._id,
          displayName: item.Name,
          relativePath: item.RelativePath,
        }));

       setResults(mapped);
      }
    }, [searchData]);

const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSearch called with query:', query);
    
    if (!query.trim()) {
      setResults([]);
      return;
    }

    executeSearch({
    variables:
        {
        search: query,
          limit: 100,
          skip: 0,
        },
      });
    };

return (
    <div className="graphql-search-container">
      <div className="search-form">
        <h2>Total Items: {totalData?.Data?.total ?? 'Loading...'}</h2>
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

