import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export const SEARCH_CONTENT_DATA = gql`
query SearchQuery(
  $searchPhrase: String,
  $limit: Int,
  $skip: Int,
  $keywords: [String!]
) {
  ContentData(
    where: { _fulltext: { match: $searchPhrase } }
    limit: $limit
    skip: $skip
    facets: { SearchKeywords: { limit: 20 } }
  ) {
    items {
      SearchTitle
      SearchDescription
      RelativePath
      Url
      SearchKeywords
    }
    facets {
      SearchKeywords(filters: $keywords) {
        name
        count
      }
    }
  }
}
`;