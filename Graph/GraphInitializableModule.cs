using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using Optimizely.ContentGraph.Cms.NetCore.ConventionsApi;
using EPiServer.ServiceLocation;
using AlloyCMS12VB.Models.Pages;




namespace AlloyCMS12VB.Graph
{
    [ModuleDependency]
    public class GraphInitializableModule: IInitializableModule
    {
        public void Initialize(InitializationEngine context)
        {
            var conventionRepository = context.Locate.Advanced.GetInstance<ConventionRepository>();
                RegisterConventions(conventionRepository);
        }

        public void Uninitialize(InitializationEngine context)
        {

        }

        private static void RegisterConventions(ConventionRepository conventionRepository)
        {
            conventionRepository.IncludeAbstract<ContentData>();

            conventionRepository.ForInstancesOf<ContentData>()
            .IncludeField(x => x.SearchTitle()).Set(x => x.SearchTitle(), IndexingType.Searchable)
            .IncludeField(x => x.SearchDescription()).Set(x => x.SearchDescription(), IndexingType.Searchable)
            .IncludeField(x => x.SearchKeywords()).Set(x => x.SearchKeywords(), IndexingType.Searchable)
            .IncludeField(x => x.SearchCategories()).Set(x => x.SearchCategories(), IndexingType.Searchable);
        }
    }
}
