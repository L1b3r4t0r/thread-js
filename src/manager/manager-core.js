// Copyright Matheus Xavier 2015 MIT
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
};