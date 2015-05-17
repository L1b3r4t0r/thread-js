// Copyright (c)2015 Matheus Silva
///<reference path='../core/core.ts'/>

class RegexHelpers extends ThreadJs {
	private static Regex = new RegExp('(?:(#[A-z0-9]+|\.[A-z0-9]+))');
	public static FindSourceType(ThreadOptions : IThreadOptions): [string, number] {
		var re = this.Regex;
		var m;
		if ((m = re.exec(ThreadOptions.origin)) !== null) {
			m.forEach(function(e) {
				return [e, 0];
			}, this);
		}
		return [ThreadOptions.origin, 1];
	}
}