var calendarShortHeight = getCalendarShortHeight();
var waypointAction5;

function makeWaypoint5(){
	waypointAction5 = new Waypoint({
	    element: document.getElementById('hwbush'),
	    handler: function(direction){
	    	if(direction==="down"){
	    		d3.select("#hwbush")
	    			.style("position","fixed")
	    			.style("top",calendarShortHeight)
	    			.call(placeRightImage,this);

	    		d3.select("#ilsung")
	    			.style("position","fixed")
	    			.style("top",calendarShortHeight)
	    			.call(placeLeftImage,this);
	    	}
	    	else{
	    		d3.select("#hwbush")
	    			.style("position","absolute")
	    			.style("top",null)
	    			.call(placeRightImage,this);
	    		d3.select("#ilsung")
	    			.style("position","absolute")
	    			.style("top",null)
	    			.call(placeLeftImage,this);
	    	}
	    },
	    offset: calendarShortHeight
	});
}

