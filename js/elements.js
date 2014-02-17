function Elements() {
	this.stats = document.getElementById("stats");
	this.eventLog = document.getElementById("log");
	this.xy = document.getElementById("location");
	this.healthBar = document.getElementById("hp_percent");
	this.hp = document.getElementById("hp");
	this.maxHP = document.getElementById("maxHP");
	this.cell;
}

Elements.prototype = {
	setXY : function(x,y) {
		this.xy.textContent = "("+x+","+y+")"; 
	},
	eventMsg : function(msg) {
		var old_msg = this.eventLog.innerHTML;
		this.eventLog.innerHTML = "<li>"+msg+"</li>"+old_msg;
	},
	updateCell : function(x,y,msg) {
		this.cell = document.querySelector("td[data-x='"+x+"'][data-y='"+y+"']");
		this.cell.style.backgroundColor = "red";
		this.cell.textContent = msg;
	},
	hpBar : function() {
		this.healthBar.style.width = ((map.player.hp / map.player.maxHP)*100)+"%";
		console.log(this.healthBar.style.width);
	},
	health : function() {
		this.hp.textContent = map.player.hp;
		this.maxHP.textContent = map.player.maxHP;
	}
}