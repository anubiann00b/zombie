function Elements() {
	this.stats = document.getElementById("stats");
	this.log = document.getElementById("log");
	this.xy = document.getElementById("location");
	this.hp = document.getElementById("hp_percent");
	this.cell;
}

Elements.prototype = {
	setXY : function(x,y) {
		this.xy.textContent = "("+x+","+y+")"; 
	},
	log : function(msg) {
		this.log.textContent = msg;
	},
	updateCell : function(x,y,msg) {
		var cell = document.querySelector("td[data-x='"+x+"'][data-y='"+y+"']");
		cell.style.backgroundColor = "red";
		cell.textContent = msg;
	},
	hpBar : function() {
		this.hp.style.width = ((map.player.hp / map.player.maxHP)*100)+"%";
		console.log(this.hp.style)
	}
}