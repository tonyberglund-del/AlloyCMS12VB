// ClientApp/src/components/ContentSearch.tsx
import React, { useState, useEffect } from 'react';
import { useGetAllContentDataQuery } from '../generated/graphql';

interface ContentSearchProps {
    initialQuery?: string;
}

const ContentSearch: React.FC<ContentSearchProps> = ({ initialQuery }) => {
    const [query, setQuery] = useState(initialQuery || '');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const { data, loading, error } = useGetAllContentDataQuery({ variables: { limit: 100, skip: 0 } });

    const results =
        data?.ContentData?.items
            ?.filter((item): item is NonNullable<typeof item> => item != null)
            .filter((item) =>
                debouncedQuery ? item.SearchTitle?.toLowerCase().includes(debouncedQuery.toLowerCase()) : true
            ) ?? [];

    return (
        <div>
            <h2>Content Search</h2>
            <input
                type="text"
                placeholder="Search content..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {results.length > 0 ? (
                <ul>
                    {results.map((item) => (
                        <li key={item.RelativePath ?? item.SearchTitle}>
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

export default ContentSearch;
