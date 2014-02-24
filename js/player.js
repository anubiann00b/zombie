function Player() {
	this.hp = 15;
	this.maxHP = 15;
	this.min = 1;
	this.max = 3;
}

Player.prototype = {
	getHP:function() {
		return this.hp;
	},
	setHP:function(hp) {
		this.hp = hp;
	},
	alterHP:function(inc) { //can be negative son!
		this.hp += inc;
	}
}