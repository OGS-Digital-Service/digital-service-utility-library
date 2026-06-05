document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('nysds-service-search-input');
    const submitSearch = document.getElementById('nysds-service-search-form');
    const searchHero = document.getElementById('nysds-search-hero');
    function searchServices (e) {
        e.preventDefault();
        var searchTerm = searchInput.value; 
        if (!searchTerm) {
           window.location.href ="https://ny.gov/all-services"
        }
        else {
            window.location.href ="https://ny.gov/all-services?search_api_fulltext_tablet=&search_api_fulltext="+searchTerm+"&items_per_page=10#views-exposed-form-filter-frame-services"
        } 
    }
    submitSearch.addEventListener("submit", searchServices)
})