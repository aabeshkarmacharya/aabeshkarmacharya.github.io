$(function(){
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');
    $('.nav-pills a').click(function () {
        window.location.hash = this.hash;
    });
});
