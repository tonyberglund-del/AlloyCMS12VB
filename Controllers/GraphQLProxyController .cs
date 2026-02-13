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
        public async Task<IActionResult> Post([FromBody] GraphQLRequest request)
        {
            try
            {
                var requestBody = System.Text.Json.JsonSerializer.Serialize(request);
                var graphqlRequest = new HttpRequestMessage(HttpMethod.Post, CloudGraphQLUrl)
                {
                    Content = new StringContent(requestBody, System.Text.Encoding.UTF8, "application/json")
                };
                // Prova Basic Auth med AppKey:Secret
                var credentials = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{AppKey}:{Secret}"));
                graphqlRequest.Headers.Add("Authorization", $"Basic {credentials}");

                graphqlRequest.Headers.Add("User-Agent", "Mozilla/5.0");
                graphqlRequest.Headers.Add("Accept", "application/json");

                Console.WriteLine($"Proxying to: {CloudGraphQLUrl}");
                Console.WriteLine($"Using Basic Auth with AppKey");

                var response = await _httpClient.SendAsync(graphqlRequest);
                var content = await response.Content.ReadAsStringAsync();

                Console.WriteLine($"Response status: {response.StatusCode}");
                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    Console.WriteLine($"✓ Success!");
                }

                return StatusCode((int)response.StatusCode, content);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return BadRequest(new { error = ex.Message });
            }
        }
    }

    public class GraphQLRequest
    {
        public string Query { get; set; }
        public Dictionary<string, object> Variables { get; set; }
        public string OperationName { get; set; }
    }

}

   
