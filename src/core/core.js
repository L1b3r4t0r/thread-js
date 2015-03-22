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
	this.spawnEventWrapper = new Event('ThreadReady');
	while (this.queue.length > 0){
		this.handler();	
	}
	return this;
}
