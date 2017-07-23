function placeImages(){
	var textWrapperPadding = d3.select("#textWrapper").style("padding-left");
	d3.selectAll(".image").select(function(){
		d3.select(this).style("height",0.85*parseFloat(textWrapperPadding));
		d3.select(this).style("width",0.85*parseFloat(textWrapperPadding));
	});
	d3.selectAll(".rightImage").select(function(){
		d3.select(this).style("right",0);
	});
	d3.selectAll(".leftImage").select(function(){
		d3.select(this).style("left",0);
	});
}

function action1on(){
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

	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);
  	var i=0;

	d3.select("#calendar")
	    .transition(d3.transition().duration(0).ease(d3.easeQuadInOut))
    	.attr("viewBox","0 0 395 445")
    	.on("end",function(){
    		d3.select("#calendar")
  				.append("g")
  				.attr("class", "annotation-group")
  				.call(makeAnnotations);

  			d3.selectAll(".annotation.callout.rect")
    			.transition(g)
    			.delay(1000)
    			.on("start",repeat);
    	});

	
    			
    function repeat() {
    	i+=1;
    	if(i>=317){
    		i=0;
    	}
    	xPos = ((30*i)%360)+35;
    	yPos = (15*Math.floor(i/12))+26;
        d3.active(this)
            .attr("transform","translate("+xPos+","+yPos+")")
            .transition(g)
            .delay(1000)
            .on("start", repeat);
	}
}

function action1off(){
	d3.selectAll(".annotation.callout.rect").transition();
	d3.select(".annotation-group").remove();

}

function action2on(){
	d3.selectAll(".prov")
		.transition()
		.duration(500)
		.style("fill-opacity",0);
}

function action2off(){
	d3.selectAll(".prov")
		.transition()
		.duration(500)
		.style("fill-opacity",1);
}

function action3on(){
	d3.selectAll(".nego")
		.transition()
		.duration(500)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});
}

function action3off(){
	d3.selectAll(".nego")
		.style("display",null)
		.transition()
		.duration(500)
		.style("fill-opacity",1);
}

