

var q = d3.queue()
    .defer(d3.csv, "USKoreaData.csv")
    .defer(d3.csv, "Negotiations.csv")
    .defer(d3.csv, "Provocations.csv")
    .awaitAll(makeStuff);

var calendar = d3.select("#calendar");

var makeAnnotations;
var negoData;
function makeStuff(error,data){
	console.log(error);
	console.log(data);

	var theData = data[0];
	var negoData = data[1];
	var provData = data[2];

	var NegoMax = 0;
	var ProvMax = 0;
	
	for(var i=0;i<theData.length;i++){
		if(theData[i].Nego>NegoMax){
			NegoMax=theData[i].Nego;
		}
		if(theData[i].Prov>ProvMax){
			ProvMax=theData[i].Prov;
		}
	}
	
	var provColor = d3.scaleQuantize()
	.domain([0,ProvMax])
	.range(["#fee5d9","#fcae91","#fb6a4a","#cb181d"]);

	var negoColor = d3.scaleQuantize()
	.domain([0,NegoMax])
	.range(["#eff3ff", "#bdd7e7", "#6baed6","#2171b5"]);

	calendar.append("g").attr("id","rows").selectAll('g')
	.data(theData)
	.enter()
	.append("g")
	.attr("class","row")
	.attr("transform", "translate(52.5,40)");

	d3.selectAll(".row")
	.append("rect")
	.attr("x",function(d,i){return ((30*i)%360)})
	.attr("y",function(d,i){return (15*Math.floor(i/12))})
	.attr('width','15')
	.attr('height','15')
	.attr('Year',function(d){return d.Year;})
	.attr('Month',function(d){return d.Month;})
	.attr("fill",function(d){if(d.Nego==0){return "white"} else{d3.select(this).attr("class","nego box");return negoColor(d.Nego)}})
	.on("mouseenter",function(d){
		
		if(d3.select(this).style("fill")!=="rgb(255, 255, 255)"){
			d3.select(this)
			.style("stroke","#E8336D")
			.style("stroke-width","2px")
			.style("stroke-dasharray","60");
			
			this.parentNode.parentNode.appendChild(this.parentNode);
			this.parentNode.appendChild(this);

			var localNegoData = negoData.filter(function(w){return ((w.Year==d.Year)&&(w.Month==d.Month))});
			console.log(localNegoData);

			if(localNegoData.length!=0){
				d3.select("#tooltipHeader")
					.text(localNegoData.length+(localNegoData.length==1?" Negotation":" Negotations")+" during "+d.Year);
				for(let i=0;i<localNegoData.length;i++)
				{
					let negoBox = d3.select("#tooltip")
					.append("div")
					.attr("class","tooltipNegotiation");

					negoBox
					.append("span")
					.attr("class","tooltipType")
					.text(localNegoData[i]['Event Type']);

					negoBox
					.append("p")
					.attr("class","tooltipDescription")
					.text(localNegoData[i]['Description']);

					var partyBox = negoBox.append("div").attr("class","tooltipParties");

					var nationString = localNegoData[i]['Parties Involved'].split(',');
					var leaderString = localNegoData[i]['Leadership'].split(',');

					for(var j=0;j<leaderString.length;j++){
						partyBox.append("span").attr("class","leaderName").text(leaderString[j]);
						partyBox.append("span").attr("class","nationName").text(nationString[j]);;
					}
				}
				d3.select("#tooltip")
				.style("display","block")
				
				if((this.getBoundingClientRect().top+20+document.getElementById('tooltip').clientHeight)>window.innerHeight){
					d3.select("#tooltip")
					.style("top",window.innerHeight-document.getElementById('tooltip').clientHeight-20)
					.style("left",this.getBoundingClientRect().left+20);
				}
				else{
					d3.select("#tooltip")
					.style("top",this.getBoundingClientRect().top+20)
					.style("left",this.getBoundingClientRect().left+20);
				}
			}
		}
	})
	.on("mouseleave",function(){
		var firstChild = this.parentNode.parentNode.firstChild; 
        if(firstChild){ 
        	this.parentNode.parentNode.insertBefore(this.parentNode, firstChild); 
		} 
		firstChild = this.parentNode.firstChild; 
		if(firstChild){ 
        	this.parentNode.insertBefore(this, firstChild); 
		} 
		d3.select(this)
		.style("stroke",null)
		.style("stroke-width",null)
		.style("stroke-dasharray"," 0,60");

		d3.select("#tooltip").style("display","none");
		d3.selectAll(".tooltipNegotiation").remove();
	})

	d3.selectAll(".row")
	.append("rect")
	.attr('width','15')
	.attr('height','15')
	.attr('data',function(d){return d.Year;})
	.attr("x",function(d,i){return (15+(30*i)%360)})
	.attr("y",function(d,i){return (15*Math.floor(i/12))})
	.attr("fill",function(d){if(d.Prov==0){return "white"} else {d3.select(this).attr("class","prov box");return provColor(d.Prov)}})
	.on("mouseenter",function(d){
		
		if(d3.select(this).style("fill")!=="rgb(255, 255, 255)"){
			d3.select(this)
			.style("stroke","#E8336D")
			.style("stroke-width","2px")
			.style("stroke-dasharray","60");
			
			this.parentNode.parentNode.appendChild(this.parentNode);
			this.parentNode.appendChild(this);

			var localProvData = provData.filter(function(w){return ((w.Year==d.Year)&&(w.Month==d.Month))});

			if(localProvData.length!=0){
				d3.select("#tooltipHeader")
					.text(localProvData.length+(localProvData.length==1?" Provocations":" Provocations")+" during "+d.Year);
				for(let i=0;i<localProvData.length;i++)
				{
					let provBox = d3.select("#tooltip")
					.append("div")
					.attr("class","tooltipNegotiation");

					provBox
					.append("span")
					.attr("class","tooltipType")
					.text(localProvData[i]['Event Type']);

					provBox
					.append("p")
					.attr("class","tooltipDescription")
					.text(localProvData[i]['Description']);
				}

				d3.select("#tooltip")
				.style("display","block");



				if((this.getBoundingClientRect().top+20+document.getElementById('tooltip').clientHeight)>window.innerHeight){
					d3.select("#tooltip")
					.style("top",window.innerHeight-document.getElementById('tooltip').clientHeight-20)
					.style("left",this.getBoundingClientRect().left+20);
				}
				else{
					d3.select("#tooltip")
					.style("top",this.getBoundingClientRect().top+20)
					.style("left",this.getBoundingClientRect().left+20);
				}
			}
		}
	})
	.on("mouseleave",function(){
		var firstChild = this.parentNode.parentNode.firstChild; 
        if(firstChild){ 
        	this.parentNode.parentNode.insertBefore(this.parentNode, firstChild); 
		} 
		firstChild = this.parentNode.firstChild; 
		if(firstChild){ 
        	this.parentNode.insertBefore(this, firstChild); 
		} 
		d3.select(this)
		.style("stroke",null)
		.style("stroke-width",null)
		.style("stroke-dasharray"," 0,60");

		d3.select("#tooltip").style("display","none");
		d3.selectAll(".tooltipNegotiation").remove();
	})

	var xScale =  d3.scaleBand()
	.domain(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
	.range([0, 360]);
	var xAxis = d3.axisTop(xScale)
	.tickSizeOuter(0);
	
	var xGridScale = d3.scaleLinear().domain([0,12]).range([0, 360]);
	var xGrid = d3.axisTop(xGridScale)
	.tickSizeOuter(0)
	.tickSize(-420)
	.tickFormat("");

	calendar.append("g")
	.attr('height','25px')
	.attr("transform", "translate(52.5,40)")
	.attr('id','xAxis')
	.style("background","black")
	.call(xAxis)
	.selectAll("text")
	.attr("transform", "rotate(-45 0,0) translate(0,0) ")
	.style("text-anchor", "start");

	calendar.append("g")
	.attr("class","grid")
	.attr("transform", "translate(52.5,40)")
	.call(xGrid);

	var yScale =  d3.scaleTime()
	.domain([new Date(1989, 5, 1), new Date(2017, 5, 1)])
	.range([0, 420]);
	var yAxis = d3.axisLeft(yScale)
	.ticks(27)
	.tickSizeOuter(0);


	calendar.append("g")
	.call(yAxis)
	.attr("transform","translate(52.5,40)");

	opacityWaypoint();
	makeWaypoint1();
	makeWaypoint2();
	makeWaypoint3();
	makeWaypoint4();
	makeWaypoint5();
	makeWaypoint6();
	makeWaypoint7();
	makeWaypoint8();
	makeWaypoint9();
	makeWaypoint10();
	makeWaypoint11();
	makeWaypoint12();
	windowResize();
}

function windowResize(){
	d3.select("#calendarContainer").style("width",0.3*document.getElementById("contentWrapper").getBoundingClientRect().width)
	.style("margin-left",0.125*document.getElementById("contentWrapper").getBoundingClientRect().width)
	.style("margin-right",0.125*document.getElementById("contentWrapper").getBoundingClientRect().width)
	.style("top",(window.innerHeight/2)-(document.getElementById('calendarContainer').clientHeight/2))
	.style("left",document.getElementById('contentWrapper').getBoundingClientRect().left);
	placeImages();
}

window.onresize = windowResize;