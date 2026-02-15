import type { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const config: CodegenConfig = {
    // schema relativt till codegen.ts
    //schema: path.join(__dirname, '../schema.graphql'),
    schema: 'https://latest.cg.optimizely.com/content/v2?auth=bUebySzn1VGAOWvSyTuNHsRcfuWRQTJ05cVIAbQeauSZGFqa',

    // varifrån query-dokumenten hämtas
    documents: [
        './src/graphql/**/*.graphql'
    ],

    generates: {
        './src/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo'
            ],
            config: {
                withHooks: true,
                reactApolloVersion: 3,
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;
