$(document).ready(function() {
    $('.header__search-outside').click(function() {
        $('.header__search-hide-block').toggleClass('header__search-hide_open');
    });
});

$(document).ready(function() {
    $('.close-search').click(function() {
        $('.header__search-hide-block').removeClass('header__search-hide_open');
    });
});
