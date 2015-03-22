// Copyright Matheus Xavier 2015 MIT
// Spawner: this file contains the spawner code
// ========================================================-//-================================================================
// spawner function receives the textual data and converts it to a blob to be used by the tread-manager
threadJs.prototype.spawner = function(data, priority, mime) {
	// creates a blob object
	mime = mime || "text/javascript";
	var blob = new Blob([data], mime);
	this.item = [];
	this.item[0] = blob;
	this.item[1]		= priority;
	this.item[2]		= this.lastPidInQueue + 1;
	this.item[3]		= false;
	if (priority < this.queue.length && this.noQueueOverride === false || priority >= this.queue.length) {
		this.queue[priority] = this.item;
	}else if (this.noQueueOverride === true){
		while (priority < this.queue.length){
			priority += 1;
		}
		if (priority > this.queue.length) {
			this.queue[priority] = this.item;
		}
	}
	this.handler();
};