import React, { useState } from 'react';
import ContentSearch from './components/ContentSearch';
import ArticleSearch from './components/ArticleSearch';
import NewsSearch from './components/NewsSearch';

type SearchType = 'article' | 'content' | 'news';

const App: React.FC = () => {
    const [searchType, setSearchType] = useState<SearchType>('content');

    const handleChange = (value: string) => {
        if ( value === 'content' || value === 'article' || value === 'news') {
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
                <option value="news">News Pages</option>
            </select>

            <hr />
            {searchType === 'content' && <ContentSearch />}
            {searchType === 'article' && <ArticleSearch />}
            {searchType === 'news' && <NewsSearch />}

        </div>
    );
};

export default App;

