browser.browserAction.onClicked.addListener(function(tab){
	var load1 = browser.tabs.executeScript({
	  file: "bower_components/jquery/dist/jquery.slim.min.js"
	});
	load1.then(first_loaded, onError);
});



function first_loaded(result) {
  var load2 = browser.tabs.executeScript({
	  file: "bower_components/jQuery.ProfanityFilter/jquery.profanityfilter.min.js"
	});
	load2.then(second_loaded, onError);
}

function second_loaded(result) {
  var load3 = browser.tabs.executeScript({
	  file: "profane.js"
	});
	load3.then(success, onError);
}

function onError(error) {
  	return;
}

function success(result){
	return;
}

