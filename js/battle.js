function Battle(eid) {
	this.foe = map.enemy.spawn(eid);
	var atk = document.getElementById("attack");
	atk.addEventListener("click",this.playerDealDamage.bind(this),false);
	atk.addEventListener("click",this.enemyDealDamage.bind(this),false);
}

Battle.prototype = {
	init:function() {
		map.elements.displayHP(this.foe);
	},
	playerDealDamage:function() {
		var randDmg = Math.floor(Math.random()*(map.player.max-map.player.min+1))+map.player.min;
		var txt = "- You strike the "+this.foe.name+" with your "+map.player.equipName+" for "+randDmg+" damage!";
		this.foe.hp = parseInt(this.foe.hp) - parseInt(randDmg);
		map.elements.displayHP(this.foe);
		map.elements.battleEvent(txt);
		if (this.foe.hp <= 0) {
			this.foe.hp = 0;
			map.elements.displayHP(this.foe);
			this.battleOverWin();
		}
	},
	enemyDealDamage:function() {
		var randDmg = Math.floor(Math.random()*(this.foe.max-this.foe.min+1))+this.foe.min;
		var txt = "- The "+this.foe.name+" "+this.foe.attack+" you with its "+this.foe.weapon+" for "+randDmg+" damage!";
		map.player.hp = parseInt(map.player.hp) - parseInt(randDmg);
		map.elements.displayHP(this.foe);
		map.elements.battleEvent(txt);
		if (map.player.hp <= 0) {
			map.player.hp = 0;
			map.elements.displayHP(this.foe);
			this.battleOverLose();
		}
	},
	battleOverWin : function() {
		map.elements.disableActions();
		map.elements.battleEvent("- You have defeated the "+this.foe.name+"!");
		map.elements.eventMsg("- You bested a "+this.foe.name+" in battle!");
		setTimeout(map.elements.clearModal.bind(map.elements),2500);
		map.elements.updateHP();
	},
	battleOverLose : function() {
		map.elements.disableActions();
		map.elements.eventMsg("- Your blood soaks the earth as the "+this.foe.name+" devours your lifeless corpse...");
		setTimeout(map.elements.clearModal.bind(map.elements),2500);
		map.elements.updateHP();
	}
}