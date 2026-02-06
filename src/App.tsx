import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_CONTENT_DATA } from './queries';

interface SearchContentResult {
    searchTitle: string;
    searchDescription: string;
    relativePath: string;
    url: string;
}

const App: React.FC = () => {
    const [query, setQuery] = useState('');
    const [contentResults, setContentResults] = useState<SearchContentResult[]>([]);
    const [allContentItems, setAllContentItems] = useState<SearchContentResult[]>([]);

    const { data, loading, error } = useQuery(SEARCH_CONTENT_DATA);

    useEffect(() => {
        if (data?.ContentData?.items) {
            const mapped = data.ContentData.items.map((item: any) => ({
                searchTitle: item.SearchTitle,
                searchDescription: item.SearchDescription,
                relativePath: item.RelativePath,
                url: item.Url,
            }));

            setAllContentItems(mapped);
        }
    }, [data]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (!query.trim()) {
            setContentResults([]);
            return;
        }

        const filtered = allContentItems.filter((item) =>
            item.searchTitle?.toLowerCase().includes(query.toLowerCase()) ||
            item.searchDescription?.toLowerCase().includes(query.toLowerCase())
        );

        setContentResults(filtered);
    };

    return (
        <div className="graphql-search-container">
            <div className="search-form">
                <h2>Total Items: {data?.ContentData?.total ?? 'Loading...'}</h2>

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search content..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </form>
            </div>

            {error && <p>Error: {error.message}</p>}

            {contentResults.length > 0 && (
                <div>
                    <h2>Search Results</h2>
                    <p>Found {contentResults.length} result(s)</p>

                    {contentResults.map((result) => (
                        <div key={result.url}>
                            <a href={result.relativePath}>
                                <h3>{result.searchTitle}</h3>
                                {result.searchDescription && <p>{result.searchDescription}</p>}
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {!loading && contentResults.length === 0 && query && !error && (
                <p>No results found for "{query}"</p>
            )}
        </div>
    );
};

export default App;

