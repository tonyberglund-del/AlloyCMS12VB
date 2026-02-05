import { gql } from '@apollo/client';

export const GET_TOTAL_ITEMS = gql`
  query TotalItems {
    Data(limit: 1, skip: 0) {
      total
    }
  }
`;

export const SEARCH_QUERY = gql`
  query SearchArticles($limit: Int!, $skip: Int!) {
    ArticlePage(limit: $limit, skip: $skip) {
      total
      items {
        _id
        Name
      }
    }
  }
`;
