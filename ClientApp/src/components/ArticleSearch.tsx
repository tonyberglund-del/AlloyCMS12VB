import { useState, useEffect } from 'react';
import { useSearchArticlesQuery } from '../generated/graphql';

interface ArticleSearchProps {
    initialQuery?: string;
}

export default function ArticleSearch({ initialQuery = '' }: ArticleSearchProps) {
    const [query, setQuery] = useState(initialQuery);
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedQuery(query), 400);
        return () => clearTimeout(timeout);
    }, [query]);

    const { data, loading, error } = useSearchArticlesQuery({
        variables: {
            search: debouncedQuery,
            limit: 50,
            skip: 0,
            categories: selectedCategories.length ? selectedCategories : undefined,
        },
        fetchPolicy: 'network-only',
        skip: !debouncedQuery && !selectedCategories.length,
    });

    // Use 'any[]' as a temporary type for items until the correct type is available
    const items: any[] = data?.ArticlePage?.items ?? [];
    const categoryFacets = data?.ArticlePage?.facets?.SearchCategories ?? [];

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
        setIsSearching(true);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);
    };

    return (
        <div className={"wrapper"}>
            {/* 🔎 Search Input */}
            <form onSubmit={handleSearch} className={"searchForm"}>
                <input
                    type="text"
                    placeholder="Sök artiklar..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Sök</button>
            </form>

            {/* 🏷 Category Facets */}
            {categoryFacets.length > 0 && (
                <div className={"facets"}>
                    <h4>Filtrera på kategorier</h4>
                    {categoryFacets.map(f => (
                        <label key={f.name}>
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(f.name)}
                                onChange={() => toggleCategory(f.name)}
                            />
                            {f.name} ({f.count})
                        </label>
                    ))}
                </div>
            )}

            {/* 📄 Results */}
            <div className={"facets"}>
                {loading && <p>Laddar...</p>}
                {error && <p>Något gick fel.</p>}
                {!loading && items.length === 0 && isSearching && <p>Inga artiklar hittades.</p>}

                {items.map(item => (
                    <div key={item.RelativePath ?? item._id} className="list-group-item">
                        <h3>{item.SearchTitle ?? item.Name}</h3>
                        <p>{item.SearchDescription}</p>
                        {item.RelativePath && <a href={item.RelativePath}>Läs mer</a>}
                    </div>
                ))}
            </div>
        </div>
    );
}
