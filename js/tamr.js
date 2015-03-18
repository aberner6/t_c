var width=1000;
var height=800;

var topMargin = 100;
var lMargin = width/6;
var wide = 20;

var svg = d3.select("#compress")
            .append("svg")
            .attr("width",width)
            .attr("height",height);

var dataIs = [];
var xScale, heightScale, colorScale;
var saveOne = [];

var dataTypes = [];
//["Age","City","Country","Email Address","First Name","Last Name","ID",
//"Phone Number","Records","Sex","Source","State","Street Address","Suffix","Title","Zip Code"]
var s;
var p;
var howMany = [];
d3.csv("entity.csv", function(error,data){

    heightScale = d3.scale.linear()
    .domain([0, data.length])
    .range([topMargin, height/2])

    // colorScale = d3.scale.linear()
    // .domain([0,data.length-1])
    // .range([0, 255])
for(i=0; i<data.length; i++){
    dataIs.push(data[i]);
    saveOne.push(Object.getOwnPropertyNames(data[i]));
    for(j=0; j<saveOne[i].length-1; j++){
        dataTypes[j]=(saveOne[i][j])
    }
}
    console.log(dataTypes)
        xScale = d3.scale.ordinal()
            .domain(dataTypes)
            .rangeBands([0, width], .2)

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", function(d,i){
        var j = i;
        var p;
            if(j<dataTypes.length){
                p = saveOne[i][j];
            }
            if(d.hasOwnProperty(p)){
                return p;                
            } 
    })
    .attr("x",0)
    .attr("y", topMargin)
    .attr("width", wide)
    .attr("height", function(d,i){
        return 20;//heightScale(i);
    })
    .attr("fill","teal")// return "rgb("+colorScale(i)+","+100+","+100+")";
    .attr("opacity",.2)
    .transition()
    .delay(2000)
    .duration(2000)
    .attr("x", function(d,i){
        var j = i;
        var p;
            if(j<dataTypes.length){
                console.log(i)
                p = saveOne[i][j];
                console.log(p);
            }
            if(d.hasOwnProperty(p)){
                return xScale(p);                
            } 
            else{ 
                console.log(p); 
                return -100; 
            }   
            // if(j<dataTypes.length){
               // return xScale(saveOne[i][j]);
            // }
    })
    .attr("y", function(d,i){
        var j = 0;
            Object.getOwnPropertyNames(d).forEach(function(val, idx, array) {
              console.log(val + ' -> ' + d[val]);
                if(d[val].length>0){
                    j++;
                    howMany[i]={total:j,type:d[val]};
                }
            })
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