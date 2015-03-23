/*! client-thread-js 22-03-2015 */
var thlibVersion = "1.1.0-alpha";
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
};// Copyright Matheus Xavier 2015 MIT
// proc-manager: this file contains the manager code its pretty big and contains all the handling logic of the library
// ========================================================-//-================================================================
threadJs.prototype.handler = function() {
	var nextInQueue = this.queue[0][2];
	if (this.maxThreads === false) {
		this.runningThreads[nextInQueue] = new Worker(window.URL.createObjectURL(this.queue[0][0]));
		copyThreadInfo(nextInQueue);
		this.queue.splice(0, 1);
		this.dispatchEvent(this.spawnEventWrapper);
	}else if (this.runningThreads.length <= this.maxThreads){
		this.runningThreads[nextInQueue] = new Worker(window.URL.createObjectURL(this.queue[0][0]));
		copyThreadInfo(nextInQueue);
		this.queue.splice(0, 1);
		this.dispatchEvent(this.spawnEventWrapper);
	}else{
		this.logDebugInfo("Thread limit exeded on: "+nextInQueue);
	}
	if (mcc > this.queue.length) {
		this.stop = true;
	}
};
threadJs.prototype.endWorker = function(worker) {
	this.runningThreads.terminate();
};
threadJs.prototype.copyThreadInfo = function(pid){
	this.ranThreads[pid] = this.queue[0];
};// Copyright Matheus Xavier 2015 MIT
// Spawner: this file contains the spawner code
// ========================================================-//-================================================================
// spawner function receives the textual data and converts it to a blob to be used by the tread-manager
threadJs.prototype.spawner = function(data, priority, mime) {
	// get last item in queue
	this.lastPidInQueue = this.queue.length - 1;
	var item = this.getBlob(data, mime);
	if (priority < this.lastPidInQueue && this.noQueueOverride === false || priority >= this.lastPidInQueue) {
		this.queue[priority] = item;
	}else if (this.noQueueOverride === true){
		while (priority < this.lastPidInQueue){
			priority++;
		}
		if (priority > this.queue.length) {
			this.queue[priority] = item;
		}
	}
};
threadJs.prototype.getBlob = function(data, mime) {
	// creates a blob object
	mime = mime || "text/javascript";
	var blob = new Blob([data], mime);
	this.item[0] = blob;
	this.item[1] = priority;
	this.item[2] = this.lastPidInQueue + 1;
	this.item[3] = false;
	return this.item;
};
threadJs.prototype.startParser = function(){
	if(this.stop === true){
		this.stop = false;
	}
	while (this.stop === false || this.queue <= 0){
		this.handler();	
	}
};
threadJs.prototype.stopParser = function(){
	this.stop = true;
};// Copyright Matheus Xavier 2015 MIT
// Requesters: this file contains the requesters code they load in the scripts to be used
// ========================================================-//-================================================================
// Spawn a thread by download this function only download the javascript by ajax and passes it to the tread spawner itself
threadJs.prototype.spawnByDownload = function(url, priority, errCallback) {
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