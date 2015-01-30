(function(chrome){
	chrome.browserAction.onClicked.addListener(function() {
		chrome.tabs.executeScript(null, {file: "scripts/hideDigitalSubscriptionModal.js"});
	});
})(chrome);