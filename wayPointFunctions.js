function opacityWaypoint(theOffset){

	var elements = document.getElementsByClassName("textpara");
	
	Array.prototype.filter.call(elements, function(testElement,i){
	    
	    new Waypoint({
			element: testElement,
			handler: function(direction) {

				if(i!==0){
					if(direction==="down"){
						d3.select(testElement)
						.transition()
						.duration(400)
						.ease(d3.easeQuadInOut)
						.style("opacity","1");

						d3.select(elements[i-1])
						.transition()
						.duration(400)
						.ease(d3.easeQuadInOut)
						.style("opacity","0.3");
					}
					else{
						d3.select(testElement)
						.transition()
						.duration(400)
						.ease(d3.easeQuadInOut)
						.style("opacity","0.3");

						d3.select(elements[i-1])
						.transition()
						.duration(400)
						.ease(d3.easeQuadInOut)
						.style("opacity","1");
					}
				}
				else{
					if(direction==="down"){
						d3.select(testElement)
						.transition()
						.duration(400)
						.ease(d3.easeQuadInOut)
						.style("opacity","1");
					}
					else{
						d3.select(testElement)
						.transition()
						.duration(400)
						.ease(d3.easeQuadInOut)
						.style("opacity","0.3");
					}
				}



				
			},
			offset: theOffset
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
				//action1off();
				action2on();
			}
			else{
				//action1on();
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
    			action5on();
	    	}
	    	else{
	    		displayAll();
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
	    		action5on();
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

function makeWaypoint9(){
	waypointAction9 = new Waypoint({
	    element: document.getElementById('para9'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action9on();
	    	}
	    	else{
	    		action8on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function makeWaypoint10(){
	waypointAction10 = new Waypoint({
	    element: document.getElementById('para10'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action10on();
	    	}
	    	else{
	    		action9on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function makeWaypoint11(){
	waypointAction11 = new Waypoint({
	    element: document.getElementById('para11'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			action11on();
	    	}
	    	else{
	    		action10on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function makeWaypoint12(){
	waypointAction12 = new Waypoint({
	    element: document.getElementById('para12'),
	    handler: function(direction) {
	    	if(direction==="down"){
    			displayAll();
	    	}
	    	else{
	    		action11on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}