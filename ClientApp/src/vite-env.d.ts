/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CMS_SCHEMA_URL: string
    readonly VITE_APP_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}