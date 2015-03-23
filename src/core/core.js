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
	this.ranThreads = [];
	this.queue = [];
	this.runningThreads = [];
	this.debugInfo = [];
	this.spawnEventWrapper = new Event('ThreadReady');
	this.stop = false;
	return this;
}
threadJs.prototype.getDebugInfo = function() {
	var info = debugInfo;
	var blob = new Blob([info]);
	var url = window.URL.createObjectURL(blob);
	var debugDiv = document.createElement("div");
	debugDiv.id = "debugDiv";
	debugDiv.style.display = "none";
	document.body.appendChild(debugDiv);
	document.getElementById("debugDiv").innerHTML = '<a href="'+url+'" download="debugInfo.log" id="dbui">dl</a>';
	document.getElementById("dbui").click();
};
threadJs.prototype.logDebugInfo = function(text){
	var i = 0;
	this.debugInfo[i] = text;
	i++;
};