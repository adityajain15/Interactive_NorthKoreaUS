var calendarShortHeight = getCalendarShortHeight();
var waypointAction1;
var waypointAction2;
var waypointAction3;
var waypointAction4;
var waypointAction5;
var waypointAction6;
var waypointAction7;

function makeWaypoint1(){
waypointAction1 = new Waypoint({
		element: document.getElementById('calendar'),
		handler: function(direction) {
			if(direction==="down"){
				action1on();
			}
			else{
				calendar.style("position","absolute")
						.style("top",document.getElementById('calendar').getBoundingClientRect.top)
				calLeftPosition();
				action1off();
				turnCalShadowOff();
			}
		}
	});
}
function makeWaypoint2(){
waypointAction2 = new Waypoint({
		element: document.getElementById('para5'),
		handler: function(direction) {
			if(direction==="down"){
				action1off();
				action2on();
			}
			else{
				action1on();
				action2off();
			}
		},
		offset: document.getElementById('calendar').clientHeight-document.getElementById('para5').clientHeight
	});
}
function makeWaypoint3(){
	waypointAction3 = new Waypoint({
		element: document.getElementById('para6'),
		handler: function(direction) {
			if(direction==="down"){
				action2off();
				action3on();
			}
			else{
				action3off();
				action2on();
			}
		},
		offset: document.getElementById('calendar').clientHeight-document.getElementById('para6').clientHeight
	});
}
function makeWaypoint4(){
	waypointAction4 = new Waypoint({
	    element: document.getElementById('section2'),
	    handler: function(direction) {
	    	var t = d3.transition()
    		.duration(1000)
    		.ease(d3.easeQuadInOut);

	    	if(direction==="down"){
	    		d3.select("#calendar")
	    		.transition(t)
    			.attr("viewBox","0 0 395 100");
    			action3off();
	    	}
	    	else{
	    		d3.select("#calendar")
	    		.transition(t)
    			.attr("viewBox","0 0 395 445");
    			action3on();
	    	}
	    },
	    offset: document.getElementById('calendar').clientHeight-document.getElementById('section2').clientHeight
	});
}
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