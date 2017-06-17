function calendarAbsolute(){
	calendar.style("max-width",null);

	calendar.style("position","absolute")
	.style("top",document.body.scrollTop)
	.style("left","0px");
}

function calLeftPosition(){
	d3.select("#calendar")
	  .style("left",window.innerWidth/2-(getSVGWidth()/2));
}

function getSVGWidth(){
	return document.getElementById('calendar').getBoundingClientRect().width;
}

function getSVGHeight(){
	return document.getElementById('calendar').getBoundingClientRect().height;
}

function action1on(){
	calendar.style("position","fixed")
			.style("top","0px");

	calLeftPosition();

	d3.select("#para5")
		.transition()
		.ease(d3.easeLinear)
		.duration(150)
		.style("border-left-width","4px")
		.style("padding-left","25px")

	const type = d3.annotationCalloutRect;
	const annotations = [{
		x: 35,
		y: 26,
		subject: {
		width: 30,
		height: 15
		}
	}]
	makeAnnotations = d3.annotation().type(type).annotations(annotations);

	calendar
  		.append("g")
  		.attr("class", "annotation-group")
  		.call(makeAnnotations);

  	var t = d3.transition().duration(500).ease(d3.easeQuadInOut);
  	var i=0;

  	d3.selectAll(".annotation.callout.rect")
    	.transition(t)
    	.delay(1000)
    	.on("start",repeat);
    			
    function repeat() {
    	i+=1;
    	if(i>=317){
    		i=0;
    	}
    	xPos = ((30*i)%360)+35;
    	yPos = (15*Math.floor(i/12))+26;
        d3.active(this)
            .attr("transform","translate("+xPos+","+yPos+")")
            .transition(t)
            .delay(1000)
            .on("start", repeat);
	}
}

function action1off(){
	d3.selectAll(".annotation.callout.rect").transition();
	d3.select(".annotation-group").remove();

	d3.select("#para5")
	.transition()
	.ease(d3.easeLinear)
	.duration(150)
	.style("border-left-width","0px")
	.style("padding-left","21px");
}

function action2on(){
	d3.select("#para6")
		.transition()
		.ease(d3.easeLinear)
		.duration(150)
		.style("border-left-width","4px")
		.style("padding-left","25px");

	d3.selectAll(".prov")
		.transition()
		.duration(500)
		.style("fill-opacity",0);

}

function action2off(){
	d3.select("#para6")
	.transition()
	.ease(d3.easeLinear)
	.duration(150)
	.style("border-left-width","0px")
	.style("padding-left","21px");

	d3.selectAll(".prov")
		.transition()
		.duration(500)
		.style("fill-opacity",1);
}

function action3on(){
	d3.select("#para7")
		.transition()
		.ease(d3.easeLinear)
		.duration(150)
		.style("border-left-width","4px")
		.style("padding-left","25px");

	d3.selectAll(".nego")
		.transition()
		.duration(500)
		.style("fill-opacity",0);
}

function action3off(){
	d3.select("#para7")
	.transition()
	.ease(d3.easeLinear)
	.duration(150)
	.style("border-left-width","0px")
	.style("padding-left","21px");

	d3.selectAll(".nego")
		.transition()
		.duration(500)
		.style("fill-opacity",1);
}

