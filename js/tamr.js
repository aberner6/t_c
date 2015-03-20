var width=window.innerWidth;
var height=800;

var topMargin = 100;
var lMargin = width/10;
var wide = 65;

var svg = d3.select("#compress")
            .append("svg")
            .attr("width",width)
            .attr("height",height);

var dataIs = [];
var xScale, heightScale, colorScale;
var saveOne = [];

var dataTypes = [];

var dataNames =["Age","City","Country","Email Address","First Name","Last Name","ID","Phone Number","Records","Sex","Source","State","Street Address","Suffix","Title","Zip Code"];

var x1;
var x2;

var s;
var p;
var howMany = [];
var source = 0; 
var age = 0;
var city = 0;
var country = 0; 
var email = 0; 
var first = 0;
var last = 0;
var id = 0;
var phone = 0;
var record = 0;
var sex = 0;
var source = 0;
var state = 0;
var st = 0;
var suf = 0;
var tit = 0;
var zip = 0;
var sourceTotal = 0;
var ageTotal = 0;
var cityTotal = 0; 
var countryTotal = 0;
var emailTotal = 0;
var firstTotal = 0;
var lastTotal = 0;
var idTotal = 0;
var phoneTota = 0;
var recordTotal = 0;
var sexTotal = 0;
var sourceTotal = 0;
var stateTotal = 0;
var stTotal = 0; 
var sufTotal = 0;
var titTotal = 0;
var zipTotal = 0;
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
            .rangeBands([lMargin, width-lMargin], 1)//.2)

svg.selectAll("text")
    .data(dataTypes)
    .enter()
    .append("text")
    .attr("class", "label")
    .style("text-anchor", "middle")
    .attr("x", function(d,i){
        return xScale(d)+wide/2;
    })
    .attr("y",topMargin-10)
    .text(function(d){ return d });

var j = 0;
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
    .attr("x", function(d,i){
        return xScale(dataTypes[i])
    })
    .attr("y", topMargin)
    .attr("width", 1)
    .attr("height", function(d,i){
        return 20;//heightScale(i);
    })
    .attr("fill","#00ABD3")// return "rgb("+colorScale(i)+","+100+","+100+")";
    .attr("opacity", function(d,i){
        var j = i;
        var p;
            if(j<dataTypes.length){
                console.log(i)
                p = saveOne[i][j];
                console.log(p);
            }
            if(d.hasOwnProperty(p)){
                return .9;               
            } 
            else{ 
                return 0;
            }   
    })
    .transition()
    .delay(2000)
    .duration(2000)
    .attr("width",wide)
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
                // return -100; 
            }   
            // if(j<dataTypes.length){
               // return xScale(saveOne[i][j]);
            // }
    })
    .attr("y", function(d,i){                     // howMany.push({total:j,type:d[val]});
            Object.getOwnPropertyNames(d).forEach(function(val, idx, array) {
              console.log(val + ' -> ' + d[val]);
                // var k=0;
              // if(d[val].length>0&&dataTypes[i]==val){
              //   k+=1;
              //   howMany[i]=({source: val, total: k})
              // } 

              if(val=="Source" && d[val].length>0){
                   source++;
                    sourceTotal = source;
                }
              if(val=="City" && d[val].length>0){
                    city++;
                    cityTotal = city;
                }
              if(val=="Country" && d[val].length>0){
                    country++;
                    countryTotal = country;
                }
              if(val=="Email Address" && d[val].length>0){
                    email++;
                    emailTotal = email;
                }
              if(val=="First Name" && d[val].length>0){
                   first++;
                    firstTotal = first;
                }
              if(val=="Last Name" && d[val].length>0){
                   last++;
                    lastTotal = last;
                }
              if(val=="ID" && d[val].length>0){
                    id++;
                    idTotal = id;
                }
              if(val=="Phone Number" && d[val].length>0){
                    phone++;
                    phoneTotal = phone;
                }
              if(val=="Records" && d[val].length>0){
                   record++;
                    recordTotal = record;
                }
              if(val=="Sex" && d[val].length>0){
                    sex++;
                    sexTotal = sex;
                }
              if(val=="State" && d[val].length>0){
                    state++;
                    stateTotal = state;
                }
              if(val=="Street Address" && d[val].length>0){
                    st++;
                    stTotal = st;
                }
              if(val=="Suffix" && d[val].length>0){
                    suf++;
                    sufTotal = suf;
                }
              if(val=="Title" && d[val].length>0){
                    tit++;
                    titTotal = tit;
                }
              if(val=="Zip Code" && d[val].length>0){
                    zip++;
                    zipTotal = zip;
                }
        })
        return topMargin;
    })
.each("end", function(){
    d3.selectAll(".Source").transition().attr("height", sourceTotal*10)
    d3.selectAll(".Records").transition().attr("height", recordTotal*10)
    d3.selectAll(".ID").transition().attr("height", idTotal*10)
    d3.selectAll(".Title").transition().attr("height", titTotal*10)
    d3.selectAll(".First.Name").transition().attr("height", firstTotal*10)
    d3.selectAll(".Last.Name").transition().attr("height", lastTotal*10)
    d3.selectAll(".Suffix").transition().attr("height", sufTotal*10)
    d3.selectAll(".Email.Address").transition().attr("height", emailTotal*10)
    d3.selectAll(".Phone.Number").transition().attr("height", phoneTotal*10)
    d3.selectAll(".Street.Address").transition().attr("height", stTotal*10)
    d3.selectAll(".City").transition().attr("height", cityTotal*10)
    d3.selectAll(".Zip.Code").transition().attr("height", zipTotal*10)
    d3.selectAll(".State").transition().attr("height", stateTotal*10)
    d3.selectAll(".Country").transition().attr("height", countryTotal*10)
    d3.selectAll(".Sex").transition().attr("height", sexTotal*10);

svg.selectAll("line")
    .data(d3.range(data.length))
    .enter()
    .append("line")
    .attr("class", "line")
    .attr("x1", function(){
        x1 = d3.select(".Source").attr("x");
        return x1;
    })
    .attr("y1", function(d,i){
        return heightScale(i);//i*10;
    })
    .attr("x2", function(){
        x2 = d3.select(".Sex").attr("x");
        return wide+x2;
    })
    .attr("y2", function(d,i){
        return heightScale(i);
    })
    .attr("stroke","white")
    .attr("stroke-width", .4)  

if(x2>0){
svg.selectAll("bigRect")
    .data(d3.range(1))
    .enter()
    .append("rect")
    .attr("class","bigRect")
    .attr("x", x1) 
    .attr("y", topMargin)
    .attr("width", (x2-x1)+wide)
    .attr("height",0)
    .attr("fill", "none")
    .attr("stroke","orange")
    .attr("opacity",0)
    .transition()
    // .delay(6000)
    .duration(1000)
    .attr("opacity",1)
    .attr("height", heightScale(data.length))  
}
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