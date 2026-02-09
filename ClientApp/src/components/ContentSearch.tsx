// components/ContentSearch.tsx
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_CONTENT_DATA } from '../queries';

interface ContentResult {
    title: string;
    description: string;
    relativePath: string;
    url: string;
}

const ContentSearch: React.FC = () => {
    const [query, setQuery] = useState('');

    const { data, loading, error } = useQuery(SEARCH_CONTENT_DATA, {
        variables: {
            search: query || null, // null visas alla
            limit: 100,
            skip: 0,
        }
    });

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
                <button type="submit" disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {error && <p>Error: {error.message}</p>}

            {results.length > 0 && (
                <div className="search-results">
                    {results.map((result) => (
                        <div key={result.url} className="result-item">
                            <a href={result.relativePath || result.url}>
                                <h3>{result.title}</h3>
                                <p>{result.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            )}
            {!loading && results.length === 0 && query && <p>No results found for "{query}"</p>}
        </div>
    );
};


export default ContentSearch;