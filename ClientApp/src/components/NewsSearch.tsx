// ClientApp/src/components/NewsSearch.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchNewsQuery } from '../generated/graphql';

interface NewsSearchProps {
    initialQuery?: string;
}

const NewsSearch: React.FC<NewsSearchProps> = ({ initialQuery }) => {
    const [query, setQuery] = useState(initialQuery || '');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const { data, loading, error } = useSearchNewsQuery({
        variables: {
            search: debouncedQuery || '',
            limit: 100,
            skip: 0
        }
    });
    console.log('GraphQL response:', data);
    console.log('Facets:', data?.NewsPage?.facets);
    console.log('SearchKeywords:', data?.NewsPage?.facets?.SearchKeywords);

    const results = data?.NewsPage?.items ?? [];
    const facets = data?.NewsPage?.facets?.SearchKeywords ?? [];
    const filteredResults = useMemo(() => {
        if (selectedKeywords.length === 0) return results;
        return results.filter((item) => {
            if (!item.SearchKeywords || item.SearchKeywords.length === 0) return false;
            return item.SearchKeywords.some((k) => selectedKeywords.includes(k));
        });
    }, [results, selectedKeywords]);

    return (
        <div>
            <h2>News Search</h2>
            <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {/* Facets */}
            {facets.length > 0 && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
                    <h3>Filter by Keywords</h3>
                    {facets.map((facet) => (
                        <div key={facet?.name}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedKeywords.includes(facet?.name || '')}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedKeywords([...selectedKeywords, facet?.name || '']);
                                        } else {
                                            setSelectedKeywords(selectedKeywords.filter((k) => k !== facet?.name));
                                        }
                                    }}
                                />
                                {facet?.name} <strong>({facet?.count})</strong>
                            </label>
                        </div>
                    ))}
                </div>
            )}

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {/* Resultat */}
            {filteredResults.length > 0 ? (
                <ul>
                    {filteredResults.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.RelativePath ?? '#'}>
                                <h3>{item.SearchTitle}</h3>
                                <p>{item.SearchDescription}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && <p>No results found{debouncedQuery ? ` for "${debouncedQuery}"` : ''}</p>
            )}
        </div>
    );
};

export default NewsSearch;
