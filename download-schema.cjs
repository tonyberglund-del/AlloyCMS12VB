// C:/Development/AlloyCMS12VB/download-schema.cjs

console.log('Starting schema download...');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fs = require('fs');
const { getIntrospectionQuery, printSchema, buildClientSchema } = require('graphql');

const GRAPHQL_URL = 'https://latest.cg.optimizely.com/api/graphql?apikey=XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU';

async function downloadSchema() {
    try {
        console.log('1. Fetching introspection query...');
        const introspectionQuery = getIntrospectionQuery();
        console.log('2. Sending request to:', GRAPHQL_URL);

        // Använd Node.js 18+ inbyggda fetch
        const res = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: introspectionQuery }),
        });

        console.log('3. Response status:', res.status, res.statusText);

        if (!res.ok) {
            throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
        }

        const json = await res.json();
        console.log('4. Response received');

        if (json.errors) {
            console.error('GraphQL returned errors:', json.errors);
            process.exit(1);
        }

        console.log('5. Building schema...');
        const schema = buildClientSchema(json.data);
        const sdl = printSchema(schema);

        console.log('6. Writing to ./schema.graphql...');
        fs.writeFileSync('./schema.graphql', sdl);
        console.log('✅ Schema downloaded successfully to ./schema.graphql');
        process.exit(0);
    } catch (err) {
        console.error('❌ Failed to download schema:', err.message);
        process.exit(1);
    }
}

downloadSchema().catch(err => {
    console.error('Uncaught error:', err);
    process.exit(1);
});






