// components/ContentSearch.tsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_CONTENT_DATA } from '../queries';

interface ContentResult {
    searchTitle: string;
    searchDescription: string;
    relativePath: string;
    url: string;
}

const ContentSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [allContent, setAllContent] = useState<ContentResult[]>([]);
    const [results, setResults] = useState<ContentResult[]>([]);

    const { data, loading, error } = useQuery(SEARCH_CONTENT_DATA);

    useEffect(() => {
        if (data?.ContentData?.items) {
            const mapped = data.ContentData.items.map((item: any) => ({
                searchTitle: item.SearchTitle,
                searchDescription: item.SearchDescription,
                relativePath: item.RelativePath,
                url: item.Url,
            }));

            setAllContent(mapped);
        }
    }, [data]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (!query.trim()) {
            setResults([]);
            return;
        }

        const filtered = allContent.filter((item) =>
            item.searchTitle?.toLowerCase().includes(query.toLowerCase()) ||
            item.searchDescription?.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
    };

    return (
        <div>
            <h2>Content Search</h2>

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

            {error && <p>Error: {error.message}</p>}

            {results.map((result) => (
                <div key={result.url}>
                    <a href={result.relativePath}>
                        <h3>{result.searchTitle}</h3>
                        {result.searchDescription && <p>{result.searchDescription}</p>}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ContentSearch;