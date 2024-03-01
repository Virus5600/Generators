Array.prototype.uniq = function() {
	var seen = {};
	var out = [];
	var j = 0;

	for(var i = 0; i < this.length; i++) {
		var item = this[i];
		if(seen[item] !== 1) {
			seen[item] = 1;
			out[j++] = item;
		}
	}

	return out;
}
