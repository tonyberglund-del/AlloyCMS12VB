import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { apolloClient } from './apolloClient';

// Export for use in Razor views
declare global {
  interface Window {
    mountSearchResults: (containerId: string, initialQuery?: string) => void;
  }
}

window.mountSearchResults = (containerId: string, initialQuery?: string) => {
  console.log('mountSearchResults called with:', { containerId, initialQuery });
  
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  console.log('Container found, mounting React...');

  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <ApolloProvider client={apolloClient}>
          <App initialQuery={initialQuery} />
        </ApolloProvider>
      </React.StrictMode>
    );
    console.log('React component successfully mounted');
  } catch (error) {
    console.error('Error mounting React component:', error);
  }
};

export { App };
