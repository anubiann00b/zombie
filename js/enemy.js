function Enemy() {
	//array of enemy objects
	this.enemies = [
		{
			name:"Zombie",
			level:1,
			min:0,
			max:2,
			hp:8
		},
		{
			name:"Zombie",
			level:2,
			min:1,
			max:4,
			hp:15
		}
	];
}

Enemy.prototype = {
	//return a clone
	//so that OG object isn't mutated and you can spawn multiple of one type
	spawn:function(id) {
		var clone = this.enemies[id];
		return clone;
	}
}