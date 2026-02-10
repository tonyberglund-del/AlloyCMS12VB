// ClientApp/src/components/ArticleSearch.tsx
import React, { useState, useEffect } from 'react';
import { useGetAllArticlesQuery } from '../generated/graphql';

interface ArticleSearchProps {
    initialQuery?: string;
}

const ArticleSearch: React.FC<ArticleSearchProps> = ({ initialQuery }) => {
    const [query, setQuery] = useState(initialQuery || '');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const { data, loading, error } = useGetAllArticlesQuery({ variables: { limit: 100, skip: 0 } });

    const results =
        data?.ArticlePage?.items
            ?.filter((item): item is NonNullable<typeof item> => item != null)
            .filter((item) => (debouncedQuery ? item.Name?.toLowerCase().includes(debouncedQuery.toLowerCase()) : true)) ?? [];

    return (
        <div>
            <h2>Article Search</h2>
            <input
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {results.length > 0 ? (
                <ul>
                    {results.map((item) => (
                        <li key={item._id}>
                            <a href={item.RelativePath ?? '#'}>
                                <h3>{item.Name}</h3>
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

export default ArticleSearch;
