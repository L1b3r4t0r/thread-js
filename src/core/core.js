// Copyright Matheus Xavier 2015 MIT
// Core: This file contains the wrapper API around the library and should not be modified unless you know what you are doing.
// ========================================================-//-================================================================
// Declare the core object
// maxThreads = the maximum concurrent threads defaults to unlimited. customQueue = a custom array to store the queued threads.
// The queue works by saving a array in the queue array with the following information priority url or id 
function threadJs(maxThreads){
	// Give information about the library version
	this.info = "Version: "+version+" by Matheus Silva matheus@mugfoundation.com";
	// loop trough arguments variable and transform it in array
	for (var i = 0; i < arguments.length; i++) {
		var arg[i] = arguments[i];
	}
	for (var i = 0; i < arg.length; i++) {
		switch(arg[i]){
			case "no-queue-overrides":
				var noQueueOverrides = true;
			break;
			default:
				var noOptions = true;
			break;
		}
	}
	this.maxThreads = maxThreads || false;
	return this;
}
