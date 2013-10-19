/*global define */
define(['jquery'], function ($) {
    'use strict';
    $("#home").click(function(e){$(".jumbotron").addClass("hidden");$(".home").removeClass("hidden");});
    $("#about").click(function(e){$(".jumbotron").addClass("hidden");$(".about").removeClass("hidden");});
    $("#contact").click(function(e){$(".jumbotron").addClass("hidden");$(".contact").removeClass("hidden");});
});