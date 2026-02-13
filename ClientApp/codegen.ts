import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config'; 

const config: CodegenConfig = {
    schema: `${process.env.VITE_CMS_SCHEMA_URL}`,
    documents: 'ClientApp/src/**/*.ts?(x)',
    generates: {
        './ClientApp/src/generated/graphql.ts': {
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
