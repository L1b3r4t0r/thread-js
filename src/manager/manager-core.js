// Copyright Matheus Xavier 2015 MIT
// proc-manager: this file contains the manager code its pretty big and contains all the handling logic of the library
// ========================================================-//-================================================================
threadJs.prototype.handler = function() {
	var mcc = 0;
	if (this.maxThreads === false) {
		this.runningThreads[this.queue[mcc][2]] = new Worker(window.URL.createObjectURL(this.queue[mcc][0]));
		this.queue.splice(0, 1);
		this.dispatchEvent(this.spawnEventWrapper);
		mcc += 1;
	}else if (this.runningThreads.length <= this.maxThreads){
		this.runningThreads[this.queue[mcc][2]] = new Worker(window.URL.createObjectURL(this.queue[mcc][0]));
		this.queue.splice(0, 1);
		this.dispatchEvent(this.spawnEventWrapper);
		mcc += 1;
	}
	this.lastPidInQueue = this.queue.length-1;
};
threadJs.prototype.end_worker = function(worker) {
	this.runningThreads.terminate();
};