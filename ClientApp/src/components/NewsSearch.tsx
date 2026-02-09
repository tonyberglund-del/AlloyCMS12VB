// components/ArticleSearch.tsx
import React, { useState, useEffect, } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOTAL_ITEMS, SEARCH_NEWS, GET_ALL_NEWS} from '../queries';

interface NewsResult {
    id: string;
    displayName: string;
    relativePath: string;
}

const NewsSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const { data: totalData } = useQuery(GET_TOTAL_ITEMS);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const { loading, error, data: searchData } = useQuery(
        debouncedQuery.trim() ? SEARCH_NEWS : GET_ALL_NEWS,
        {
            variables: {
                search: debouncedQuery.trim() || undefined,
                limit: 100,
                skip: 0,
            },
        }
    );

    const results: NewsResult[] =
        searchData?.NewsPage?.items?.map((item: any) => ({
            id: item._id,
            displayName: item.Name,
            relativePath: item.RelativePath,
        })) ?? [];

    return (
        <div className="graphql-search-container">
              <h2>News Search</h2>
                <div className="search-form">
                    <input
                        type="text"
                        placeholder="Search content..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                    />
               </div>

            <h3>Total Items: {totalData?.Data?.total ?? 'Loading...'}</h3>

            {error && (
                <div className="error-message">
                    <p>Error: {error.message}</p>
                </div>
            )}

            {results.length > 0 ? (
                <div className="search-results">
                    {results.map((result) => (
                    <div key={result.id} className="result-item">
                        <a href={result.relativePath || '#'}>
                            <h3>{result.displayName}</h3>
                        </a>
                    </div>
                    ))}
                </div>
                ) : (
                !loading &&
                debouncedQuery && (
               <p>No results found for "{debouncedQuery}"</p>
             )
            )}
        </div>
    );
};

export default NewsSearch;