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
	    	}
	    	else{
    			action3on();
	    	}
	    },
	    offset: window.innerHeight/2
	});
}

function imageWaypoints(){
	var something = new Waypoint({
		element: document.getElementById('bush41'),
		handler: function(direction) {
			if(direction==="down")
			{
				d3.select("#bush41")
				.style("position","fixed")
				.style("top",document.getElementById('calendar').getBoundingClientRect().top)
				.style("right",window.innerWidth-document.getElementById('contentWrapper').getBoundingClientRect().right);
				
			}
			else{
				d3.select("#bush41")
				.style("position","absolute")
				.style("top",null)
				.style("right",0);
			}
		},
		offset: document.getElementById('calendar').style.top
	});
}

function imageWaypoints2(){
	var glug = new Waypoint({
		element: document.getElementById('kor1'),
		handler: function(direction) {
			if(direction==="down")
			{
				d3.select("#kor1")
				.style("position","fixed")
				.style("top",document.getElementById('calendar').getBoundingClientRect().top)
				.style("left",document.getElementById('textWrapper').getBoundingClientRect().left);
				
			}
			else{
				d3.select("#kor1")
				.style("position","absolute")
				.style("top",null)
				.style("left",0);
			}
		},
		offset: document.getElementById('calendar').style.top
	});
}

function imageWaypoints3(){
	var bug = new Waypoint({
		element: document.getElementById('para4'),
		handler: function(direction) {
			if(direction==="down")
			{
				d3.select("#bush41")
				.style("position","absolute")
				.style("top",-document.getElementById('para4').clientHeight+parseFloat(document.getElementById('calendar').style.top)+document.getElementById('bush41').clientHeight)
				.style("left",0);
				
			}
			else{
				d3.select("#bush41")
				.style("position","fixed")
				.style("top",document.getElementById('para4').getBoundingClientRect().clientHeight)
				.style("left",document.getElementById('textWrapper').getBoundingClientRect().left);
			}
		},
		offset: -document.getElementById('para4').clientHeight+parseFloat(document.getElementById('calendar').style.top)+document.getElementById('bush41').clientHeight
	});
}



