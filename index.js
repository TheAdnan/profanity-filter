browser.browserAction.onClicked.addListener(function(tab){
	var load1 = browser.tabs.executeScript({
	  file: "bower_components/jquery/dist/jquery.slim.min.js"
	});
	load1.then(load_profanity, onError);
});


function load_profanity(result) {
  	var load2 = browser.tabs.executeScript({
	  file: "profane.js"
	});

	load2.then(onSuccess, onError);
}

function onError(error) {
  	return;
}

function onSuccess(result){
	return;
}

