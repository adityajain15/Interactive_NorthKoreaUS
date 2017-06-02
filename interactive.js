var theData = d3.csv("USKoreaData.csv",makeStuff);
var NegoMax = 0;
	var ProvMax = 0;


function makeStuff(theData){
	
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

	d3.select('body')
		.append('svg')
		.attr('id','calendar')
		.style('height','900px')
		.style('width','100%')
		.selectAll('g')
		.data(theData)
		.enter()
		.append("g")
		.attr("class","row")

	d3.selectAll(".row")
		.append("rect")
		.attr("class","box")
		.attr("x",function(d,i){console.log("Nego: "+((30*i)%360)+","+Math.floor(i/12)*15);return ((30*i)%360)})
		.attr("y",function(d,i){return Math.floor(i/12)*15})
		.attr("fill",function(d){if(d.Nego==0){return "white"} else return negoColor(d.Nego)})
		.text(function(d){return d.Nego;})

	d3.selectAll(".row")
		.append("rect")
		.attr("class","box")
		.attr("x",function(d,i){return (15+(30*i))%375})
		.attr("y",function(d,i){return Math.floor(i/12)*15})
		.attr("fill",function(d){if(d.Prov==0){return "white"} else return provColor(d.Prov)})
		.text(function(d){return d.Prov;})
}
