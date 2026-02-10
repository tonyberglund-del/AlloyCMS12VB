import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

// Lokalt mock-schema / GraphQL endpoint
const apolloClient = new ApolloClient({
    uri: '/graphql', // OBS: mock-schema -> kan sättas upp med ApolloServer lokalt, annars används Codegen direkt
    cache: new InMemoryCache(),
});

declare global {
    interface Window {
        mountSearchResults: (containerId: string, initialQuery?: string) => void;
    }
}

// Funktion för Razor / extern mount
window.mountSearchResults = (containerId: string, initialQuery?: string) => {
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

// Direkt mount (för utveckling)
const devContainer = document.getElementById('root');
if (devContainer) {
    const root = ReactDOM.createRoot(devContainer);
    root.render(
        <React.StrictMode>
            <ApolloProvider client={apolloClient}>
                <App />
            </ApolloProvider>
        </React.StrictMode>
    );
}

