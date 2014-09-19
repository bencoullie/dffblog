// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs

//= require_tree .

//= require modernizr-2.6.2.min
//= require isotope
//= require plugins

//= require nprogress
//= require nprogress-turbolinks

//= require turbolinks

$(function(){
     $('.logoimg').delay(900).animate({
          opacity: 1
     }, 2150);
     $('.logoimgillu').delay(1250).animate({
          opacity: 1
     }, 1000);
     $('.comingsoon').delay(2250).animate({
          opacity: 1
     }, 1000);
     $('#fontquickload').delay(1).css('display', 'none');
});  

$(window).load(function(){
  NProgress.done();
});

$(document).ready(function() {
  NProgress.start();
});
