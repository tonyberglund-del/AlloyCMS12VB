// ClientApp/src/components/NewsSearch.tsx
import React, { useState, useEffect } from 'react';
import { useGetAllNewsQuery } from '../generated/graphql';

interface NewsSearchProps {
    initialQuery?: string;
}

const NewsSearch: React.FC<NewsSearchProps> = ({ initialQuery }) => {
    const [query, setQuery] = useState(initialQuery || '');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const { data, loading, error } = useGetAllNewsQuery({ variables: { limit: 100, skip: 0 } });

    const results =
        data?.NewsPage?.items
            ?.filter((item): item is NonNullable<typeof item> => item != null)
            .filter((item) =>
                debouncedQuery ? item.SearchTitle?.toLowerCase().includes(debouncedQuery.toLowerCase()) : true
            ) ?? [];

    return (
        <div>
            <h2>News Search</h2>
            <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {results.length > 0 ? (
                <ul>
                    {results.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.RelativePath ?? '#'}>
                                <h3>{item.SearchTitle}</h3>
                                <p>{item.SearchDescription}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && debouncedQuery && <p>No results found for "{debouncedQuery}"</p>
            )}
        </div>
    );
};

export default NewsSearch;
