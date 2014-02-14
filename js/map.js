function Map() {
	this.x;
	this.y;
	this.prev_x;
	this.prev_y;
	this.elements = new Elements();
	this.player = new Player();
}

Map.prototype = {
	move:function(cell) {
		//get data attribute for xy location
		var new_x = cell.getAttribute("data-x") - 1;
		var new_y = cell.getAttribute("data-y") - 1;
		//render new map
		this.render(new_x, new_y);
		//actions? to-do :fix me
		this.cellAction();
	},
	render:function(p_x,p_y) {
		this.elements.health();
		//grab tile location to track previous location
		this.prev_y = this.y;
		this.prev_x = this.x;
		//check for map boundaries
		//set new map coordiantes
		this.x = p_x+1;
		this.y = p_y+1;
		//display new coordinates
		this.elements.setXY(this.x,this.y);
		var max_divs = 2;

		//borders
		if(!p_x) p_x = 1;
	    if(!p_y) p_y = 1;
	    if(p_x >= 100) p_x--;
	    if(p_y >= 100) p_y--;

	    //max divs for loop
	    divs_x = max_divs + p_x;
	    divs_y = max_divs + p_y;
	    //create new table
	    var root = document.createElement("table");
	    root.id = 'root_table';
	    //loop coordinates and generate surrounding cells
	    for (var x = p_x; x <= divs_x; x++) {
	        var row = document.createElement("tr");
	        for (var y = p_y; y <= divs_y; y++) {
	            var cell = document.createElement("td");
	            if (x <= 0 || y <= 0 || x >= 101 || y >= 101) {
	                cell.textContent = "";
	            }
	            else {
	            	//set data attribute
	                cell.setAttribute("data-x",x);
	                cell.setAttribute("data-y",y);

	                //add event handler for the click event (move)
	                cell.addEventListener("click", this.move.bind(this,cell), false);
	                cell.className = 'map';
	            }
	            //add cell to row
	            row.appendChild(cell);
	        }
	        //add row to table
	        root.appendChild(row);
	    }
	    //grab table
	    var main = document.getElementById("container");
	    var old_table = document.getElementById('root_table')
	    if(old_table) main.removeChild(old_table); 
	    //remove old table, add new one
	    main.appendChild(root);
	},
	cellAction:function() {
		this.elements.eventMsg("You have moved to ("+this.x+","+this.y+")");
		this.player.hp--;
		if (this.player.hp <= 0) this.player.hp = 0;
		this.elements.hpBar();
		this.elements.health();
		var msg = " ";
		this.elements.updateCell(this.x,this.y,msg);
		//if you clicked on the same tile, no action should occur
		if (this.x ==  this.prev_x && this.y == this.prev_y) {
			return;
		}
		//fix me
		//these are not real actions
		//action should look like msg = this.actions.trigger();
		//trigger should return a cell message and "trigger" a modal popup for actions
		if ((Math.random() < .3)) msg = "ZOMBIE!!!";
		else if ((Math.random() > .8)) msg = "You found a gun!";
		else msg = "Nothing here...";

		//map actions should be in their own proto object "Actions"
		this.elements.updateCell(this.x,this.y,msg);
	}
}

//render dat map
var map = new Map();
map.render(0,0);