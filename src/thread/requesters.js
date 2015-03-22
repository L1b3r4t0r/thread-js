// Copyright Matheus Xavier 2015 MIT
// Requesters: this file contains the requesters code they load in the scripts to be used
// ========================================================-//-================================================================
// Spawn a thread by download this function only download the javascript by ajax and passes it to the tread spawner itself
threadJs.prototype.spawnByDownload = function(url, priority, errCallback, callToActivate) {
	// create a wrapper to the ajax call
 	this.requestWrapper = new XMLHttpRequest();
 	// Parse the server response
 	this.requestWrapper.onreadystatechange = this.doOn();
 	// opens and sends the request
 	this.requestWrapper.open('GET', url, true);
 	this.requestWrapper.send(null);
};
threadJs.prototype.doOn = function() {
	if (this.requestWrapper.readyState === 4) {
      if (this.requestWrapper.status === 200) {
			// The request went ok then spawn a new thread with it
			this.spawner(this.requestWrapper.responseText);
		}else{
			// Call the callback with error code as parameter
			errCallback(this.requestWrapper.status);
		}
	}
};