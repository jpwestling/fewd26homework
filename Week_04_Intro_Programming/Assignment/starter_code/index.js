jQuery(document).ready(function(){

jQuery(".readmore").on("click",function(){
	event.preventDefault();
	jQuery(".post *").removeClass("hide")
	jQuery(".readmore").addClass("hide");
});

jQuery(".readless").on("click",function(){
	event.preventDefault();
			jQuery(".readless").addClass("hide");

	jQuery("#show-this-on-click").slideUp(400, function(){
		jQuery(".readmore").removeClass("hide");
	});
});

jQuery(".learnmore").on("click",function(){
	event.preventDefault();
	jQuery("#learnmoretext").removeClass("hide")
	jQuery(".learnmore").addClass("hide");
});

});
