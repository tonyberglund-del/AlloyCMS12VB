import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://latest.cg.optimizely.com/content/v2?auth=XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU',
  documents: ['src/graphql/**/*.graphql', 'src/**/*.tsx'],
  generates: {
    './src/gql/': {
          preset: 'client',
          config: {
        documentMode: 'string'
        }
    }
  }
};

export default config;
