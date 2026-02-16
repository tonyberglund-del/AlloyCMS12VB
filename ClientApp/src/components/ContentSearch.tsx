// src/components/ContentSearch.tsx
import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useSearchQueryQuery } from '../generated/graphql';

interface ContentSearchProps {
    initialQuery?: string;
}

const ContentSearch: React.FC<ContentSearchProps> = ({ initialQuery = '' }) => {
    const [search, setSearch] = useState(initialQuery);
    const [debouncedSearch, setDebouncedSearch] = useState(initialQuery);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

    const { data, loading, error, refetch } = useSearchQueryQuery({
        variables: {
            searchPhrase: debouncedSearch,
            limit: 50,
            skip: 0,
        },
        fetchPolicy: 'network-only',
    });
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedSearch(search), 500);
        return () => clearTimeout(handler);
    }, [search]);

    // Refetcha när söktext eller keyword-filter ändras
    useEffect(() => {
        refetch({
            searchPhrase: debouncedSearch,
        });
    },[debouncedSearch, selectedKeywords, refetch]);

    if (loading) return <div>Laddar innehåll...</div>;
    if (error) return <div>Fel vid hämtning: {error.message}</div>;

    const items = data?.ContentData?.items || [];

    // Extrahera alla unika kategorier och keywords för filter
    const allCategories = Array.from(
        new Set(items.flatMap(i => i.SearchCategories || []))
    );
    const allKeywords = Array.from(
        new Set(items.flatMap(i => i.SearchKeywords || []))
    );

    const toggleCategory = (name: string) => {
        setSelectedCategories(prev =>
            prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
        );
    };

    const toggleKeyword = (name: string) => {
        setSelectedKeywords(prev =>
            prev.includes(name) ? prev.filter(k => k !== name) : [...prev, name]
        );
    };

    // Filtrera items efter valda checkboxar
    const filteredItems = items.filter(item => {
        const categoryMatch =
            selectedCategories.length === 0 ||
            (item.SearchCategories || []).some(c => selectedCategories.includes(c));
        const keywordMatch =
            selectedKeywords.length === 0 ||
            (item.SearchKeywords || []).some(k => selectedKeywords.includes(k));
        return categoryMatch && keywordMatch;
    });

    return (
        <div>
            <h2>Sök innehåll</h2>
            <input
                type="text"
                placeholder="Sök..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
            />

            <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
                <div>
                    <h4>Kategorier</h4>
                    {allCategories.map(name => (
                        <label key={name}>
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(name)}
                                onChange={() => toggleCategory(name)}
                            />{' '}
                            {name}
                        </label>
                    ))}
                </div>

                <div>
                    <h4>Nyckelord</h4>
                    {allKeywords.map(name => (
                        <label key={name}>
                            <input
                                type="checkbox"
                                checked={selectedKeywords.includes(name)}
                                onChange={() => toggleKeyword(name)}
                            />{' '}
                            {name}
                        </label>
                    ))}
                </div>
            </div>

            <div>
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        style={{ borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}
                    >
                        <h3>{item.SearchTitle}</h3>
                        <p>{item.SearchDescription}</p>
                        <p>
                            <strong>Kategorier:</strong> {(item.SearchCategories || []).join(', ')}
                        </p>
                        <p>
                            <strong>Nyckelord:</strong> {(item.SearchKeywords || []).join(', ')}
                        </p>
                        <a href={item.RelativePath || item.Url}>Gå till sidan</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentSearch;


