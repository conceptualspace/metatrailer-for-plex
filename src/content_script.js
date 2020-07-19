// metatrailer for plex
// copyright dev@conceptualspace.net
// absolutely no warranty is expressed or implied

'use strict';

/*
// todo: embed trailer?
$.get( "https://www.youtube.com/results?search_query=movie+trailer", function( data ) {
    $( ".result" ).html( data );
});
*/

// todo remove jquery dependency

function createTrailer(title, year, margin) {
    let trailer = document.createElement('a');
    trailer.setAttribute("id", "trailer");
    trailer.setAttribute('href',"https://www.youtube.com/results?search_query="+title+"+"+year+"+trailer");
    trailer.setAttribute('target',"_blank");
    if (margin) {
        trailer.style.marginLeft = '20px';
    }
    trailer.innerText = "Play Trailer";
    return trailer;
}

// selectors for v3.x
$(document).arrive("div[data-qa-id='preplaySecondTitle']", function() {
    let title = $("div[data-qa-id='preplayMainTitle']")[0].textContent;
    let year = $("div[data-qa-id='preplaySecondTitle'] .PrePlayLeftTitle-leftTitle-Ev1KGW")[0].textContent;
    if (! $('#trailer')[0]) {
        $('.PrePlayMetadataInnerContent-innerContent-1BPzwp')[0].appendChild(createTrailer(title, year, false));
    }
});

// selectors for v4.x
$(document).arrive("div[data-qa-id='preplay-secondTitle']", function() {
    let title = $("div[data-qa-id='preplay-mainTitle']")[0].textContent;
    let year = $("div[data-qa-id='preplay-secondTitle']")[0].textContent;
    if (! $('#trailer')[0]) {
        $('.PrePlayTertiaryTitle-tertiaryTitle-1LwUaC')[0].appendChild(createTrailer(title, year, true));
    }
});
