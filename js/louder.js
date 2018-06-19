$(document).ready(function(){
	setTimeout(function() {
	  $('body')
	    .removeClass('loading')
	    .addClass('loaded');
	}, 3000);
});