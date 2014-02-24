function Elements() {
	//GET ALL THE ELEMENTS!
	this.stats = document.getElementById("stats");
	this.eventLog = document.getElementById("log");
	this.xy = document.getElementById("location");
	this.healthBar = document.getElementById("hp_percent");
	this.hp = document.getElementById("hp");
	this.maxHP = document.getElementById("maxHP");
	this.overlay = document.getElementById("overlay");
	this.modal = document.querySelector(".modal");
	this.cell;
	this.healthBar.style.width = "100%";
}

Elements.prototype = {
	//set XY location on header
	setXY : function(x,y) {
		this.xy.textContent = "("+x+","+y+")"; 
	},
	//top to bottom event log
	eventMsg : function(msg) {
		var old_msg = this.eventLog.innerHTML;
		this.eventLog.innerHTML = "<li>"+msg+"</li>"+old_msg;
	},
	//update cell with relevant data
	updateCell : function(x,y,msg) {
		this.cell = document.querySelector("td[data-x='"+x+"'][data-y='"+y+"']");
		this.cell.style.backgroundColor = "red";
		this.cell.textContent = msg;
	},
	//parse new/previous HP
	//animate HP bar as it transitions (see CSS)
	//set final bar for precision
	hpBar : function() {
		var newHP = Math.floor(parseFloat(((map.player.hp / map.player.maxHP)*100))*100)/100;
		var prev = this.healthBar.style.width;
		prev = Math.floor(prev.substring(0,prev.length-1)*100)/100;
		if (prev > newHP) (prev -= .1);
		else (prev += .1);
		this.healthBar.style.width = prev+"%";
		var x = setTimeout(map.elements.hpBar.bind(this,map.elements.hpBar) ,10);
		this.healthBar.style.width = ((map.player.hp / map.player.maxHP)*100)+"%";
	},
	//set elements to reflect actual HP and Max HP
	health : function() {
		this.hp.textContent = map.player.hp;
		this.maxHP.textContent = map.player.maxHP;
	},
	//set modal to null to clear that crap out
	//re trigger the overlay to hidden
	clearModal : function() {
		this.modal.innerHTML = null;
		this.triggerOverlay();
	},
	//when called, triggers the visibility of the overlay that disables the page
	//modal window
	triggerOverlay : function() {
		this.overlay.style.visibility = (this.overlay.style.visibility == "visible") ? "hidden" : "visible";
	},
	//custom battle modal window
	battle : function(title) {
		//title
		var header = document.createElement("h4");
		header.textContent = title;
		//body div for logged messages
		var bod = document.createElement("div");
		bod.className = "battleLog";
		//action buttons
		var strike = document.createElement("div");
		strike.className = "button battleAction";
		strike.textContent = "Attack";
		var run = document.createElement("div");
		run.className = "button battleAction";
		run.textContent = "Run!";
		//clear modal on run away
		//to-do
		//run away can fail (future)
		run.addEventListener("click", this.clearModal.bind(this,run),false);
		this.modal.appendChild(header);
		this.modal.appendChild(bod);
		this.modal.appendChild(strike);
		this.modal.appendChild(run);
		//trigger dat overlay
		this.triggerOverlay();
	},
	//one function call instead of 2
	updateHP:function() {
		this.hpBar();
		this.health();
	}
}