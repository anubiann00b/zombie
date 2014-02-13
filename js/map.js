function Map() {
	this.x;
	this.y;
	this.prev_x;
	this.prev_y;
}

Map.prototype = {
	move:function() {
		//get data attribute for xy location
		var new_x = this.getAttribute("data-x") - 1;
		var new_y = this.getAttribute("data-y") - 1;
		//render new map
		Map.prototype.render(new_x, new_y);
		//actions? to-do :fix me
		Map.prototype.randomAction();
	},
	render:function(p_x,p_y) {
		//grab tile location to track previous location
		this.prev_y = this.y;
		this.prev_x = this.x;
		//check for map boundaries
		//set new map coordiantes
		this.x = p_x+1;
		this.y = p_y+1;
		//display new coordinates
		//fix me
		//element handling should be separate from the map engine
		document.getElementById("location").textContent = "("+this.x+","+this.y+")"; 
		var max_divs = 2;

		//borders
		if(!p_x) p_x = 1;
	    if(!p_y) p_y = 1;
	    if(p_x >= 100) p_x--;
	    if(p_y >= 100) p_y--;

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
	                cell.addEventListener("click", this.move, false);
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
	randomAction:function(x,y) {
		//map actions should be in their own proto object "Actions"
		var derp = document.querySelector("td[data-x='"+this.x+"'][data-y='"+this.y+"']");
		derp.style.backgroundColor = "red";
		if (this.x ==  this.prev_x && this.y == this.prev_y) return;
		if ((Math.random() < .3)) derp.textContent = "ZOMBIE!!!";
		else if ((Math.random() > .8)) derp.textContent = "You found a gun!";
		else derp.textContent = "Nothing here...";
	}
}

//render dat map
var map = new Map();
map.render(0,0);