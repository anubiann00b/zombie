function Battle(eid) {
	this.foe = map.enemy.spawn(eid);
	document.getElementById("attack").addEventListener("click",
		this.playerDealDamage.bind(this,1,
			"- You strike the "+this.foe.name+" with your "+map.player.equipName+" for "+map.player.min+" dmg!"),
		false);
}

Battle.prototype = {
	init:function() {
		map.elements.displayEnemy(this.foe);
	},
	playerDealDamage:function(dmg,txt) {
		this.foe.hp = parseInt(this.foe.hp) - parseInt(dmg);
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