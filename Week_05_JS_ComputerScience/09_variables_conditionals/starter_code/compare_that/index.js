// On Page Load/Ready
jQuery(document).ready(function(){

	jQuery("#submit").on("click",function(){
		var a = parseFloat(jQuery("#a").val());
		var b = parseFloat(jQuery("#b").val());
		if(a > b){
			//If A > B
			jQuery("#comparison").text(">");

		}else if(a == b){
			// If A == B
			jQuery("#comparison").text("=");

		}else if(a < b){
			// If A < B
			jQuery("#comparison").text("<");

		}else {
			// Not applicable
			jQuery("#comparison").text("N/A");
		};
	});
});
