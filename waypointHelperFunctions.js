function placeImages(){

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
		x: 52.5,
		y: 40,
		subject: {
		width: 30,
		height: 15
		}
	}]
	makeAnnotations = d3.annotation().type(type).annotations(annotations);

	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);
  	var i=0;


    d3.select("#calendar")
  		.append("g")
  		.attr("class", "annotation-group")
  		.call(makeAnnotations);

  	d3.selectAll(".annotation.callout.rect")
    	.transition(g)
    	.delay(1000)
    	.on("start",repeat);
    				
    function repeat() {
    	i+=1;
    	if(i>=317){
    		i=0;
    	}
    	xPos = ((30*i)%360)+52.5;
    	yPos = (15*Math.floor(i/12))+40;
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
	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".prov")
		.transition(g)
		.style("fill-opacity",0);

	d3.selectAll(".nego")
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);

}

function action2off(){
	d3.selectAll(".prov")
		.transition()
		.duration(500)
		.style("fill-opacity",1);
}

function action3on(){
	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".prov")
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);	

	d3.selectAll(".nego")
		.transition()
		.duration(500)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});
}



function action3off(){
	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);
	//		.filter(function(d){return d.Year>=1990&&d.Year<=1992})
	d3.selectAll(".nego")
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);

//.filter(function(d){return d.Year>1992})
	d3.selectAll(".prov")	
		.transition(g)
		.style("fill-opacity",1);
}

function action4on(){
	const type = d3.annotationCalloutCircle

	var xScale =  d3.scaleBand()
	.domain(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
	.range([0, 360]);

	var yScale =  d3.scaleLinear()
	.domain([1990,2017])
	.range([0, 405]);

	const annotations = [{
	data:{
		month: "Oct", year: 1994
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Dec", year: 1995
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Dec", year: 1997
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Aug", year: 1999
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Oct", year: 2002
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Nov", year: 2002
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Jan", year: 2003
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Aug", year: 2003
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Sep", year: 2005
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Nov", year: 2005
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Feb", year: 2007
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Dec", year: 2008
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	},
	{
	data:{
		month: "Feb", year: 2012
	},
	  subject: {
	radius: 14,
	radiusPadding: 0,
	 }
	}
	]

	const makeAnnotations = d3.annotation()
	  .editMode(false)
	  .disable(["connector","note"])
	  .type(type)
	   .accessors({
    x: d => xScale(d.month)+60,
    y: d => yScale(d.year)+47.5
  })
	  .annotations(annotations)

	d3.select("svg")
	  .append("g")
	  .attr("class", "keyevents")
	  .call(makeAnnotations)
}

function action4off(){
	d3.selectAll(".keyevents").remove();
}

function action5on(){
	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".nego")
		.filter(function(d){return d.Year<1990||d.Year>1992})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

//.filter(function(d){return d.Year>1992})
	d3.selectAll(".prov")
		.filter(function(d){return d.Year<1990||d.Year>1992})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});
}

function action5off(){
	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".nego")
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);

//.filter(function(d){return d.Year>1992})
	d3.selectAll(".prov")
		.style("display",null)	
		.transition(g)
		.style("fill-opacity",1);
}

function action6on(){

	d3.selectAll(".keyevents").remove();

	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".nego")
		.filter(function(d){return d.Year<1992||d.Year>1994})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".nego")
		.filter(function(d){return d.Year>=1992&&d.Year<=1994})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);

//.filter(function(d){return d.Year>1992})
	d3.selectAll(".prov")
		.filter(function(d){return d.Year<1992||d.Year>1994})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".prov")
		.filter(function(d){return d.Year>=1992&&d.Year<=1994})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);
}

function action6off(){
	d3.selectAll(".keyevents").remove();

	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".nego")
		.filter(function(d){return d.Year<1990||d.Year>1992})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".nego")
		.filter(function(d){return d.Year>=1990&&d.Year<=1992})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);

//.filter(function(d){return d.Year>1992})
	d3.selectAll(".prov")
		.filter(function(d){return d.Year<1990||d.Year>1992})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".prov")
		.filter(function(d){return d.Year>=1990&&d.Year<=1992})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);
}

function action7on(){
	d3.selectAll(".keyevents").remove();

	const type = d3.annotationCustomType(
  d3.annotationCalloutCircle, 
  {"className":"custom",
    "connector":{"type":"elbow"},
    "note":{"lineType":"horizontal"}})

	const annotations = [{
	note: {
    title: "Geneva Agreed Framework Signed"
  },
  dx:-120,
  dy:-15,
	data:{
		month: "Oct", year: 1994
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},
	{
	note: {
    title: "KEDO Light Water Reactor Agreement Signed"
  },
  dx:-15,
  dy:-38,
	data:{
		month: "Dec", year: 1995
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	}]

	const annotations2 = [{
	note: {
    title: "Four Party Talks collapse"
  },
  dx:-20,
  dy:150,
	data:{
		month: "Aug", year: 1999
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},
	{
	note: {
    title: "Four Party Talks begin"
  },
  dx:-15,
  dy:90,
	data:{
		month: "Dec", year: 1997
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	}]

	var xScale =  d3.scaleBand()
	.domain(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
	.range([0, 360]);

	var yScale =  d3.scaleLinear()
	.domain([1990,2017])
	.range([0, 405]);

	const makeAnnotations = d3.annotation()
	  .editMode(false)
	  .type(type)
	   .accessors({
    x: d => xScale(d.month)+60,
    y: d => yScale(d.year)+47.5
  }).notePadding(-4).textWrap(168).annotations(annotations)

const makeAnnotations2 = d3.annotation()
	  .editMode(false)
	  .type(type)
	   .accessors({
    x: d => xScale(d.month)+60,
    y: d => yScale(d.year)+47.5
  }).notePadding(4).textWrap(168).annotations(annotations2)

	d3.select("svg")
	  .append("g")
	  .attr("class", "keyevents")
	  .call(makeAnnotations)

	d3.select("svg")
	  .append("g")
	  .attr("class", "keyevents")
	  .call(makeAnnotations2)


	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".nego")
		.filter(function(d){return d.Year<1994||d.Year>=2001})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".nego")
		.filter(function(d){return d.Year>=1994&&d.Year<2001})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);

//.filter(function(d){return d.Year>1992})
	d3.selectAll(".prov")
		.filter(function(d){return d.Year<1994||d.Year>=2001})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".prov")
		.filter(function(d){return d.Year>=1994&&d.Year<2001})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);
}

function action8on(){
	d3.selectAll(".keyevents").remove();

	const type = d3.annotationCustomType(
  d3.annotationCalloutCircle, 
  {"className":"custom",
    "connector":{"type":"elbow"},
    "note":{"lineType":"horizontal"}})

	const annotations = [{
	note: {
    title: "North Korea admits HEU program"
  },
  dx:-15,
  dy:-65,
	data:{
		month: "Oct", year: 2002
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},
	{
	note: {
    title: "Six Party Talks Begin"
  },
  dx:-15,
  dy:-50,
	data:{
		month: "Aug", year: 2003
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},
	{
	note: {
    title: "KEDO heavy fuel oil shipments suspended"
  },
  dx:-15,
  dy:-140,
	data:{
		month: "Nov", year: 2002
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},
	{
	note: {
    title: "North Korea announces withdrawal from NPT"
  },
  dx:15,
  dy:-115,
	data:{
		month: "Jan", year: 2003
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	}];

	const annotations2 = [{
	note: {
    title: "Six Party Talks Joint Statement Implementation"
  },
  nx:15,
  ny:32,
	data:{
		month: "Feb", year: 2007
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},{
	note: {
    title: "Six Party Talks collapse"
  },
  nx:-1,
  ny:110,
	data:{
		month: "Dec", year: 2008
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},
	{
	note: {
    title: "Six Party Talks Joint Statement"
  },
  dx:-15,
  dy:100,
	data:{
		month: "Sep", year: 2005
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	},
	{
	note: {
    title: "KEDO Project Terminated"
  },
  dx:-1,
  dy:125,
	data:{
		month: "Nov", year: 2005
	},
	  subject: {
	radius: 14,
	radiusPadding: 1,
	 }
	}];

	var xScale =  d3.scaleBand()
	.domain(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
	.range([0, 360]);

	var yScale =  d3.scaleLinear()
	.domain([1990,2017])
	.range([0, 405]);

	const makeAnnotations = d3.annotation()
	  .editMode(false)
	  .type(type)
	   .accessors({
    x: d => xScale(d.month)+60,
    y: d => yScale(d.year)+47.5
  }).notePadding(-2).textWrap(168).annotations(annotations)

	const makeAnnotations2 = d3.annotation()
	  .editMode(false)
	  .type(type)
	   .accessors({
    x: d => xScale(d.month)+60,
    y: d => yScale(d.year)+47.5
  }).notePadding(2).textWrap(168).annotations(annotations2)

/*
const makeAnnotations2 = d3.annotation()
	  .editMode(false)
	  .type(type2)
	   .accessors({
    x: d => xScale(d.month)+60,
    y: d => yScale(d.year)+47.5
  }).notePadding(4).textWrap(168).annotations(annotations2)*/

	d3.select("svg")
	  .append("g")
	  .attr("class", "keyevents")
	  .call(makeAnnotations)

	d3.select("svg")
	  .append("g")
	  .attr("class", "keyevents")
	  .call(makeAnnotations2)


	var g = d3.transition().duration(500).ease(d3.easeQuadInOut);

	d3.selectAll(".nego")
		.filter(function(d){return d.Year<2001||d.Year>2008})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".nego")
		.filter(function(d){return d.Year>=2001&&d.Year<=2008})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);

//.filter(function(d){return d.Year>1992})
	d3.selectAll(".prov")
		.filter(function(d){return d.Year<2001||d.Year>2008})
		.transition(g)
		.style("fill-opacity",0)
		.on("end", function(){d3.select(this).style("display","none")});

	d3.selectAll(".prov")
		.filter(function(d){return d.Year>=2001&&d.Year<=2008})
		.style("display",null)
		.transition(g)
		.style("fill-opacity",1);
}
