// C:/Development/AlloyCMS12VB/download-schema.cjs

// Ignore self-signed SSL certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import fs from 'fs';
import fetch from 'node-fetch';
import { getIntrospectionQuery, printSchema, buildClientSchema } from 'graphql';

const GRAPHQL_URL = 'https://latest.cg.optimizely.com/api/graphql?apikey=XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU';  // Ändra till din lokala endpoint

async function downloadSchema() {
    try {
        const res = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: getIntrospectionQuery() }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
        }

        const json = await res.json();

        if (json.errors) {
            console.error('GraphQL returned errors:', json.errors);
            process.exit(1);
        }

        const schema = buildClientSchema(json.data);
        const sdl = printSchema(schema);

        fs.writeFileSync('./schema.graphql', sdl);
        console.log('✅ Schema downloaded successfully to ./schema.graphql');
    } catch (err) {
        console.error('❌ Failed to download schema:', err.message);
        process.exit(1);
    }
}

downloadSchema();





