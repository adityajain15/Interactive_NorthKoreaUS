function opacityWaypoint(){
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
    			action4on();
	    	}
	    	else{
	    		action4off();
    			action3on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function makeWaypoint5(){
	waypointAction5 = new Waypoint({
	    element: document.getElementById('para5'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action4off();
    			action5on();
	    	}
	    	else{
	    		action5off();
	    		action4on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function makeWaypoint6(){
	waypointAction6 = new Waypoint({
	    element: document.getElementById('para6'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action6on();
	    	}
	    	else{
	    		action6off();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function makeWaypoint7(){
	waypointAction7 = new Waypoint({
	    element: document.getElementById('para7'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action7on();
	    	}
	    	else{
	    		action6on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function makeWaypoint8(){
	waypointAction8 = new Waypoint({
	    element: document.getElementById('para8'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action8on();
	    	}
	    	else{
	    		action7on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}