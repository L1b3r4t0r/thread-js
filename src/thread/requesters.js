// Copyright Matheus Xavier 2015 MIT
// Requesters: this file contains the requesters code they load in the scripts to be used
// ========================================================-//-================================================================
// Spawn a thread by download this function only download the javascript by ajax and passes it to the tread spawner itself
threadJs.prototype.spawnByDownload = function(url, priority, errCallback) {
	// create a wrapper to the ajax call
 	var requestWrapper = new XMLHttpRequest();
 	// Parse the server response
 	requestWrapper.onreadystatechange = function () {
 		if (requestWrapper.readyState === 4 && requestWrapper.status === 200) {
 			// I the request went ok then spawn a new thread with it
 			this.spawner(requestWrapper.responseText);
 		}else{
 			// Call the callback with error code as parameter
 			errCallback(requestWrapper.status);
 		}
 	};
 	// opens and sends the request
 	requestWrapper.open('GET', url, true);
 	requestWrapper.send(null);
};