/*$('.carousel-fade').carousel({
    interval:7500
});*/
$('.slider-blocks .carousel').carousel({
    interval:7000
});
$('.post-slider .carousel').carousel({
    interval:3500
});/**Common For ALL*/$(document).ready(function () {    $("#back-top").hide();    $(function () {        $(window).scroll(function () {			//alert($(this).scrollTop());            if ($(this).scrollTop() > 100) {                $('#back-top').fadeIn();            } else {                $('#back-top').fadeOut();            }        });        $('#back-top a').click(function () {            $('body,html').animate({                scrollTop: 0            }, 800);            return false;        });    });    $(".scrollToElement").click(function () {        var $target = $($(this).attr("href"));        var top = $target.offset().top;        if (top >= 0) {            $('body,html').animate({                scrollTop: top            }, 800);            return false;        }    });		function initSectionHeight() {        var windowPortHeight = $(window).height();        var ContentHeightHeader = $('header.header').height();        var ContentHeightBlue = $('.blue-block').height();        var ContentHeightGray = $('.gray-block').height();        var ContentHeightWhite = $('.white-block').height();        var ContentHeightLightBlue = $('.light-blue-block').height();        if (windowPortHeight > ContentHeightHeader) {            $('header.header').css('height', windowPortHeight + 'px');            $('header.header .icon-circle').addClass('block-bottom');        }        if (windowPortHeight > ContentHeightBlue) {            $('.blue-block').css('height', windowPortHeight + 'px');            $('.blue-block .icon-circle').addClass('block-bottom');        }        if (windowPortHeight > ContentHeightGray) {            $('.gray-block').css('height', windowPortHeight + 'px');            $('.gray-block .icon-circle').addClass('block-bottom');        }        if (windowPortHeight > ContentHeightWhite) {            $('.white-block').css('height', windowPortHeight + 'px');            $('.gray-block .icon-circle').addClass('block-bottom');        }        if (windowPortHeight > ContentHeightLightBlue) {            $('.light-blue-block').css('height', windowPortHeight + 'px');            $('.light-blue-block .icon-circle').addClass('block-bottom');        }    }    initSectionHeight();});	