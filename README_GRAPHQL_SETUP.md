# GraphQL Codegen + React.js Integration

This setup integrates GraphQL Codegen with React.js for client-side rendering in your Razor Pages application using the Optimizely Content Graph.

## Architecture

- **GraphQL Endpoint**: `https://latest.cg.optimizely.com/content/v2?auth=XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU`
- **Code Generation**: Preset `client` (Apollo Client)
- **Build Tool**: Vite (with React plugin)
- **Client Framework**: React 18 + Apollo Client

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Generate GraphQL Types

Run GraphQL Codegen to generate TypeScript types from your GraphQL schema:

```bash
npm run codegen
```

Or watch for changes:

```bash
npm run codegen:watch
```

This will generate types in the `src/gql/` directory based on your GraphQL queries.

### 3. Build the React Component

Build the React component for production:

```bash
npm run build
```

This creates a UMD bundle at `dist/search-results.umd.js` that can be used in your Razor view.

### 4. Integrate into Your View

The `Views/SearchPage/Index.cshtml` has been updated to:
- Include a div with id `react-search-root` where the React component mounts
- Load React and ReactDOM from CDN
- Call `window.mountSearchResults()` to initialize the component
- Pass the initial search query from the model

### 5. Deploy

1. Build your React component:
   ```bash
   npm run build
   ```

2. Copy the built files from `dist/` to your ASP.NET static files folder (e.g., `wwwroot/js/`)

3. Update the script reference in `Views/SearchPage/Index.cshtml` to point to the built bundle:
   ```razor
   <script src="~/js/search-results.umd.js"></script>
   ```

## Project Structure

```
??? src/
?   ??? components/
?   ?   ??? SearchResults.tsx       # React component using Apollo Client
?   ??? graphql/
?   ?   ??? queries.graphql         # GraphQL queries
?   ??? gql/                        # Generated types (created by codegen)
?   ??? main.tsx                    # Entry point
??? codegen.ts                      # GraphQL Codegen configuration
??? vite.config.ts                  # Vite build configuration
??? tsconfig.json                   # TypeScript configuration
??? package.json                    # Dependencies and scripts
```

## GraphQL Codegen Configuration

The `codegen.ts` file uses:
- **Schema**: Your Optimizely Content Graph endpoint
- **Preset**: `client` (for Apollo Client integration)
- **Documents**: GraphQL queries in `src/graphql/` and `src/**/*.tsx`

## Customizing the Search Component

Edit `src/components/SearchResults.tsx` to:
- Modify the search query structure
- Add additional fields to retrieve from Content Graph
- Change styling and layout
- Add pagination, filtering, or sorting

Update `src/graphql/queries.graphql` to define your exact query structure for code generation.

## Using Generated Types

Once you run `npm run codegen`, import generated types in your components:

```typescript
import type { SearchContentQuery } from './gql/graphql';
```

This provides full TypeScript type safety for your GraphQL operations.

## Development

For development with live reloading:

```bash
npm run dev
```

This starts Vite's dev server on `http://localhost:5173`.

## Troubleshooting

- **Authentication Issues**: Ensure the AppKey in the endpoint URL matches your Optimizely configuration
- **CORS Issues**: Content Graph may require specific CORS headers
- **Type Errors**: Run `npm run codegen` after updating queries
- **Build Errors**: Clear `dist/` and `src/gql/` directories and rebuild
