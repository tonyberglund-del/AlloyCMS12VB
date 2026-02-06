import { gql } from '@apollo/client';

export const GET_TOTAL_ITEMS = gql`
  query TotalItems {
    Data(limit: 1, skip: 0) {
      total
    }
  }
`;

export const SEARCH_CONTENT_DATA = gql`
query seachContentData {
  ContentData {
        total
    items {
            SearchTitle
            SearchDescription
            RelativePath
            Url
        }
    }
}
`

export const SEARCH_QUERY = gql`
  query SearchArticles($limit: Int!, $skip: Int!) {
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

export const GET_ARTICLE_PAGE_FIELDS = gql`
  query GetArticlePageFields {
    __type(name: "ArticlePage") {
      fields {
        name
        type {
          name
          kind
        }
      }
    }
  }
`;
