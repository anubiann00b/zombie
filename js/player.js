function Player() {
	this.hp = 15;
	this.maxHP = 15;
	this.min = 1;
	this.max = 3;
	this.equipName = "Fists";
}

Player.prototype = {
	//get set functions
	getHP:function() {
		return this.hp;
	},
	setHP:function(hp) {
		this.hp += hp;
		//make sure HP does not go below 0
		if (this.hp <= 0) this.hp = 0;
		//if hp param is 0, set HP to 0 (death)
		if (hp === 0) this.hp = 0;
		//update elements
		map.elements.updateHP();
	},
	alterHP:function(inc) { //can be negative son!
		this.hp += inc;
		//update elements
		map.elements.updateHP();
	}
}