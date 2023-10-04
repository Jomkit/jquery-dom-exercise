$('#form-submit').on('click', function(e) {
    e.preventDefault();
    let title = $('input[name="Movie-Title"]').val();
    let rating = $('input[name="Rating"]').val();
    $(`<li class="movie">${title}, ${rating}/10 <span class="remove-btn">&#9746;</span></li>`).appendTo($('#movies'));
    $('.form-input').val('');
})

$('ul').on('click', '.movie', function(e) {
    $(this).remove();
})