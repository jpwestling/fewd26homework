
jQuery(document).ready(function(){
	$('#submit-btn').click(function(){
    event.preventDefault();
    var cityName = jQuery("#city-type").val();
    // jQuery("#city-type").val();
    cityName = cityName.toLowerCase().trim();
    console.log(cityName);
    if (cityName == "nyc" || cityName == "new york") {
        jQuery("body").attr("class", "nyc");
    }else if (cityName == "la" || cityName == "los angeles") {
            jQuery("body").attr("class", "la");
    }else if (cityName == "austin") {
            jQuery("body").attr("class", "austin");
    }else if (cityName == "sydney") {
            jQuery("body").attr("class", "sydney");
    }else if (cityName == "sf" || cityName == "san francisco") {
			jQuery("body").attr("class", "sf");
	}
    });
});