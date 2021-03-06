var width=window.innerWidth;
var height=window.outerHeight;

var topMargin = 100;
var lMargin = 20;
var wide = 30;
var widthBottom = 30;

    var fold = height+100;

var svg = d3.select("#compress")
            .append("svg")
            .attr("width",width)
            .attr("height",height);

var dataIs = [];
var xScale, heightScale, colorScale;
var saveOne = [];

var dataTypes = [];

var dataNames =["Age","City","Country","Email Address","First Name","Last Name","ID","Phone Number","Sex","State","Street Address","Suffix","Title","Zip Code"];
// "Source",
// "Records",
var x1;
var x2;

var tamR = "#00ABD3";

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

var del = 1000;

var topFactor = 1.9;

d3.csv("entity.csv", function(error,data){


    // .range([topMargin, height/2])

    // colorScale = d3.scale.linear()
    // .domain([0,data.length-1])
    // .range([0, 255])
for(i=0; i<data.length; i++){
    dataIs.push(data[i]);
    if(Object.getOwnPropertyNames(data[i])=="Source"){
    }else{         
        saveOne.push(Object.getOwnPropertyNames(data[i]));
    }

    for(j=0; j<saveOne[i].length; j++){
        if(saveOne[i][j]=="Source"){
            saveOne[i].splice(0,1)
        }
        if(saveOne[i][j]=="Records"){
            saveOne[i].splice(0,1)
        }

                dataTypes[j]=(saveOne[i][j])
    }
}
 wide = (width-350)/parseInt(dataTypes.length);
  widthBottom = (width-350)/parseInt(dataTypes.length);
})
function next(){
svg.selectAll("circle")
.data(d3.range(1))
.enter()
.append("circle")
.attr("cx",width/2)
.attr("cy",height/2)
.attr("r",10)




    heightScale = d3.scale.linear()
    .domain([0, dataTypes.length])
    .range([topMargin, topMargin+50])

    xScale = d3.fisheye.scale(d3.scale.ordinal())
        .domain(dataTypes)
        .rangeBands([lMargin*5, width-lMargin*9], 1)//.2)
    // xScale = d3.scale.ordinal()
    //     .domain(dataTypes)
    //     .rangeBands([lMargin*5, width-lMargin*9], 1)//.2)
//old
    // xScale = d3.scale.ordinal()
    //     .domain(dataTypes)
    //     .rangeBands([-lMargin*4, width-lMargin*2], 1)//.2)
  var widthScale = d3.fisheye.scale(d3.scale.linear)
                .domain([0, dataIs.length])
                .range([wide, wide*3]);
      // yScale = d3.fisheye.scale(d3.scale.linear)
      //           .domain([20, 90])
      //           .range([height, 0]),

svg.selectAll("text")
    .data(dataTypes)
    .enter()
    .append("text")
    .attr("class", function(d,i){
        return d;
        // xScale(dataTypes[i]); 
        // dataTypes[i].replace(/\s+/g, '');
    })
    .style("text-anchor", "middle")
    .attr("x", function(d,i){
        return xScale(d)+wide/2;
    })
    .attr("y",topMargin-10)
    .text(function(d){ return d })
    .attr("opacity",1);

var j = 0;

var rectOne = svg.selectAll("rect")
    .data(dataIs)
    .enter()
    .append("rect")
    .attr("class", function(d,i){
        // if(isNaN(dataTypes[i])){
        // }else{
        //     return dataTypes[i].replace(/\s+/g, '')
        // }
        return dataTypes[i];
    })
    .attr("y", topMargin)
    .attr("width",1)
    .attr("height",20)
    .attr("fill",tamR)
    .attr("opacity", function(d,i){
        var j = i;
        var p;
            if(j<dataTypes.length){
                p = saveOne[i][j];
            }
            if(d.hasOwnProperty(p)){
                return .9;               
            } 
            else{ 
                return 0;
            }   
    })
    .transition()
    .delay(del)
    .duration(2000)
    .attr("width",wide)
    .attr("y", function(d,i){
            Object.getOwnPropertyNames(d).forEach(function(val, idx, array) {
              // console.log(val + ' -> ' + d[val]);
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
    .call(position)
    .each("end", function(){
        var factor = 2;
        d3.selectAll(".ID").transition().attr("height", idTotal*factor)
        d3.selectAll(".Title").transition().attr("height", titTotal*factor)
        d3.selectAll(".First.Name").transition().attr("height", firstTotal*factor)
        d3.selectAll(".Last.Name").transition().attr("height", lastTotal*factor)
        d3.selectAll(".Suffix").transition().attr("height", sufTotal*factor)
        d3.selectAll(".Email.Address").transition().attr("height", emailTotal*factor)
        d3.selectAll(".Phone.Number").transition().attr("height", phoneTotal*factor)
        d3.selectAll(".Street.Address").transition().attr("height", stTotal*factor)
        d3.selectAll(".City").transition().attr("height", cityTotal*factor)
        d3.selectAll(".Zip.Code").transition().attr("height", zipTotal*factor)
        d3.selectAll(".State").transition().attr("height", stateTotal*factor)
        d3.selectAll(".Country").transition().attr("height", countryTotal*factor)
        d3.selectAll(".Sex").transition().attr("height", sexTotal*factor);

    svg.selectAll("line")
        .data(d3.range(dataTypes.length))
        .enter()
        .append("line")
        .attr("class", function(d,i){
            return dataTypes[i];
        })
        .attr("x1", function(){
            x1 = d3.select("rect.ID").attr("x");
            return x1;
        })
        .attr("y1", function(d,i){
            return heightScale(i);//i*10;
        })
        .attr("x2", function(){
            x2 = d3.select("rect.Age").attr("x");
            // return wide+x2;
            return parseInt(wide)+parseInt(x2);
        })
        .attr("y2", function(d,i){
            return heightScale(i);
        })
        .attr("stroke","white")
        .attr("stroke-width", .2)  
})

function position(rect){
      rectOne
        .attr("width", function(d,i){
            return widthScale(i)
        })
            .attr("x", function(d,i){
                return xScale(dataTypes[i])
            })
          // .attr("y", topMargin)
          // .attr("height", function(d) { return radiusScale(radius(d)); });
}   
    svg.on("mousemove", function() {
      var mouse = d3.mouse(this);
      xScale.distortion(2.5).focus(mouse[0]);
      // yScale.distortion(2.5).focus(mouse[1]);

      dot.call(position);
    }); 

    // .on("mouseover", function(d,i){
    //     var thisName = (d3.select(this).attr("class"));
    //     d3.selectAll("text."+thisName).transition().attr("opacity",1)
    //     // console.log("moused"+"text."+thisName)
    // })
    // .on("mouseout", function(d,i){
    //     var thisName = (d3.select(this).attr("class"));
    //     d3.selectAll("text."+thisName).transition().attr("opacity",0)
    //     // console.log("moused"+"text."+thisName)
    // })

    // .attr("x", function(d,i){
    //     var j = i;
    //     var p;
    //         if(j<dataTypes.length){
    //             p = saveOne[i][j];
    //         }
    //         if(d.hasOwnProperty(p)){
    //             return xScale(p);                
    //         } 
    //         else{ 
    //         }   
    // })



// svg.append("rect")
//     .attr("class","bigRect")
//     .attr("x", lMargin+wide) 
//     .attr("y", topMargin)
//     .attr("width", (width-lMargin)-(lMargin+wide))
//     .attr("height",0)
//     .attr("fill", "none")
//     .attr("stroke","grey")
//     .attr("stroke-dasharray", "2,2")
//     .attr("stroke-width", .2)
//     .attr("opacity",0)
//     .transition()
//     .delay(del*1.5)
//     .duration(1000)
//     .attr("opacity",1)
//     .attr("height", sourceTotal*10)  
}
    setTimeout(function(){
        next();
        next2();
        bottom();
    },del*2)
    setTimeout(function(){
        callSource();
        callNon();
    },del*6)

function callSource(){
    var sourceWidth = [];
    var sourceHeight = [];
    var randoScale = d3.scale.linear()
        .domain([0, 20])
        .range([2, 10])
    var hScale = d3.scale.linear()
        .domain([0, dataIs.length])
        .range([fold/2+10, height+400])

    var recordScale = d3.scale.linear()
        .domain([0, 2000000])
        .range([2, 20])

    var line = svg.append("line")
        .attr("class", "crossLine")
        .attr("x1", 0)
        .attr("y1", height/2)
        .attr("x2", width+200)
        .attr("y2", height/2)
        .attr("stroke","grey")
        .attr("stroke-dasharray", "2,2")
        .attr("stroke-width", .1);
var thisOne = 0;
    svg.selectAll("sourceRect")
        .data(dataIs)
        .enter()
        .append("rect")
        .attr("class","sourceRect")
        .attr("x", lMargin) 
        .attr("y", function(d,i){
            return hScale(i);//fold/2 + i*25+10;
        })
        .attr("opacity", .5)
        .attr("fill", tamR)   
        .attr("width", 0)
        .attr("height",0)
        .transition()
        .duration(2000)
        .attr("width", function(d,i){
            Object.getOwnPropertyNames(d).forEach(function(val, idx, array) {
              if(d[val].length>0){
                thisOne++;
                sourceWidth[i]=(thisOne);
                    // sourceTotal = source;
                }
            })
              console.log(sourceWidth[i])
                thisOne = 0;
            // sourceWidth.push(Math.random()*35)
            return sourceWidth[i];
        })
        .attr("height", function(d,i){
            sourceHeight.push(recordScale(d.Records));
            console.log(recordScale(d.Records))
              // if(val=="Records" && d[val].length>0){
              //      record++;
              //       recordTotal = record;
              //   }
            // sourceHeight.push(randoScale(Math.random()*20))
            return recordScale(d.Records);
        })

    svg.selectAll("outlineRects")
        .data(dataIs)
        .enter()
        .append("rect")
        .attr("class","outlineRects")
        .attr("x", lMargin) 
        .attr("y", function(d,i){
            return hScale(i);//fold/2 + i*25+10;
        })
        .attr("stroke","white")
        .attr("opacity", .2)
        .attr("fill", tamR)   
        .attr("width", 0)
        .attr("height",0)
        .transition()
        .duration(2000)
        .attr("width", function(d,i){
            return sourceWidth[i]+10;
        })
        .attr("height", function(d,i){
            return sourceHeight[i]+10;
        })



    // var sourceText = "Source"
    svg.selectAll("sourceText")
        .data(dataIs)
        .enter()
        .append("text")
        .attr("class", "sourceText")
        .attr("x", lMargin)
        .attr("y", function(d,i){
            return hScale(i)+10;//fold/2+i*25+20;
        })
        .transition()
        .delay(1000)
        .duration(2000)
        .attr("x", function(d,i){
            return lMargin+sourceWidth[i]+14;
        })
        .text(function(d,i){
            return d.Source;
        })

    svg.append("text")
        .attr("class","sourceLabel")
        .attr("x", lMargin)
        .attr("y", fold/2-10)
        .text("Source")   
        } 

function callNon(){
    // var sourceWidth = [];
    // var sourceHeight = [];
    var fold = height+100;
    // var randoScale = d3.scale.linear()
    //     .domain([0, 20])
    //     .range([2, 10])
    var hScale = d3.scale.linear()
        .domain([0, dataIs.length])
        .range([fold/2+10, height+100])
var rMargin = 130;
    svg.selectAll("sourceRect")
        .data(d3.range(20))
        .enter()
        .append("rect")
        .attr("class","sourceRect")
        .attr("x", width-130) 
        .attr("y", function(d,i){
            return hScale(i);//fold/2 + i*25+10;
        })
        .attr("opacity", .5)
        .attr("fill", tamR)   
        .attr("width", 0)
        .attr("height",0)
        .attr("stroke","white")
        .transition()
        .duration(2000)
        .attr("width", 10)
        .attr("height", 10);

    svg.selectAll("sourceRect")
        .data(d3.range(20))
        .enter()
        .append("rect")
        .attr("class","sourceRect")
        .attr("x", width-120) 
        .attr("y", function(d,i){
            return hScale(i);//fold/2 + i*25+10;
        })
        .attr("opacity", .5)
        .attr("fill", tamR)   
        .attr("width", 0)
        .attr("height",10)
        .attr("stroke","white")
        .transition()
        .duration(2000)
        .attr("width", 10);
    svg.selectAll("sourceRect")
        .data(d3.range(20))
        .enter()
        .append("rect")
        .attr("class","sourceRect")
        .attr("x", width-110) 
        .attr("y", function(d,i){
            return hScale(i);//fold/2 + i*25+10;
        })
        .attr("opacity", .5)
        .attr("fill", tamR)   
        .attr("width", 0)
        .attr("height",10)
        .attr("stroke","white")
        .transition()
        .duration(2000)
        .attr("width", function(d,i){
            if(i%3==1){
                return 10
            }else{
                return 0;
            }
        })

    svg.append("text")
        .attr("class","sourceLabel")
        .attr("x", width-130)
        .attr("y", fold/2-10)
        .text("Non-unified")   
} 

// })
             // .transition()
                // .duration(1000)
                // .attr("x", function(d,i){
                //       return 100 * Math.cos( i ) + 200;
                // })
                // .attr("y", function(d,i){

                //      return 100 * Math.sin( i ) + 200;

                // })











function next2(){
        // xScale = d3.scale.ordinal()
        //     .domain(dataTypes)
        //     .rangeBands([lMargin, width-lMargin], 1)//.2)
svg.selectAll("rectBack")
    .data(dataTypes)
    .enter()
    .append("rect")
    .attr("class", "rectBack")
    .attr("x", function(d,i){
        return xScale(d);
    })
    .attr("y",topMargin*topFactor*topFactor-20)
    .attr("fill","lightgray")
    .attr("opacity",.5)
    .attr("stroke","white")
    .attr("width", wide)
    .attr("height",20)

svg.selectAll("text2")
    .data(dataTypes)
    .enter()
    .append("text")
    .attr("class", "label")
    .style("text-anchor", "middle")
    .attr("x", function(d,i){
        return xScale(d)+wide/2;
    })
    .attr("y",topMargin*topFactor*topFactor-8)
    .text(function(d){ return d });
svg.selectAll("text2")
    .data(dataTypes)
    .enter()
    .append("text")
    .attr("class", "label")
    .style("text-anchor", "right")
    .style("font-weight",900)
    .attr("x", function(d,i){
        return xScale(d)+wide-10;
    })
    .attr("y",topMargin*topFactor*topFactor-8)
    .text("▼"); //▼ ▲

var j = 0;
svg.selectAll("rect2")
    .data(dataTypes)
    .enter()
    .append("rect")
    .attr("class", "rect2")
    .attr("x", function(d,i){
        return xScale(d);
    })
    .attr("y",topMargin*topFactor*topFactor)
    .attr("fill",tamR)
    .attr("stroke","white")
    .attr("width", wide)
    .attr("height",20)

    var height2Scale = d3.scale.linear()
    .domain([0, 1])
    .range([topMargin*topFactor, topMargin*topFactor*topFactor])

var oneData = ["id","title","first name","","suffix","email Address","phone Number","street Address","city","zip code","state","country","sex","age"]
svg.selectAll("text3")
    .data(dataTypes)
    .enter()
    .append("text")
    .attr("class", "label")
    .style("text-anchor", "middle")
    .attr("x", function(d,i){
        return xScale(d);
    })
    .attr("y",topMargin*topFactor*topFactor+12)
    .attr("fill","white")
    .text(function(d,i){ 
        return oneData[i];
    })
    .transition()
    .duration(2000)
    .attr("x", function(d,i){
        return xScale(d)+wide/2
    })
}













function bottom(){
        var hScale = d3.scale.linear()
        .domain([0, dataIs.length])
        .range([fold/2+10, height+400])

    var height3Scale = d3.scale.linear()
        .domain([0, dataIs.length])
        .range([fold/2+10, height+100])
    // height3Scale = d3.scale.linear()
    // .domain([0, dataTypes.length])
    // .range([fold/2, fold/2+200])
    // xScale = d3.scale.ordinal()
    //     .domain(dataTypes)
    //     .rangeBands([lMargin*3, width-lMargin*6], 1)//.2)

svg.selectAll("textBottom")
    .data(dataTypes)
    .enter()
    .append("text")
    .attr("class", "label")
    .style("text-anchor", "middle")
    .attr("x", function(d,i){
        return xScale(d)+widthBottom/2;
    })
    .attr("y", (fold/2)-10)
    .text(function(d){ return d });

var j = 0;
svg.selectAll("rectBottom")
    .data(dataIs)
    .enter()
    .append("rect")
    .attr("class", function(d,i){
        return dataTypes[i]+2;
    })
    .attr("x", function(d,i){
        return xScale(dataTypes[i])
    })
    .attr("y", fold/2+10)
    .attr("width", 1)
    .attr("height", function(d,i){
        return 20;//heightScale(i);
    })
    .attr("fill",tamR)// return "rgb("+colorScale(i)+","+100+","+100+")";
    .attr("opacity", function(d,i){
        var j = i;
        var p;
            if(j<dataTypes.length){
                p = saveOne[i][j];
            }
            if(d.hasOwnProperty(p)){
                return .9;               
            } 
            else{ 
                return 0;
            }   
    })
    .transition()
    .delay(del)
    .duration(2000)
    .attr("width",widthBottom)
    .attr("x", function(d,i){
        // console.log(d);
        var j = i;
        var p;
            if(j<dataTypes.length){
                p = saveOne[i][j];
            }
            if(d.hasOwnProperty(p)){
                return xScale(p);                
            } 
            else{ 
            }   
    })
    .attr("y", function(d,i){                     // howMany.push({total:j,type:d[val
        return fold/2+10;
    })
.each("end", function(){
    var factor = 10;
    d3.selectAll(".ID2")
    .transition()
    .attr("height", hScale(idTotal));

    d3.selectAll(".Title2").transition().attr("height", hScale(titTotal))
    d3.selectAll(".First.Name2").transition().attr("height", hScale(firstTotal))
    d3.selectAll(".Last.Name2").transition().attr("height", hScale(lastTotal))
    d3.selectAll(".Suffix2").transition().attr("height", hScale(sufTotal))
    d3.selectAll(".Email.Address2").transition().attr("height", hScale(emailTotal))
    d3.selectAll(".Phone.Number2").transition().attr("height", hScale(phoneTotal))
    d3.selectAll(".Street.Address2").transition().attr("height", hScale(stTotal))
    d3.selectAll(".City2").transition().attr("height", hScale(cityTotal))
    d3.selectAll(".Zip.Code2").transition().attr("height", hScale(zipTotal))
    d3.selectAll(".State2").transition().attr("height", hScale(stateTotal))
    d3.selectAll(".Country2").transition().attr("height", hScale(countryTotal))
    d3.selectAll(".Sex2").transition().attr("height", hScale(sexTotal))

svg.selectAll("line2")
    .data(dataIs)
    .enter()
    .append("line")
    .attr("class", "line2")
    .attr("x1", function(){
        x3 = d3.select(".ID2").attr("x");
        return parseInt(x3);
        // return lMargin*2;
    })
    .attr("y1", function(d,i){
        return hScale(i);//i*10;
    })
    .attr("x2", function(){
        x4 = d3.select(".Age2").attr("x");
        // return wide+x2;
        return parseInt(widthBottom)+parseInt(x4);
    })
    .attr("y2", function(d,i){
        return hScale(i);//height3Scale(i);
    })
    .attr("stroke","white")
    .attr("stroke-width", .2)  
})

svg.append("rect")
    .attr("class","bigRect2")
    .attr("x", lMargin+wide) 
    .attr("y", fold/2+10)
    .attr("width", (widthBottom-lMargin)-(lMargin+widthBottom))
    .attr("height",0)
    .attr("fill", "none")
    .attr("stroke","grey")
    .attr("stroke-dasharray", "2,2")
    .attr("stroke-width", .2)
    .attr("opacity",0)
    .transition()
    .delay(del*1.5)
    .duration(1000)
    .attr("opacity",1)
    .attr("height", sourceTotal*10) 

d3.selectAll("rect").attr("stroke","white");     
}
