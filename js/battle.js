function Battle(eid) {
	this.foe = map.enemy.spawn(eid);
	document.getElementById("attack").addEventListener("click",this.playerDealDamage.bind(this),false);
}

Battle.prototype = {
	init:function() {
		map.elements.displayEnemy(this.foe);
	},
	playerDealDamage:function() {
		var randDmg = Math.floor(Math.random()*(map.player.max-map.player.min+1))+map.player.min;
		var txt = "- You strike the "+this.foe.name+" with your "+map.player.equipName+" for "+randDmg+" dmg!";
		this.foe.hp = parseInt(this.foe.hp) - parseInt(randDmg);
		map.elements.displayEnemy(this.foe);
		map.elements.battleEvents(txt);
		if (this.foe.hp <= 0) {
			this.foe.hp = 0;
			this.battleOver();
		}
	},
	battleOver : function() {
		map.elements.clearModal();
	}
}