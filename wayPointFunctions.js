var waypointAction5;
function makeWaypoint5(){
	waypointAction5 = new Waypoint({
	    element: document.getElementById('hwbush'),
	    handler: function(direction){
	    	if(direction==="down"){
	    		d3.select("#hwbush")
	    			.style("position","fixed")
	    			.style("top",document.getElementById('hwbush').getBoundingClientRect().top-document.body.scrollTop);

	    		d3.select("#ilsung")
	    			.style("position","fixed")
	    			.style("top",document.getElementById('ilsung').getBoundingClientRect().top-document.body.scrollTop);
	    		placeImages();
	    	}
	    	else{
	    		d3.select("#hwbush")
	    			.style("position","absolute")
	    			.style("top",null);
	    		d3.select("#ilsung")
	    			.style("position","absolute")
	    			.style("top",null);
	    		placeImages();
	    	}
	    },
	    offset: getCalendarShortHeight()
	});
}

