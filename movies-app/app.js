/* Handle form submission with input validation */
$('#form-submit').on('click', function(e) {
    e.preventDefault();
    let title = $('input[name="Movie-Title"]').val();
    let rating = $('input[name="Rating"]').val();

    if(rating < 1 || rating > 10){
        alert("Rating out of range");
        return false;
    }
    if(title.length < 2){
        alert("Movie title is too short");
        return false;
    }
    // Adds rated movies to a list
    $(`<li class="movie">${title}, <span class="movie-score">${rating}</span>/10 <span class="remove-btn">&#9746;</span></li>`).appendTo($('#movies'));
    $('.form-input').val('');
})

/* remove function for each move list item */
$('ul').on('click', '.movie', function(e) {
    $(this).remove();
})

/** sort alphabetical function */
function sortAlph(selector){
    $(selector).children('li').sort((a,b) => {
        let A = $(a).text().toUpperCase();
        let B = $(b).text().toUpperCase();
        return (A < B) ? -1 : (A > B) ? 1 : 0;
    }).appendTo(selector);
}

/** Sort alphabetical button */
$('#alphabetical').on('click', function() {
    console.log("sort clicked");
    sortAlph('ul#movies');
})

/** Sort ascending function */
function sortAscend(selector){
    $(selector).children('li').sort((a,b) => {
        let A = $(a.querySelector('.movie-score')).text();
        let B = $(b.querySelector('.movie-score')).text();
        console.log(A);
        return (A - B);
    }).appendTo(selector);
}

/** sort ascending button */
$('#ascend').on('click', function() {
    sortAscend('ul#movies');
});

/** Sort descending function */
function sortDescend(selector){
    $(selector).children('li').sort((a,b) => {
        let A = $(a.querySelector('.movie-score')).text();
        let B = $(b.querySelector('.movie-score')).text();
        console.log(A);
        return (B - A);
    }).appendTo(selector);
}

/** sort descending button */
$('#descend').on('click', function() {
    sortDescend('ul#movies');
});