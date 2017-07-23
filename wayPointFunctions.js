var waypointAction1;
var waypointAction2;
var waypointAction3;
var waypointAction4;
var waypointAction5;
var waypointAction6;
var waypointAction7;

function makeOpacityWaypoints(){
	var elements = document.getElementsByClassName("textpara");
	Array.prototype.filter.call(elements, function(testElement){
	    new Waypoint({
			element: testElement,
			handler: function(direction) {
				if(direction==="down")
				{
					d3.select(testElement)
					.transition()
					.ease(d3.easeLinear)
					.duration(150)
					.style("opacity","0.3");
				}
				else{
					d3.select(testElement)
					.transition()
					.ease(d3.easeLinear)
					.duration(150)
					.style("opacity","1");
				}
	
			},
			offset: (window.innerHeight/2)-testElement.clientHeight
		});
	});

	Array.prototype.filter.call(elements, function(testElement){
	    new Waypoint({
			element: testElement,
			handler: function(direction) {
				if(direction==="down"){
					d3.select(testElement)
					.transition()
					.ease(d3.easeLinear)
					.duration(150)
					.style("opacity","1");
				}
				else{
					d3.select(testElement)
					.transition()
					.ease(d3.easeLinear)
					.duration(150)
					.style("opacity","0.3");
				}
			},
			offset: (window.innerHeight/2)
		});
	});

}

function makeWaypoint1(){
waypointAction1 = new Waypoint({
		element: document.getElementById('para1'),
		handler: function(direction) {
			if(direction==="down"){
				action1on();
			}
			else{
				action1off();
			}
		},
		offset: window.innerHeight/2
	});
}

function makeWaypoint2(){
waypointAction2 = new Waypoint({
		element: document.getElementById('para2'),
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
		offset: window.innerHeight/2
	});
}

function makeWaypoint3(){
	waypointAction3 = new Waypoint({
		element: document.getElementById('para3'),
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
		offset: window.innerHeight/2
	});
}

function makeWaypoint4(){
	waypointAction4 = new Waypoint({
	    element: document.getElementById('para4'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action3off();
    			console.log("chutiya");
	    	}
	    	else{
    			action3on();
	    	}
	    },
	    offset: window.innerHeight/2
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