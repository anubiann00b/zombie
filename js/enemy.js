function Enemy() {
	//array of enemy objects
	this.enemies = [
		{
			name:"Zombie",
			level:1,
			min:0,
			max:2,
			hp:8,
			maxHP:8,
			weapon:"Rancid Nails",
			attack: "strikes",
			goldMin: 1,
			goldMax: 4
		},
		{
			name:"Zombie",
			level:2,
			min:1,
			max:4,
			hp:15,
			maxHP:15,
			weapon:"Infectious Bite",
			attack:"snaps",
			goldMin: 3,
			goldMax: 7
		}
	];
}

Enemy.prototype = {
	clone : function(obj) {
		if(obj == null || typeof(obj) != 'object')
        return obj;

	    var temp = obj.constructor(); // changed

	    for(var key in obj)
	        temp[key] = this.clone(obj[key]);
	    return temp;
	},
	//return a clone
	//so that OG object isn't mutated and you can spawn multiple of one type
	spawn:function(id) {
		var clone = this.clone(this.enemies[id]);
		return clone;
	}
}