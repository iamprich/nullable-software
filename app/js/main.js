"use strict";

// Collapse Nav

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
};

// Closes the Responsive Menu on Menu Item Click

$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// jQuery Easing

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1250, 'easeInOutExpo');
        event.preventDefault();

    });
});

// Slide Animation

$(window).scroll(function() {
    $(".slideanim").each(function() {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
            $(this).addClass("slide");
        }
    });
});

// Header Color Scroll

$(document).scroll(function() {
    var aboutScroll = $('#about').offset();
    var serviceScroll = $('#services').offset();
    var connectScroll = $('#connect').offset();
    var y = $(this).scrollTop() + 100;

    if (y >= aboutScroll.top && y < serviceScroll.top) {
        $(".navbar").css("border-top-color", "#3CBE56");
    } else if (y >= serviceScroll.top && y < connectScroll.top) {
        $(".navbar").css("border-top-color", "#1192FE");
    } else if (y >= connectScroll.top) {
        $(".navbar").css("border-top-color", "#DD2D21");
    } else {
        $(".navbar").css("border-top-color", "#fff");
    }
});

// Terminal Date

$("#terminal-date").text("Last login: " + new Date() + " on ttys000");