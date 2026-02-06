import React, { useState } from 'react';
import ArticleSearch from './components/ArticleSearch';
import ContentSearch from './components/ContentSearch';

const App: React.FC = () => {
    const [searchType, setSearchType] = useState<'article' | 'content'>('article');

    return (
        <div>
            <h1>Search System</h1>

            <select
                value={searchType}
                onChange={(e) =>
                    setSearchType(e.target.value as 'article' | 'content')
                }
            >
                <option value="article">Article Pages</option>
                <option value="content">All Content</option>
            </select>

            <hr />

            {searchType === 'article' && <ArticleSearch />}
            {searchType === 'content' && <ContentSearch />}
        </div>
    );
};

export default App;

