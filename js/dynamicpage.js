$(document).ready(function(){
	$('[data-switch]').on('click', function (e) {
		
	    var $page = $('#page'),
	        blockToShow = e.currentTarget.getAttribute('data-switch');

	   

	    // Hide all children.
	    $page.children().hide();

	    // And show the requested component.
	    $page.children(blockToShow).show();
	});
})
