var width=1000;
var height=800;

var topMargin = 100;
var lMargin = width/6;
var wide = 20;

var svg = d3.select("#compress")
            .append("svg")
            .attr("width",width)
            .attr("height",height);

var data = [];
var xScale, heightScale, colorScale;

d3.csv("entity.csv", function(error,data){
    console.log(data);

    data.push(data);
    xScale = d3.scale.linear()
    .domain([0,data.length-1])
    .range([lMargin, width-lMargin])

    heightScale = d3.scale.linear()
    .domain([0,data.length-1])
    .range([topMargin, height/2])

    colorScale = d3.scale.linear()
    .domain([0,data.length-1])
    .range([0, 255])


svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d,i){
        return xScale(i);
    })
    .attr("y", topMargin)
    .attr("width", wide)
    .attr("height", function(d,i){
        return heightScale(i);
    })
    .attr("fill",function(d,i){
        return "rgb("+colorScale(i)+","+100+","+100+")";
    })
})

                // .transition()
                // .duration(1000)
                // .attr("x", function(d,i){
                //       return 100 * Math.cos( i ) + 200;
                // })
                // .attr("y", function(d,i){

                //      return 100 * Math.sin( i ) + 200;

                // })