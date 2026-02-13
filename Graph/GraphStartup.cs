using EPiServer.DependencyInjection;
using Optimizely.ContentGraph.Cms.Configuration;
using Microsoft.AspNetCore.Routing;



namespace AlloyCMS12VB.Graph
{
    public static class GraphStartup
    {
        public static void RegisterGraph(IServiceCollection services)
        {
            services.AddContentDeliveryApi();
            services.AddContentGraph(options =>
            {
                options.ExtractMedia = false; // Media not indexed
            });
            //services.ConfigureScheduleJob(
            //    checkStatusInterval: TimeSpan.FromMinutes(1),
            //    checkStatusSleepOnFailure: TimeSpan.FromSeconds(15),
            //    waitUntilFinalResult: false); 
            services.Configure<EventIndexingOptions>(options =>
            {
                options.IndexReferencingContent = ReferencingPropertyTypes.Inlined;
                options.SyncContentsInParallelTaskAndForget = false;
            });
        }

    }
}
