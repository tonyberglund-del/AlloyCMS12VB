import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
    schema: 'https://latest.cg.optimizely.com/api/graphql?apikey=XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU',
    documents: 'ClientApp/src/**/*.ts?(x)',
    generates: {
        'ClientApp/src/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo'
            ],
            config: {
                withHooks: true,
                reactApolloVersion: 3,
            }
        },
    },
    ignoreNoDocuments: true,
};

export default config;