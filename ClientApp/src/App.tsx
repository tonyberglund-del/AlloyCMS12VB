import React, { useState } from 'react';
import ContentSearch from './components/ContentSearch';
import ArticleSearch from './components/ArticleSearch';

type SearchType = 'article' | 'content';

interface AppProps {
    initialQuery?: string;
    type?: 'content' | 'article';
}

const App: React.FC<AppProps> = ({ initialQuery }) => {
    const [searchType, setSearchType] = useState<SearchType>('content');


    const handleChange = (value: string) => {
        if (value === 'content' || value === 'article') {
            setSearchType(value);
        }
    };

    return (
        <div>
            <h1>Search System</h1>

            <select
                value={searchType}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option value="content">All Content</option>
                <option value="article">Article Pages</option>
            </select>

            <hr />
            <div className="search-wrapper">
                {searchType === 'content' && <ContentSearch initialQuery={initialQuery} />}
                {searchType === 'article' && <ArticleSearch initialQuery={initialQuery} />}
            </div>
        </div>
    );
};

export default App;

