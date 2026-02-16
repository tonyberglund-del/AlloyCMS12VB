import React, { useState, useEffect } from 'react';
import { useSearchArticlesQuery } from '../generated/graphql';

interface ArticleSearchProps {
    initialQuery?: string;
}

const ArticleSearch: React.FC<ArticleSearchProps> = ({ initialQuery = '' }) => {
    const [search, setSearch] = useState(initialQuery);
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    console.log(initialQuery);

    // Debounce
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedSearch(search), 500);
        return () => clearTimeout(handler);
    }, [search]);

     //--- Hämta alla kategorier (facetter) utan filter ---
    const { data: facetData } = useSearchArticlesQuery({
        variables: { limit: 0, skip: 0 }, // artiklar behövs inte här, bara facets
        fetchPolicy: 'cache-and-network',
    });

    const allCategories =
        facetData?.ArticlePage?.facets.SearchCategories
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(f => f.name) || [];
    const categoryCounts = facetData?.ArticlePage?.facets.SearchCategories.reduce(
        (acc, f) => {
            acc[f.name] = f.count;
            return acc;
        },
        {} as Record<string, number>
    );

    // --- Toggle kategori ---
    const toggleCategory = (name: string) =>
        setSelectedCategories((prev) =>
            prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
        );

    // --- Bygg filtervillkor ---
    const textCondition = debouncedSearch ? { _fulltext: { match: debouncedSearch } } : undefined;
    const categoryCondition =
        selectedCategories.length > 0
            ? { _or: selectedCategories.map(cat => ({ SearchCategories: { in: [cat] } })) }
            : undefined;

    // Kombinera villkor
    const andConditions = [textCondition, categoryCondition].filter(Boolean);
    const where = andConditions.length > 0 ? { _and: andConditions } : undefined;

    // --- Hämta artiklar med filter ---
    const { data, loading, error } = useSearchArticlesQuery({
        variables: {
            where,
            limit: 50,
            skip: 0,
        },
        fetchPolicy: 'cache-and-network',
    });

    const items = data?.ArticlePage?.items || [];

    // Sortera artiklar så de valda kategorierna kommer först
    const sortedItems = [...items].sort((a, b) => {
        if (selectedCategories.length === 0) return 0;

        const aIndex = Math.min(
            ...(a.SearchCategories?.map(c => selectedCategories.indexOf(c)).filter(i => i >= 0) ?? [Infinity])
        );
        const bIndex = Math.min(
            ...(b.SearchCategories?.map(c => selectedCategories.indexOf(c)).filter(i => i >= 0) ?? [Infinity])
        );

        return aIndex - bIndex;
    });


    if (loading) return <div>Laddar artiklar...</div>;
    if (error) return <div>Fel vid hämtning: {error.message}</div>;


    return (
        <div>
            {/* Sökfält */}
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Sök artiklar..."
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}
            />
            {/* Kategorifilter */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1rem',
                }}
            >
           
                {allCategories.map((cat) => {
                    return(
                      <label key={cat} style={{ cursor: 'pointer' }}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            style={{ marginRight: '0.25rem' }}
                        />
                            {cat} ({categoryCounts[cat] || 0})
                    </label>
                    )
                })}
            </div>

            {/* Artikellista */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {sortedItems.map((item) => (
                    <li key={item.RelativePath || item._id} style={{ marginBottom:'1.5rem', borderBottom:'1px solid #ccc', paddingBottom:'1rem' }}>
                        <h3>{item.SearchTitle}</h3>
                        {item.SearchDescription && <p>{item.SearchDescription}</p>}
                        {item.RelativePath && (
                            <a href={item.RelativePath} target="_blank" rel="noopener noreferrer">
                                Läs mer
                            </a>
                        )}
                        {item.SearchCategories?.length > 0 && (
                            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
                                Kategorier: {item.SearchCategories.join(', ')}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ArticleSearch;