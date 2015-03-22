// Copyright Matheus Xavier 2015 MIT
// Core: This file contains the wrapper API around the library and should not be modified unless you know what you are doing.
// ========================================================-//-================================================================
// Declare the core object
// maxThreads = the maximum concurrent threads defaults to unlimited. customQueue = a custom array to store the queued threads.
// The queue works by saving a array in the queue array with the following information priority url or id 
function threadJs(maxThreads){
	// Give information about the library version
	this.info = "Version: "+thlibVersion+" by Matheus Silva matheus@mugfoundation.com";
	// Loop trough arguments variable and transform it in array
	for (var i = 0; i < arguments.length; i++) {
		switch(arguments[i]){
			case "no-queue-overrides":
				this.noQueueOverrides = true;
			break;
			default:
				this.noOptions = true;
			break;
		}
	}
	this.maxThreads = maxThreads || false;
	this.queue = [];
	this.runningThreads = [];
	this.spawnEventWrapper = new Event('ThreadReady');
	this.stop = false;
	return this;
}
threadJs.prototype.getDebugInfo = function() {
	var info = "the current queue is:\n"+this.queue+"and there are currently "+this.runningThreads.length-1+" running threads\n"+this.runningThreads;
	var blob = new Blob([info]);
	var url = window.URL.createObjectURL(blob);
	document.body.innerHTML = '<a href="'+url+'" download="debugInfo.txt" id="dbui">dl</a>';
	document.getElementById("dbui").click();
};