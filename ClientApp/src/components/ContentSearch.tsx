// components/ContentSearch.tsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_CONTENT_DATA, GET_TOTAL_ITEMS, GET_ALL_CONTENT_DATA } from '../queries';

interface ContentResult {
    title: string;
    description: string;
    relativePath: string;
    url: string;
}

const ContentSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Debounce input
    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const { data, loading, error } = useQuery(
        debouncedQuery.trim()
            ? SEARCH_CONTENT_DATA
            : GET_ALL_CONTENT_DATA,
        {
            variables: {
                search: debouncedQuery.trim() || undefined,
                limit: 100,
                skip: 0,
            },
        }
    );

    const results: ContentResult[] =
        data?.ContentData?.items.map((item: any) => ({
            title: item.SearchTitle,
            description: item.SearchDescription,
            relativePath: item.RelativePath,
            url: item.Url,
        })) ?? [];


    return (
        <div className="graphql-search-container">
            <h2>Content Search</h2>
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Search content..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            <br />

            {error && <p>Error: {error.message}</p>}

            {results.length > 0 ? (
                <div className="search-results">
                    <h5>Search Results</h5>
                    <p>
                        {debouncedQuery
                            ? `Found ${results.length} result(s) for "${debouncedQuery}"`
                            : `Showing ${results.length} items`}
                    </p>
                    <div className="results-list">
                        {results.map((result) => (
                            <div key={result.url} className="result-item">
                                <a href={result.relativePath || result.url}>
                                    <h3>{result.title}</h3>
                                    <p>{result.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                !loading &&
                results.length === 0 &&
                debouncedQuery && (
                    <div className="no-results">
                        <p>No results found for "{debouncedQuery}"</p>
                    </div>
                )
            )}
        </div>
    );
};

export default ContentSearch;