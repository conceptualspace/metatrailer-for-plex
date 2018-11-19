
/*
// todo: embed trailer in an iframe
$.get( "https://www.youtube.com/results?search_query=movie+trailer", function( data ) {
    $( ".result" ).html( data );
});
*/

$(document).arrive("div[data-qa-id='preplaySecondTitle']", function() {
    // selectors subject to change; working with web client v3.75.3
    let title = $("div[data-qa-id='preplayMainTitle']")[0].textContent;
    let year = $("div[data-qa-id='preplaySecondTitle']")[0].textContent;

    if (! $('#trailer')[0]) {
        let trailer = document.createElement('a');
        trailer.setAttribute("id", "trailer");
        trailer.setAttribute('href',"https://www.youtube.com/results?search_query="+title+"+"+year+"+trailer");
        trailer.setAttribute('target',"_blank");
        trailer.innerHTML = "Play Trailer";
        $('.PrePlayMetadataInnerContent-innerContent-1BPzw')[0].appendChild(trailer);
    }
});
