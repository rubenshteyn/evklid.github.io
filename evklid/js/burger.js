$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__nav').toggleClass('header__nav-open');
        $('.header__burger').toggleClass('header__burger-close');
    });
});
