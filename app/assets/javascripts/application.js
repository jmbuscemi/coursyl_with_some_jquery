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
//= require jquery_ujs
//= require d3
//= require jquery.datetimepicker
//= require jquery.datetimepicker/init
//= require_tree .



function onlyOnce() {
  $(event.target).attr("disabled", true);
  $(event.target).closest('form').submit();
}

function hideDeleteElement() {
  var container = $(event.target).closest('.association.container');
  container.hide();
  container.find('.destroy').prop('checked', 'true');
}

function hideEmptyElement() {
  var container = $('.association.container');
  container.last().hide();
}

function showElement() {
  var container = $('.association.container');
  container.last().show();
}

function smoothScroll() {
  $('#nav a').on('click', function(){
    var navId = $(this).attr('href');
    $('body').animate({scrollTop: $(navId).offset().top}, 'slow');
    return false;
  });
}

$('.datetimepicker').datetimepicker({
  formatTime: 'g:i a'
});

$(hideEmptyElement);
$(smoothScroll);

$(function(){
  $("input[type=submit]").on("click", onlyOnce);
  $(".new-association").on("click", showElement);
  $(".delete-association").on("click", hideDeleteElement);
  $(".flush-association").on("click", hideDeleteElement);
});
