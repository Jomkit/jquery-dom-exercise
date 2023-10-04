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
    
    $(`<li class="movie">${title}, ${rating}/10 <span class="remove-btn">&#9746;</span></li>`).appendTo($('#movies'));
    $('.form-input').val('');
})

$('ul').on('click', '.movie', function(e) {
    $(this).remove();
})