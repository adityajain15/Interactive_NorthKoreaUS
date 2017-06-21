var calendarShortHeight = getCalendarShortHeight();
var waypointAction5;
var waypointAction6;
var waypointAction7;

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

function makeWaypoint6(){
	waypointAction6 = new Waypoint({
		element: document.getElementById('para9'),
	    handler: function(direction) {
	    	if(direction==="down"){
	    		d3.select("#hwbush")
	    		.style("top",document.getElementById('para9').offsetTop+document.getElementById('para9').clientHeight-document.getElementById('hwbush').clientHeight)
	    		.style("position","absolute")
	    		.call(placeRightImage,this);
	    	}
	    	else{
	    		d3.select("#hwbush")
	    		.style("position","fixed")
	    		.style("top",calendarShortHeight)
	    		.call(placeRightImage,this);
	    	}

	    },
	    offset: calendarShortHeight+document.getElementById('hwbush').clientHeight-document.getElementById('para9').clientHeight
	});
}

function makeWaypoint7(){
	waypointAction7 = new Waypoint({
		element: document.getElementById('clinton'),
	    handler: function(direction) {
	    	if(direction==="down"){
	    		d3.select("#clinton")
	    		.style("top",calendarShortHeight)
	    		.style("position","fixed")
	    		.call(placeRightImage,this);
	    	}
	    	else{
	    		d3.select("#clinton")
	    		.style("position","absolute")
	    		.style("top",document.getElementById('para10').offsetTop)
	    		.call(placeRightImage,this);
	    	}

	    },
	    offset: calendarShortHeight
	});
}