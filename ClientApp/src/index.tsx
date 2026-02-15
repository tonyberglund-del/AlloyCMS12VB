import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, } from '@apollo/client';
import { apolloClient } from './apolloClient';
import App from './App';


declare global {
    interface Window {
        mountSearchResults: (containerId: string, initialQuery?: string) => void;
    }
}

// Gör mount-funktion global
window.mountSearchResults = (containerId: string, initialQuery?: string, type: 'content' | 'article' = 'content') => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <ApolloProvider client={apolloClient}>
                <App initialQuery={initialQuery} />
            </ApolloProvider>
        </React.StrictMode>
    );
};
