import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './mock-schema.graphql',  // använder mock-schema
    documents: 'ClientApp/src/**/*.ts?(x)',
    generates: {
        './ClientApp/src/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo'
            ],
        },
    },
    ignoreNoDocuments: true,
};

export default config;
