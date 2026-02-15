using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace AlloyCMS12VB.Controllers
{
    [ApiController]
    [Route("api/graphql")]
    public class GraphQLProxyController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private const string CloudGraphQLUrl = "https://latest.cg.optimizely.com/api/graphql";
        private const string AppKey = "XvWW0aZKrE4fnyLevFNICVQVIp3WQ3FWf2rn4UZFnXbhUpJU";
        private const string Secret = "eO7M2toFnAJAYDbkHm4ZwrRagDa3+Re81BArmfx0FY6LdMtFvJvzE6RvtAZpUcsv";

        public GraphQLProxyController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }


        [HttpPost]
        public IActionResult Post([FromBody] GraphQLRequest request)
        {
            var mockResponse = new
            {
                data = new
                {
                    ArticlePage = new
                    {
                        total = 2,
                        items = new[] {
                    new {
                        _id = "1",
                        Name = "Breaking News Article",
                        RelativePath = "/articles/breaking-news",
                        SearchKeywords = new[] { "news", "breaking" },
                        SearchTitle = "First Article",
                        SearchDescription = "Description of first article"
                    },
                    new {
                        _id = "2",
                        Name = "Tech Update Article",
                        RelativePath = "/articles/tech-update",
                        SearchKeywords = new[] { "tech", "update" },
                        SearchTitle = "Second Article",
                        SearchDescription = "Description of second article"
                    }
                },
                        facets = new
                        {
                            SearchKeywords = new[] {
                        new { name = "news", count = 5 },
                        new { name = "tech", count = 3 },
                        new { name = "breaking", count = 2 }
                    },
                            SearchCategories = new[] {
                        new { name = "Technology", count = 4 },
                        new { name = "Business", count = 3 }
                    }
                        }
                    }
                }
            };

            return Ok(mockResponse);
        }
    }

    public class GraphQLRequest
    {
        public string Query { get; set; }
        public Dictionary<string, object> Variables { get; set; }
        public string OperationName { get; set; }
    }

}
