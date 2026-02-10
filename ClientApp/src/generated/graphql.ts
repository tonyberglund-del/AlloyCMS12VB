import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ArticleData = {
  __typename?: 'ArticleData';
  items?: Maybe<Array<Maybe<ArticleItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ArticleItem = {
  __typename?: 'ArticleItem';
  Name?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleWhereInput = {
  Name?: InputMaybe<StringFilter>;
};

export type ContentData = {
  __typename?: 'ContentData';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ContentItem = {
  __typename?: 'ContentItem';
  RelativePath?: Maybe<Scalars['String']['output']>;
  SearchDescription?: Maybe<Scalars['String']['output']>;
  SearchTitle?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
};

export type NewsData = {
  __typename?: 'NewsData';
  items?: Maybe<Array<Maybe<NewsItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type NewsItem = {
  __typename?: 'NewsItem';
  Name?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  SearchDescription?: Maybe<Scalars['String']['output']>;
  SearchTitle?: Maybe<Scalars['String']['output']>;
};

export type NewsWhereInput = {
  SearchTitle?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  ArticlePage?: Maybe<ArticleData>;
  ContentData?: Maybe<ContentData>;
  NewsPage?: Maybe<NewsData>;
};


export type QueryArticlePageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleWhereInput>;
};


export type QueryContentDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNewsPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsWhereInput>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllContentDataQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllContentDataQuery = { __typename?: 'Query', ContentData?: { __typename?: 'ContentData', total?: number | null, items?: Array<{ __typename?: 'ContentItem', SearchTitle?: string | null, SearchDescription?: string | null, RelativePath?: string | null, Url?: string | null } | null> | null } | null };

export type GetAllArticlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllArticlesQuery = { __typename?: 'Query', ArticlePage?: { __typename?: 'ArticleData', total?: number | null, items?: Array<{ __typename?: 'ArticleItem', _id?: string | null, Name?: string | null, RelativePath?: string | null } | null> | null } | null };

export type SearchArticlesQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchArticlesQuery = { __typename?: 'Query', ArticlePage?: { __typename?: 'ArticleData', total?: number | null, items?: Array<{ __typename?: 'ArticleItem', _id?: string | null, Name?: string | null, RelativePath?: string | null } | null> | null } | null };

export type GetAllNewsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllNewsQuery = { __typename?: 'Query', NewsPage?: { __typename?: 'NewsData', total?: number | null, items?: Array<{ __typename?: 'NewsItem', Name?: string | null, SearchTitle?: string | null, SearchDescription?: string | null, RelativePath?: string | null } | null> | null } | null };

export type SearchNewsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchNewsQuery = { __typename?: 'Query', NewsPage?: { __typename?: 'NewsData', total?: number | null, items?: Array<{ __typename?: 'NewsItem', Name?: string | null, SearchTitle?: string | null, SearchDescription?: string | null, RelativePath?: string | null } | null> | null } | null };


export const GetAllContentDataDocument = gql`
    query GetAllContentData($limit: Int, $skip: Int) {
  ContentData(limit: $limit, skip: $skip) {
    total
    items {
      SearchTitle
      SearchDescription
      RelativePath
      Url
    }
  }
}
    `;

/**
 * __useGetAllContentDataQuery__
 *
 * To run a query within a React component, call `useGetAllContentDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContentDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContentDataQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetAllContentDataQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContentDataQuery, GetAllContentDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContentDataQuery, GetAllContentDataQueryVariables>(GetAllContentDataDocument, options);
      }
export function useGetAllContentDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContentDataQuery, GetAllContentDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContentDataQuery, GetAllContentDataQueryVariables>(GetAllContentDataDocument, options);
        }
// @ts-ignore
export function useGetAllContentDataSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllContentDataQuery, GetAllContentDataQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllContentDataQuery, GetAllContentDataQueryVariables>;
export function useGetAllContentDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllContentDataQuery, GetAllContentDataQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllContentDataQuery | undefined, GetAllContentDataQueryVariables>;
export function useGetAllContentDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllContentDataQuery, GetAllContentDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllContentDataQuery, GetAllContentDataQueryVariables>(GetAllContentDataDocument, options);
        }
export type GetAllContentDataQueryHookResult = ReturnType<typeof useGetAllContentDataQuery>;
export type GetAllContentDataLazyQueryHookResult = ReturnType<typeof useGetAllContentDataLazyQuery>;
export type GetAllContentDataSuspenseQueryHookResult = ReturnType<typeof useGetAllContentDataSuspenseQuery>;
export type GetAllContentDataQueryResult = Apollo.QueryResult<GetAllContentDataQuery, GetAllContentDataQueryVariables>;
export const GetAllArticlesDocument = gql`
    query GetAllArticles($limit: Int, $skip: Int) {
  ArticlePage(limit: $limit, skip: $skip) {
    total
    items {
      _id
      Name
      RelativePath
    }
  }
}
    `;

/**
 * __useGetAllArticlesQuery__
 *
 * To run a query within a React component, call `useGetAllArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllArticlesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetAllArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, options);
      }
export function useGetAllArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, options);
        }
// @ts-ignore
export function useGetAllArticlesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllArticlesQuery, GetAllArticlesQueryVariables>;
export function useGetAllArticlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllArticlesQuery | undefined, GetAllArticlesQueryVariables>;
export function useGetAllArticlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, options);
        }
export type GetAllArticlesQueryHookResult = ReturnType<typeof useGetAllArticlesQuery>;
export type GetAllArticlesLazyQueryHookResult = ReturnType<typeof useGetAllArticlesLazyQuery>;
export type GetAllArticlesSuspenseQueryHookResult = ReturnType<typeof useGetAllArticlesSuspenseQuery>;
export type GetAllArticlesQueryResult = Apollo.QueryResult<GetAllArticlesQuery, GetAllArticlesQueryVariables>;
export const SearchArticlesDocument = gql`
    query SearchArticles($search: String, $limit: Int, $skip: Int) {
  ArticlePage(where: {Name: {contains: $search}}, limit: $limit, skip: $skip) {
    total
    items {
      _id
      Name
      RelativePath
    }
  }
}
    `;

/**
 * __useSearchArticlesQuery__
 *
 * To run a query within a React component, call `useSearchArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchArticlesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useSearchArticlesQuery(baseOptions?: Apollo.QueryHookOptions<SearchArticlesQuery, SearchArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchArticlesQuery, SearchArticlesQueryVariables>(SearchArticlesDocument, options);
      }
export function useSearchArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchArticlesQuery, SearchArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchArticlesQuery, SearchArticlesQueryVariables>(SearchArticlesDocument, options);
        }
// @ts-ignore
export function useSearchArticlesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchArticlesQuery, SearchArticlesQueryVariables>): Apollo.UseSuspenseQueryResult<SearchArticlesQuery, SearchArticlesQueryVariables>;
export function useSearchArticlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchArticlesQuery, SearchArticlesQueryVariables>): Apollo.UseSuspenseQueryResult<SearchArticlesQuery | undefined, SearchArticlesQueryVariables>;
export function useSearchArticlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchArticlesQuery, SearchArticlesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchArticlesQuery, SearchArticlesQueryVariables>(SearchArticlesDocument, options);
        }
export type SearchArticlesQueryHookResult = ReturnType<typeof useSearchArticlesQuery>;
export type SearchArticlesLazyQueryHookResult = ReturnType<typeof useSearchArticlesLazyQuery>;
export type SearchArticlesSuspenseQueryHookResult = ReturnType<typeof useSearchArticlesSuspenseQuery>;
export type SearchArticlesQueryResult = Apollo.QueryResult<SearchArticlesQuery, SearchArticlesQueryVariables>;
export const GetAllNewsDocument = gql`
    query GetAllNews($limit: Int, $skip: Int) {
  NewsPage(limit: $limit, skip: $skip) {
    total
    items {
      Name
      SearchTitle
      SearchDescription
      RelativePath
    }
  }
}
    `;

/**
 * __useGetAllNewsQuery__
 *
 * To run a query within a React component, call `useGetAllNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNewsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetAllNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
      }
export function useGetAllNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
        }
// @ts-ignore
export function useGetAllNewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllNewsQuery, GetAllNewsQueryVariables>;
export function useGetAllNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllNewsQuery | undefined, GetAllNewsQueryVariables>;
export function useGetAllNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllNewsQuery, GetAllNewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllNewsQuery, GetAllNewsQueryVariables>(GetAllNewsDocument, options);
        }
export type GetAllNewsQueryHookResult = ReturnType<typeof useGetAllNewsQuery>;
export type GetAllNewsLazyQueryHookResult = ReturnType<typeof useGetAllNewsLazyQuery>;
export type GetAllNewsSuspenseQueryHookResult = ReturnType<typeof useGetAllNewsSuspenseQuery>;
export type GetAllNewsQueryResult = Apollo.QueryResult<GetAllNewsQuery, GetAllNewsQueryVariables>;
export const SearchNewsDocument = gql`
    query SearchNews($search: String, $limit: Int, $skip: Int) {
  NewsPage(where: {SearchTitle: {contains: $search}}, limit: $limit, skip: $skip) {
    total
    items {
      Name
      SearchTitle
      SearchDescription
      RelativePath
    }
  }
}
    `;

/**
 * __useSearchNewsQuery__
 *
 * To run a query within a React component, call `useSearchNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchNewsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useSearchNewsQuery(baseOptions?: Apollo.QueryHookOptions<SearchNewsQuery, SearchNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchNewsQuery, SearchNewsQueryVariables>(SearchNewsDocument, options);
      }
export function useSearchNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchNewsQuery, SearchNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchNewsQuery, SearchNewsQueryVariables>(SearchNewsDocument, options);
        }
// @ts-ignore
export function useSearchNewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchNewsQuery, SearchNewsQueryVariables>): Apollo.UseSuspenseQueryResult<SearchNewsQuery, SearchNewsQueryVariables>;
export function useSearchNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchNewsQuery, SearchNewsQueryVariables>): Apollo.UseSuspenseQueryResult<SearchNewsQuery | undefined, SearchNewsQueryVariables>;
export function useSearchNewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchNewsQuery, SearchNewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchNewsQuery, SearchNewsQueryVariables>(SearchNewsDocument, options);
        }
export type SearchNewsQueryHookResult = ReturnType<typeof useSearchNewsQuery>;
export type SearchNewsLazyQueryHookResult = ReturnType<typeof useSearchNewsLazyQuery>;
export type SearchNewsSuspenseQueryHookResult = ReturnType<typeof useSearchNewsSuspenseQuery>;
export type SearchNewsQueryResult = Apollo.QueryResult<SearchNewsQuery, SearchNewsQueryVariables>;