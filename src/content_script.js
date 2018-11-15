
let currentPage = '';

function insertTrailer() {

    // selectors subject to change.. working as of nov 15 2018
    let title = $("div[data-qa-id='preplayMainTitle']")[0].textContent;
    let year = $("span[data-qa-id='metadataYear']")[0].textContent;

    let trailer = document.createElement('a');
    trailer.setAttribute('href',"https://www.youtube.com/results?search_query="+title+"+"+year+"+trailer");
    trailer.setAttribute('target',"_blank");
    trailer.innerHTML = "Play Trailer";

    $('.PrePlayMetadataInnerContent-innerContent-1BPzw')[0].appendChild(trailer);


}

/*
// todo: embed trailer in an iframe
$.get( "https://www.youtube.com/results?search_query=movie+trailer", function( data ) {
    $( ".result" ).html( data );
});
*/

// detect page change
(document.body).addEventListener('transitionend', function(event) {
    if (location.href !== currentPage) {
        currentPage = location.href;
        // plex does some weird dom updating stuff, delay a bit to make sure elements are ready
        setTimeout(insertTrailer, 500);
    }
}, true);
