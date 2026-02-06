import React, { useState, useEffect } from 'react';
import { useLazyQuery, useQuery, gql } from '@apollo/client';
import { SEARCH_QUERY, GET_TOTAL_ITEMS, GET_ARTICLE_PAGE_FIELDS, SEARCH_CONTENT_DATA } from './queries';

interface SearchResult {
  id: string;
  displayName: string;
  relativePath: string;
  changed?: string;
  heading?: string;
  description?: string;
}
interface SearchContentResult {
    searchTitle: string;
    searchDescription: string;
    relativePath: string;
    url: string;
}

interface AppProps {
  initialQuery?: string;
}

const App: React.FC<AppProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [allItems, setAllItems] = useState<any[]>([]);
  const [contentResults, setContentResults] = useState<SearchContentResult[]>([]);
  const [allContentItems, setAllContentItems] = useState<any[]>([]);


  // Get total items count
  const { data: totalData } = useQuery(GET_TOTAL_ITEMS);

  // Get schema types to debug what's available
  const { data: schemaData, loading: schemaLoading } = useQuery(gql`
    query {
      __schema {
        queryType {
          fields {
            name
            args {
              name
              type {
                name
                kind
              }
            }
          }
        }
        types {
          name
        }
      }
    }
  `);
    const { data: articlePageFields } = useQuery(GET_ARTICLE_PAGE_FIELDS);

    useEffect(() => {
        if (articlePageFields?.__type?.fields) {
            console.log('ArticlePage fields:', articlePageFields.__type.fields);
            const fieldNames = articlePageFields.__type.fields.map((f: any) => f.name);
            console.log('Available fields:', fieldNames);
        }
    }, [articlePageFields])

  // Load articles on component mount
  useEffect(() => {
    console.log('Component mounted, loading articles...');
    executeSearch({
      variables: {
        limit: 100,
        skip: 0,
      },
    });
  }, []);

  // Lazy query for search
  const [executeSearch, { loading, error, data: searchData }] = useLazyQuery(SEARCH_QUERY);

  // Update results when search data changes
  useEffect(() => {
    if (searchData?.ArticlePage?.items) {
      const resultList = searchData.ArticlePage.items.map((item: any) => ({
        id: item._id,
        displayName: item.Name,
        relativePath: item.RelativePath,
      }));
      setAllItems(resultList);
      setResults(resultList);
      console.log('Articles loaded:', resultList.length);
      console.log('Articles:', resultList);
    }
  }, [searchData]);

    // Update contentResults when search data changes
    useEffect(() => {
        if (searchData?.SitePageData?.items) {
            const resultContentList = searchData.SitePageData.items.map((item: any) => ({
                searchTitle: item.SearchTitle,
                searchDescription: item.SearchDescription,
                relativePath: item.RelativePath,
                url: item.Url
            }));
            setAllContentItems(resultContentList);
            setContentResults(resultContentList);
            console.log('Content loaded:', resultContentList.length);
            console.log('Content:', resultContentList);
        }
    }, [searchData]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSearch called with query:', query);
    
    if (!query.trim()) {
      setResults([]);
      return;
    }

    // Filter results locally based on query
    const filtered = allItems.filter((item) =>
      item.displayName.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    console.log('Filtered results:', filtered);
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

      {/*{results.length > 0 && (*/}
      {/*  <div className="search-results">*/}
      {/*    <h2>Search Results</h2>*/}
      {/*    <p>Found {results.length} result(s) for "{query}"</p>*/}


      {contentResults.length > 0 && (
         <div className="search-results">
           <h2>Search Results</h2>
          <p>Found {contentResults.length} result(s) for "{query}"</p>

          
          <div className="results-list">
            {/*{results.map((result) => (*/}
            {/*    <div key={result.id} className="result-item">*/}
            {/*    <a href={result.relativePath || '#'}>*/}
            {/*    <h3>{result.heading || result.displayName}</h3>*/}
            {/*        {result.description && <p>{result.description}</p>}*/}
            {/*        {result && <p>{result.description}</p>}*/}
            {/*    {result.changed && (*/}
            {/*      <small>Last modified: {new Date(result.changed).toLocaleDateString()}</small>*/}
            {/*        )}*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {contentResults.map((result) => (
                <div key={result.searchTitle} className="result-item">
                    <a href={result.relativePath || '#'}>
                        <h3>{result.searchTitle}</h3>
                        {result.searchDescription && <p>{result.searchDescription}</p>}
                        {result && <p>{result.searchDescription}</p>}
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

export default App;
