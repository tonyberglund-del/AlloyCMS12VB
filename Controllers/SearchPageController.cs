using AlloyCMS12VB.Models.Pages;
using AlloyCMS12VB.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AlloyCMS12VB.Controllers;

public class SearchPageController : PageControllerBase<SearchPage>
{
    public ViewResult Index(SearchPage currentPage, string q)
    {
        var model = new SearchContentModel(currentPage)
        {
            Hits = Enumerable.Empty<SearchContentModel.SearchHit>(),
            NumberOfHits = 0,
            SearchServiceDisabled = true,
            SearchedQuery = q
        };

        return View(model);
    }
}
