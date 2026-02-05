import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchResults from './components/SearchResults';

// Export for use in Razor views
declare global {
  interface Window {
    mountSearchResults: (containerId: string, initialQuery?: string) => void;
  }
}

window.mountSearchResults = (containerId: string, initialQuery?: string) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <SearchResults initialQuery={initialQuery} />
      </React.StrictMode>
    );
  }
};

export { SearchResults };
