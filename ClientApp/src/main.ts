import React from "react";
import ReactDOM from "react-dom/client";
import ContentSearch from "./components/ContentSearch";

(window as any).mountSearchResults = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (!el) return;

    ReactDOM.createRoot(el).render(
        <React.StrictMode>
        <ContentSearch />
        </React.StrictMode>
    );
};
