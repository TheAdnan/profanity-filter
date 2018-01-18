
function filter_profanity() {
	$(document).profanityFilter({
	    externalSwears: 'bower_components/jQuery.ProfanityFilter/localResources/en.json'
	});
}

filter_profanity();