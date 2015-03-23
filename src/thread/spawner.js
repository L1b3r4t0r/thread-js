// Copyright Matheus Xavier 2015 MIT
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
};