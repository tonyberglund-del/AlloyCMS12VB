import { gql } from '@apollo/client';


export const GET_ALL_CONTENT_DATA = gql`
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

//export const SEARCH_CONTENT_DATA = gql`
//query seachContentData($search: String, $limit: Int, $skip: Int) {
//  ContentData(where: { SearchTitle: { contains: $search }}
//      limit: $limit
//      skip: $skip
//  ){
//    total
//    items {
//        SearchTitle
//        SearchDescription
//        RelativePath
//        Url
//      }
//   }
//}
//`
export const GET_ALL_ARTICLES = gql`
  query GetAllArticles($limit: Int, $skip: Int) {
    ArticlePage(limit: $limit skip: $skip) {
      total
      items {
        _id
        Name
        RelativePath
      }
    }
  }
`;

export const SEARCH_ARTICLES = gql`
  query SearchArticles($search: String, $limit: Int, $skip: Int) {
    ArticlePage(
      where: { Name: { contains: $search } }
      limit: $limit 
      skip: $skip
    ) {
      total
      items {
        _id
        Name
        RelativePath
      }
    }
  }
`;

export const GET_ALL_NEWS = gql`
  query GetAllNews($limit: Int, $skip: Int) {
    NewsPage(limit: $limit, skip: $skip) {
      total
      items {
        Name
        SearchTitle
        SearchDescription
        RelativePath
      }
      facets {
        SearchKeywords {
          name
          count
        }
      }
    }
  }
`;

export const SEARCH_NEWS = gql`
  query SearchNews($search: String, $limit: Int, $skip: Int) {
    NewsPage(
      where: { SearchTitle: { contains: $search } }
      limit: $limit
      skip: $skip
    ) {
      total
      items {
        Name
        SearchTitle
        SearchDescription
        RelativePath
      }
      facets {
        SearchKeywords {
          name
          count
        }
      }
    }
  }
`;
