var theData = d3.csv("USKoreaData.csv",makeStuff);



function makeStuff(theData){

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

	d3.select('#calendar')
		.attr('height','70%')
		.selectAll('g')
		.data(theData)
		.enter()
		.append("g")
		.attr("class","row")

	d3.selectAll(".row")
		.append("rect")
		.attr("class","box nego")
		.attr("x",function(d,i){return (2*i)%24})
		.attr("y",function(d,i){return Math.floor(i/12)})
		.attr('width','1')
		.attr('height','1')
		.attr("fill",function(d){if(d.Nego==0){return "white"} else return negoColor(d.Nego)})
		.text(function(d){return d.Nego;})

	d3.selectAll(".row")
		.append("rect")
		.attr("class","box")
		.attr("class","prov")
		.attr('width','1')
		.attr('height','1')
		.attr("x",function(d,i){return 1+(2*i)%24})
		.attr("y",function(d,i){return Math.floor(i/12)})
		.attr("fill",function(d){if(d.Prov==0){return "white"} else return provColor(d.Prov)})
		.text(function(d){return d.Prov;})
}

document.resize(function(){console.log("sup")})