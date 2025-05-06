
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('nysds-service-search-input-signup');
    const submitSearch = document.getElementById('nysds-service-search-form');
    const searchHero = document.getElementById('nysds-search-hero');
    const container = searchHero.closest(".t-section__content");
    container.classList.add('-no-margin-top')

    function searchServices (e) {
        e.preventDefault();
        var searchTerm = searchInput.value; 
        if (!searchTerm) {
           window.location.href ="/all-services"
        }
        else {
            window.location.href ="/all-services?search_api_fulltext_tablet=&search_api_fulltext="+searchTerm+"&items_per_page=10#views-exposed-form-filter-frame-services"
        } 
    }
    submitSearch.addEventListener("submit", searchServices)
})