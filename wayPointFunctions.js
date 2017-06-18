var waypointAction5;
function makeWaypoint5(){
	waypointAction5 = new Waypoint({
	    element: document.getElementById('hwbush'),
	    handler: function(direction){
	    	if(direction==="down"){
	    		d3.select("#hwbush")
	    			.style("position","fixed")
	    			.style("top",document.getElementById('hwbush').getBoundingClientRect().top-document.body.scrollTop)
	    			.style("right",document.getElementById('hwbush').getBoundingClientRect().right)
	    		d3.select("#ilsung")
	    			.style("position","fixed")
	    			.style("top",document.getElementById('ilsung').getBoundingClientRect().top-document.body.scrollTop)
	    			.style("left",document.getElementById('ilsung').getBoundingClientRect().left)
	    	}
	    },
	    offset: document.getElementById('calendar').clientHeight
	});
}

