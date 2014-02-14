function Elements() {
	this.stats = document.getElementById("stats");
	this.log = document.getElementById("log");
	this.xy = document.getElementById("location");
}

Elements.prototype = {
	setXY : function(x,y) {
		this.xy.textContent = "("+x+","+y+")"; 
	}
}