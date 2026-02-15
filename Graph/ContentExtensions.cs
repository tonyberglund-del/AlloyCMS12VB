using AlloyCMS12VB.Models.Pages;
using EPiServer.ServiceLocation;

namespace AlloyCMS12VB.Graph
{
    public static class ContentExtensions
    {
        public static string SearchTitle(this ContentData contentData)
        {
            if (contentData is SitePageData sitePageData && !string.IsNullOrWhiteSpace(sitePageData.MetaTitle))
            {
                return sitePageData.MetaTitle;
            }
            
            if (contentData is IContent content)
            {
                return content.Name;
            }

            return null;
        }

        public static string SearchDescription(this ContentData contentData)
        {
            if (contentData is StandardPage standardPage && !string.IsNullOrWhiteSpace(standardPage.MainBody?.ToString()))
            {
                return standardPage.MainBody.ToString();
            }

            if (contentData is SitePageData sitePageData)
            {
                if(!string.IsNullOrWhiteSpace(sitePageData.TeaserText))
                {
                    return sitePageData.TeaserText;
                }
                if(!string.IsNullOrWhiteSpace(sitePageData.MetaDescription))
                {
                    return sitePageData.MetaDescription;
                }

            }
            return null;
        }
        public static List<string> SearchKeywords(this ContentData contentData)
        {
            if (contentData is SitePageData sitePageData && sitePageData.MetaKeywords != null)
            {
                return [.. sitePageData.MetaKeywords];
            }

            return [];
        }

        public static List<string> SearchCategories(this ContentData contentData)
        {
            var categoryRepository = ServiceLocator.Current.GetInstance<CategoryRepository>();

            if (contentData is SitePageData sitePageData && sitePageData.Category != null)
            {
                return sitePageData.Category.Select(x => categoryRepository?.Get(x)?.Name)?.ToList();
            }

            return [];
        }

        public static string SearchMainBody(this ArticlePage articleData)
        {
            return articleData.MainBody.ToString();
        }

        public static string SearchName(this ArticlePage articleData)
        {
            if (articleData is SitePageData sitePageData && !string.IsNullOrWhiteSpace(sitePageData.MetaTitle))
            {
                return sitePageData.MetaTitle;
            }

            if (articleData is IContent content)
            {
                return content.Name;
            }

            return null;
        }
    }
}
