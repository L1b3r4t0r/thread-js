// Copyright (C)2015 Matheus Silva
///<reference path='../helpers/comms'/>
///<reference path='../helpers/requester'/>
///<reference path='../manager/manager'/>
///<reference path='../helpers/regexhelpers'/>
///<reference path='types'/>
///<reference path='../helpers/plainjscalls'/>

class ThreadJs {
	protected Origin: string;
	// Detect The origin type and start a call to Manager.
	constructor(ThreadOptions : IThreadOptions) {
		var r;
		if ((r = RegexHelpers.FindSourceType(ThreadOptions)[1]) == 0) {
			this.Origin = r[0];
			
		}
	}
}