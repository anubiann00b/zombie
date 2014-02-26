function Battle(eid) {
	this.foe = map.enemy.spawn(eid);
	var atk = document.getElementById("attack");
	//bind all the events!
	atk.addEventListener("click",this.playerDealDamage.bind(this),false);
	atk.addEventListener("click",this.enemyDealDamage.bind(this),false);
	atk.addEventListener("mousedown",map.elements.blink.bind(this,atk,"red"),false);
	atk.addEventListener("mouseup",map.elements.unblink.bind(this,atk,"white"),false);

	var run = document.getElementById("run");
	run.addEventListener("mousedown",map.elements.blink.bind(this,run,"red"),false);
	run.addEventListener("mouseup",map.elements.unblink.bind(this,run,"white"),false);
}

Battle.prototype = {
	init:function() {
		map.elements.displayHP(this.foe);
	},
	giveGold : function(num) {
		if (num) var gold = num;
		else var gold = Math.floor(Math.random()*(this.foe.goldMax-this.foe.goldMax+1))+this.foe.goldMin;
		map.elements.eventMsg("You have found "+gold+" gold on the "+this.foe.name);
		map.player.gold += gold;
		map.elements.updateGold();
	},
	playerDealDamage:function() {
		//random damage
		var randDmg = Math.floor(Math.random()*(map.player.max-map.player.min+1))+map.player.min;
		//battle text
		var txt = "- You strike the "+this.foe.name+" with your "+map.player.equipName+" for "+randDmg+" damage!";
		//deal that damage
		this.foe.hp = parseInt(this.foe.hp) - parseInt(randDmg);
		map.elements.displayHP(this.foe);
		map.elements.battleEvent(txt);
		//trigger death if dead
		if (this.foe.hp <= 0) {
			this.foe.hp = 0;
			this.giveGold();
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
		//disable actions to prevent modal bug
		map.elements.disableActions();
		//set event log and battle log msg
		map.elements.battleEvent("- You have defeated the "+this.foe.name+"!");
		map.elements.eventMsg("You bested a "+this.foe.name+" in battle!");
		//auto trigger modal after battle end
		setTimeout(map.elements.clearModal.bind(map.elements),2000);
		map.player.alterHP(100);//remove me -- heal after each battle for testing
		console.log(map.player.hp);
		//update dat HP
		//map.elements.updateHP();
	},
	battleOverLose : function() {
		map.elements.disableActions();
		map.elements.eventMsg("Your blood soaks the earth as the "+this.foe.name+" devours your lifeless corpse...");
		setTimeout(map.elements.clearModal.bind(map.elements),2000);
		map.elements.updateHP();
	}
}