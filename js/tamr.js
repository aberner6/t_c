var width=window.innerWidth;
var height=window.outerHeight;

var lMargin = 20;
var wide = 30;
var widthBottom = 30;

var fold = topMargin;//height/2;

var svg = d3.select("#compress")
            .append("svg")
            .attr("width",width)
            .attr("height",height);
var minRects;

var dataIs = [];
var xScale, heightScale, colorScale;
var saveOne = [];

var dataTypes = [];

var dataNames =
// ["Age","City","Country","Email Address","First Name","Last Name","ID","Phone Number","Sex","State","Street Address","Suffix","Title","Zip Code"];
["ID", "Title", "First Name", "Last Name", "Suffix", "Email Address", "Phone Number", "Street Address", "City", "Zip Code", "State", "Country", "Sex", "Age"]
var x1;
var x2;
var oneData = ["id","title","first name","","suffix","email Address","phone Number","street Address","city","zip code","state","country","sex","age"]

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

var cityData = [];
var ageData = [];
var countryData = [];
var emailData = [];
var firstData = [];
var lastData = [];
var idData = [];
var phoneData = [];
var sexData = [];
var stateData = [];
var stData = [];
var suffixData = [];
var titleData = [];
var zipData = [];

var del = 1000;

var topFactor = 1.9;

var plus = false;
var minus = true;


//min and max szing for rectangle
//min
var uniHeight = 15;
var textSpace = 10;
//max possible sizing for rectangle
// var uniHeight = 65;
// var textSpace = 36;

 $("#plus").on("click", function(){
   plus = true;
    minus = false;   
          // sortSource();
          // sortEntries();
          // sortNon();
redo();
        // bottom();
        // callSource();
        // callNon();
 })
 $("#minus").on("click", function(){
        //     unsortSource();
        //     unsortEntries();
        // unsortNon();
        topPart();
        callTopSource();
        callTopNon();
  minus = false;
  plus = true;
  undo();
 })

var sort1 = false;
 $("#sort1").on("click", function(){
      // unsort = false;
      sort1 = !sort1;
      if(sort1){
          sortSource();
      }else{
            unsortSource();
      }
 })
 var sort2 = false;
 $("#sort2").on("click", function(){
      // unsort = false;
      sort2 = !sort2;
      if(sort2){
        hideDetails();
          sortEntries();
      }else{
        showDetails();
            unsortEntries();
      }
 })
 var sort3 = false;
 $("#sort3").on("click", function(){
      // unsort = false;
      sort3 = !sort3;
      if(sort3){
          sortNon();
      }else{
        unsortNon();
      }
 })


    setTimeout(function(){
        bottom();
        // hideDetails();
        callSource();
        callNon();
// for (i=0; i<dataTypes.length; i++){ 
//     d3.selectAll("."+dataTypes[i]+"text").transition().attr("opacity",0)
// }
        // center();
        // callMidSource();
        // callMidNon();

    },del/10)
    setTimeout(function(){
        sortEntries();
    },del*4)

var uniHeight = 15;
var textSpace = 10;
//max possible sizing for rectangle
var uniHeight = 65;
var textSpace = 36;
d3.csv("entity2.csv", function(error,data){
for(i=0; i<data.length; i++){

    dataIs.push(data[i]);

var uniScale = d3.scale.linear()
    .domain([0, 100000000])
    .range([65, 15]);

uniHeight = uniScale(data.length);
textSpace = uniHeight/1.8;

    if(Object.getOwnPropertyNames(data[i])=="Source"){
    }
    else{         
        saveOne.push(Object.getOwnPropertyNames(data[i]));
    }
                 Object.getOwnPropertyNames(data[i]).forEach(function(val, idx, array) {
                                  if(val=="City"){
                                    console.log(val + ' -> ' + data[i][val]);
                                        cityData.push(data[i][val])
                                    }
                                  if(val=="Age"){
                                       ageData.push(data[i][val])
                                    }
                                  if(val=="Country"){
                                        countryData.push(data[i][val])
                                    }
                                  if(val=="Email Address"){
                                        emailData.push(data[i][val])                    
                                    }
                                  if(val=="First Name"){
                                        firstData.push(data[i][val])
                                    }
                                  if(val=="Last Name"){
                                        lastData.push(data[i][val])
                                    }
                                  if(val=="ID"){
                                        idData.push(data[i][val])
                                    }
                                  if(val=="Phone Number"){
                                        phoneData.push(data[i][val])
                                    }
                                  if(val=="Sex"){
                                        sexData.push(data[i][val])
                                    }
                                  if(val=="State"){
                                        stateData.push(data[i][val])
                                    }
                                  if(val=="Street Address"){
                                        stData.push(data[i][val])
                                    }
                                  if(val=="Suffix"){
                                        suffixData.push(data[i][val])
                                    }
                                  if(val=="Title"){
                                        titleData.push(data[i][val])
                                    }
                                  if(val=="Zip Code"){
                                        zipData.push(data[i][val])
                                    }
              if(val=="City" && data[i][val].length>0){
                    city++;
                    cityTotal = city;
                }
              if(val=="Age" && data[i][val].length>0){
                    age++;
                    ageTotal = age;
                }
              if(val=="Country" && data[i][val].length>0){
                    country++;
                    countryTotal = country;
                }
              if(val=="Email Address" && data[i][val].length>0){
                    email++;
                    emailTotal = email;
                }
              if(val=="First Name" && data[i][val].length>0){
                   first++;
                    firstTotal = first;
                }
              if(val=="Last Name" && data[i][val].length>0){
                   last++;
                    lastTotal = last;
                }
              if(val=="ID" && data[i][val].length>0){
                    id++;
                    idTotal = id;
                }
              if(val=="Phone Number" && data[i][val].length>0){
                    phone++;
                    phoneTotal = phone;
                }
              if(val=="Sex" && data[i][val].length>0){
                    sex++;
                    sexTotal = sex;
                }
              if(val=="State" && data[i][val].length>0){
                    state++;
                    stateTotal = state;
                }
              if(val=="Street Address" && data[i][val].length>0){
                    st++;
                    stTotal = st;
                }
              if(val=="Suffix" && data[i][val].length>0){
                    suf++;
                    sufTotal = suf;
                }
              if(val=="Title" && data[i][val].length>0){
                    tit++;
                    titTotal = tit;
                }
              if(val=="Zip Code" && data[i][val].length>0){
                    zip++;
                    zipTotal = zip;
                }
        })
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
              xScale = d3.scale.ordinal()
                    .domain(dataTypes)
                    .rangeBands([lMargin*5, width-lMargin*9], 1)//.2)
 wide = (width-350)/parseInt(dataTypes.length);
  widthBottom = (width-350)/parseInt(dataTypes.length);
})



var topMargin = 100;

var topSpace = topMargin-20;
var topSpaceText = topMargin-8;
var topSpaceRect = (topMargin)/2;
var topSpaceText3 = (topMargin+12)/2;

var fontAdjust = 12;



function topPart(){
        topMargin = 10;
            oheightScale = d3.scale.linear()
                .domain([0, dataTypes.length])
                .range([topSpaceText3, 210])
                    var heightScale = d3.scale.linear()
                        .domain([0, dataIs.length])
                        .range([topSpaceText3, topSpaceText3+50])

            xScale = d3.scale.ordinal()
                    .domain(dataTypes)
                    .rangeBands([lMargin*5, width-lMargin*9], 1)//.2)

            var j = 0;
       var theserects = svg.selectAll("rects")
                .data(dataTypes)
                .enter()
                .append("rect")
                .attr("class", function(d,i){
                    return d;
                })
                .attr("x", function(d,i){
                    return xScale(d)
                })
                .attr("y", topSpaceRect)
                .attr("width", 1)
                .attr("height", 0)
                .attr("stroke","white")
                .attr("fill",tamR)
                .attr("opacity", function(d,i){
                    return 1;  
                })
                .attr("width",wide)
                .transition()
                .duration(1000)

            .each("end", function(){
                var factor = 4;
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
                d3.selectAll(".Age").transition().attr("height", ageTotal*factor);
    
                svg.selectAll("topLine")
                    .data(d3.range(dataIs.length/3))
                    .enter()
                    .append("line")
                    .attr("class", "topLine")
                    .attr("x1", function(){
                        x1 = d3.select(".back0").attr("x");
                        // x1 = d3.select("rect.ID").attr("x");
                        return x1;
                    })
                    .attr("y1", function(d,i){
                        return oheightScale(i);//i*10;
                    })
                    .attr("x2", function(){
                        x2 = d3.select(".back"+parseInt(dataTypes.length-1)).attr("x");
                        // x2 = d3.select("rect.Age").attr("x");
                        // return wide+x2;
                        return parseInt(wide)+parseInt(x2);
                    })
                    .attr("y2", function(d,i){
                        return oheightScale(i);
                    })
                    .attr("stroke","white")
                    .attr("opacity",1)
                    .attr("stroke-width", .2)  
            })

           // svg.selectAll("rectBack")
           //      .data(dataTypes)
           //      .enter()
           //      .append("rect")
           //      .attr("class", "rectBack")
           //      .attr("x", function(d,i){
           //          return xScale(d);
           //      })
           //      .attr("y",topMargin)
           //      .attr("fill","none")
           //      .attr("opacity",.5)
           //      .attr("stroke","lightgray")
           //      .attr("width", wide)
           //      .attr("height",20)
           //  svg.selectAll("text")
           //      .data(dataTypes)
           //      .enter()
           //      .append("text")
           //      .attr("class", "topText")
           //      .style("text-anchor", "middle")
           //      .attr("x", function(d,i){
           //          return xScale(d)+wide/2;
           //      })
           //      .attr("y",topMargin+fontAdjust)
           //      .text(function(d){ return d })
           //      .attr("opacity",1);
}

function center(){
    
        xScale = d3.scale.ordinal()
            .domain(dataTypes)
            .rangeBands([lMargin*5, width-lMargin*9], 1)//.2)

            var j = 0;
            svg.selectAll("rect2")
                .data(dataTypes)
                .enter()
                .append("rect")
                .attr("class", "rect2")
                .attr("x", function(d,i){
                    return xScale(d);
                })
                .attr("y",topSpaceRect)
                .attr("fill",tamR)
                .attr("stroke","white")
                .attr("width", wide)
                .attr("height",uniHeight)

                var height2Scale = d3.scale.linear()
                .domain([0, 1])
                .range([topMargin*topFactor, topMargin*topFactor*topFactor])

            // svg.selectAll("text3")
            //     .data(dataTypes)
            //     .enter()
            //     .append("text")
            //     .attr("class", "text3")
            //     .style("text-anchor", "middle")
            //     .attr("x", function(d,i){
            //         return xScale(d);
            //     })
            //     .attr("y",topSpaceText3)
            //     .attr("opacity",1)
            //     .attr("fill","white")
            //     .text(function(d,i){ 
            //         return oneData[i];
            //     })
            //     .transition()
            //     .duration(2000)
            //     .attr("x", function(d,i){
            //         return xScale(d)+wide/2
            //     })
}








                    var recordScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([2, uniHeight])
function callMidSource(){
                    var randoScale = d3.scale.linear()
                        .domain([0, 20])
                        .range([2, 10])


                    var hScale = d3.scale.linear()
                        .domain([0, dataIs.length])
                        .range([topSpaceRect+3, height-40])

                var thisOne = 0;
                    svg.selectAll("source1Rect")
                        .data(d3.range(1))
                        .enter()
                        .append("rect")
                        .attr("class","source1Rect")
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
                            return 8;
                        })
                        .attr("height", function(d,i){
                            return recordScale(dataIs[0].Records);
                        })

                    svg.selectAll("outline1Rects")
                        .data(d3.range(1))
                        .enter()
                        .append("rect")
                        .attr("class","outline1Rects")
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
                            return 18;
                        })
                        .attr("height", function(d,i){
                            return recordScale(dataIs[0].Records)+10;
                        })



                    // var sourceText = "Source"
                    svg.selectAll("source1Text")
                        .data(d3.range(1))
                        .enter()
                        .append("text")
                        .attr("class", "source1Text")
                        .attr("x", lMargin)
                        .attr("y", function(d,i){
                            return hScale(i)+10;//fold/2+i*25+20;
                        })
                        .transition()
                        .delay(1000)
                        .duration(2000)
                        .attr("x", function(d,i){
                            return lMargin+8+14;
                        })
                        .text("Excel Sheet");

                    // svg.append("text")
                    //     .attr("class","sourceLabel")
                    //     .attr("x", lMargin)
                    //     .attr("y", topSpaceText)
                    //     .text("Source")   
}


function callMidNon(){
                var hScale = d3.scale.linear()
                    .domain([0, dataIs.length])
                    .range([topSpaceRect, height-40])
            var rMargin = 130;
                svg.selectAll("nonMid")
                    .data(d3.range(1))
                    .enter()
                    .append("rect")
                    .attr("class","nonMid")
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
                    .attr("height", uniHeight);

                svg.selectAll("nonMid")
                    .data(d3.range(1))
                    .enter()
                    .append("rect")
                    .attr("class","nonMid")
                    .attr("x", width-120) 
                    .attr("y", function(d,i){
                        return hScale(i);//fold/2 + i*25+10;
                    })
                    .attr("opacity", .5)
                    .attr("fill", tamR)   
                    .attr("width", 0)
                    .attr("height", uniHeight)
                    .attr("stroke","white")
                    .transition()
                    .duration(2000)
                    .attr("width", 10);
                svg.selectAll("nonMid")
                    .data(d3.range(1))
                    .enter()
                    .append("rect")
                    .attr("class","nonMid")
                    .attr("x", width-110) 
                    .attr("y", function(d,i){
                        return hScale(i);//fold/2 + i*25+10;
                    })
                    .attr("opacity", .5)
                    .attr("fill", tamR)   
                    .attr("width", 0)
                    .attr("height",uniHeight)
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
 
} 

function callTopSource(){
                    var randoScale = d3.scale.linear()
                        .domain([0, 20])
                        .range([2, 10])
                    var recordScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([2, uniHeight])

                    // var hScale = d3.scale.linear()
                    //     .domain([0, dataIs.length])
                    //     .range([(12+topMargin*2), height-40])
                    var hScale = d3.scale.linear()
                        .domain([0, dataIs.length])
                        .range([topSpaceRect, height])

                var thisOne = 0;
                    svg.selectAll("sourceTop")
                        .data(d3.range(1))
                        .enter()
                        .append("rect")
                        .attr("class","sourceTop")
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
                            return 8;
                        })
                        .attr("height", function(d,i){
                            return recordScale(dataIs[1].Records);
                        })

                    svg.selectAll("outlineTop")
                        .data(d3.range(1))
                        .enter()
                        .append("rect")
                        .attr("class","outlineTop")
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
                            return 18;
                        })
                        .attr("height", function(d,i){
                            return recordScale(dataIs[1].Records)+10;
                        })


                    // svg.append("text")
                    //     .attr("class","sourceLabel")
                    //     .attr("x", lMargin)
                    //     .attr("y", topMargin+12)
                    //     .text("Source")   
}
                    svg.append("text")
                        .attr("class","sourceLabel")
                        .attr("x", lMargin)
                        .attr("y", topSpaceText3-18)
                        .text("Source") 
function callTopNon(){
                    var hScale = d3.scale.linear()
                        .domain([0, dataIs.length])
                        .range([topSpaceRect, height])
                // var hScale = d3.scale.linear()
                //     .domain([0, dataIs.length])
                //     .range([(12+topMargin*2), height-40])
            var rMargin = 130;
                svg.selectAll("nonTop")
                    .data(d3.range(4))
                    .enter()
                    .append("rect")
                    .attr("class","nonTop")
                    .attr("x", function(d,i){
                        return width-130 + i*10;
                    }) 
                    .attr("y", function(d,i){
                        return hScale(0);//fold/2 + i*25+10;
                    })
                    .attr("opacity", .5)
                    .attr("fill", tamR)   
                    .attr("width", 0)
                    .attr("height",0)
                    .attr("stroke","white")
                    .transition()
                    .duration(2000)
                    .attr("width", 10)
                    .attr("height", uniHeight);

                // svg.append("text")
                //     .attr("class","sourceLabel")
                //     .attr("x", width-130)
                //     .attr("y", topMargin+12)
                //     .text("Non-unified")   
} 

                    svg.append("text")
                        .attr("class","sourceLabel")
                    .attr("x", width-130)
                        .attr("y", topSpaceText3-18)
                    .text("Non-unified")   




                    // var line = svg.append("line")
                    //     .attr("class", "crossLine")
                    //     .attr("x1", 0)
                    //     .attr("y1", height/2)
                    //     .attr("x2", width+200)
                    //     .attr("y2", height/2)
                    //     .attr("stroke","grey")
                    //     .attr("stroke-dasharray", "2,2")
                    //     .attr("stroke-width", .1);
var sourceHeight = [];
function callSource(){
                    var sourceWidth = [];
                    var randoScale = d3.scale.linear()
                        .domain([0, 20])
                        .range([2, 10])
                    var hScale = d3.scale.linear()
                        .domain([0, dataIs.length])
                        .range([topSpaceText3, height])

                    var recordScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([2, uniHeight])
                    
                    var recordHScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([topSpaceText3, height])

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
                                }
                            })
                                thisOne = 0;
                            return sourceWidth[i];
                        })
                        .attr("height", function(d,i){
                            sourceHeight.push(recordScale(d.Records));
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
                            // if(i>0){
                            return d.Source;
                            // } else{}     
                        })

                    // svg.append("text")
                    //     .attr("class","sourceLabel")
                    //     .attr("x", lMargin)
                    //     .attr("y", fold/2-10)
                    //     .text("Source")   
        } 
     
function sortSource(){
                var hScale = d3.scale.linear()
                    .domain([0, dataIs.length])
                    .range([topSpaceText3-5, height])

                    var recordHScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([topSpaceText3, height])    

        d3.selectAll(".sourceRect, .outlineRects")
        .transition()
        .attr("y", function(d,i){
            return recordHScale(d.Records)
        })
        d3.selectAll(".sourceText")
        .transition()
        .attr("opacity",0);
    d3.selectAll(".source1Text").transition().attr("opacity",0);
}
function sortNon(){
                var rHScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([5, uniHeight])    

    d3.selectAll(".nonRect")
        .transition()
        .attr("height", function(d,i){
            if(i<25){
            return rHScale(dataIs[i].Records)                
            }
            else{
                return uniHeight;
            }
        })
// , .nonRect2, .nonRect3
    d3.selectAll(".nonRect2")
        .transition()
        .attr("height", function(d,i){
            if(i<25){
            return rHScale(dataIs[i].Records)                
            }
            else{
                return uniHeight;
            }
        })
    d3.selectAll(".nonRect3")
        .transition()
        .attr("height", function(d,i){
            if(i<25){
            return rHScale(dataIs[i].Records)                
            }
            else{
                return uniHeight;
            }
        })
}
function unsortNon(){
    d3.selectAll(".nonRect, .nonRect2, .nonRect3")
        .transition()
        .attr("height", function(d,i){
            return uniHeight;
        })

}
function showDetails(){
    var on = 1;
d3.selectAll(".Agetext")
        .transition()
        .attr("opacity",on)
d3.selectAll(".Citytext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Ziptext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Suffixtext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Titletext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Streettext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Statetext")
        .transition()
        .attr("opacity",on)  
    d3.selectAll(".Sextext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Phonetext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".IDtext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Lasttext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Firsttext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Emailtext")
        .transition()
        .attr("opacity",on)
    d3.selectAll(".Countrytext")
        .transition()
        .attr("opacity",on)       
}
function hideDetails(){
d3.selectAll(".Agetext")
        .transition()
        .attr("opacity",0)
d3.selectAll(".Citytext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Ziptext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Suffixtext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Titletext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Streettext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Statetext")
        .transition()
        .attr("opacity",0)  
    d3.selectAll(".Sextext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Phonetext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".IDtext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Lasttext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Firsttext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Emailtext")
        .transition()
        .attr("opacity",0)
    d3.selectAll(".Countrytext")
        .transition()
        .attr("opacity",0)   
}
function sortEntries(){
                var rHScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([5, uniHeight]) 
d3.selectAll(".ID2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".Title2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".FirstName2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".LastName2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".Suffix2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".Email2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".Phone2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".StreetAddress2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".City2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".ZipCode2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".State2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".Country2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".Sex2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })
d3.selectAll(".Age2")
    .transition()
    .attr("height", function(d,i){
        if(i<25){
            return rHScale(parseInt(dataIs[i].Records));
        }else{
            return uniHeight;
        }
    })  
 // hideDetails();

d3.selectAll(".rect2").transition().attr("opacity",0);
}

function unsortEntries(){
d3.selectAll(".ID2, .Title2, .FirstName2, .LastName2, .Suffix2, .Email2, .Phone2, .StreetAddress2, .City2, .ZipCode2, .State2, .Country2, .Sex2, .Age2")
    .transition()
    .duration(1000)
    .attr("height",uniHeight); 
d3.selectAll(".rect2").transition().attr("opacity",1)

d3.selectAll(".Citytext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Agetext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Countrytext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Emailtext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Firsttext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Lasttext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".IDtext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Phonetext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Sextext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Statetext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Streettext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Suffixtext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Titletext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
d3.selectAll(".Ziptext")
    .transition()
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
}


function unsortSource(){
                var hScale = d3.scale.linear()
                    .domain([0, dataIs.length])
                    .range([topSpaceText3-5, height])  
        d3.selectAll(".outlineRects")
        .transition()
        .attr("y", function(d,i){
            return hScale(i)
        })
        .attr("height",function(d,i){
            return sourceHeight[i]+10;
        })

        d3.selectAll(".sourceRect")
        .transition()
        .attr("height",function(d,i){
            return sourceHeight[i];
        })
        .attr("y", function(d,i){ 
            return hScale(i)
        })

        d3.selectAll(".source1Text").transition().attr("opacity",1);

        d3.selectAll(".sourceText")
        .transition()
        .attr("opacity",1);
}



function callNon(){
                var hScale = d3.scale.linear()
                    .domain([0, dataIs.length])
                    .range([topSpaceText3-5, height])
                    var recordHScale = d3.scale.linear()
                        .domain([0, 2000000])
                        .range([topSpaceText3, height])   
            var rMargin = 130; 
                svg.selectAll("nonRect")
                    .data(d3.range(dataIs.length))
                    .enter()
                    .append("rect")
                    .attr("class","nonRect")
                    .attr("x", width-130) 
                    .attr("y", function(d,i){
                        return hScale(i);//fold/2 + i*25+10;
                    })
                        .attr("opacity", .5)
                        //     function(d,i){
                        //     if(i>0){
                        //         return .5;
                        //     }else{
                        //         return 0;
                        //     }
                        // })
                    .attr("fill", tamR)   
                    .attr("width", 0)
                    .attr("height",0)
                    .attr("stroke","white")
                    .transition()
                    .duration(2000)
                    .attr("width", 10)
                    .attr("height", uniHeight);

                svg.selectAll("nonRect2")
                    .data(d3.range(dataIs.length))
                    .enter()
                    .append("rect")
                    .attr("class","nonRect2")
                    .attr("x", width-120) 
                    .attr("y", function(d,i){
                        return hScale(i);//fold/2 + i*25+10;
                    })
                        .attr("opacity", .5)
                        //     function(d,i){
                        //     if(i>0){
                        //         return .5;
                        //     }else{
                        //         return 0;
                        //     }
                        // })
                    .attr("fill", tamR)   
                    .attr("width", 0)
                    .attr("height",uniHeight)
                    .attr("stroke","white")
                    .transition()
                    .duration(2000)
                    .attr("width", 10);
                svg.selectAll("nonRect3")
                    .data(d3.range(dataIs.length))
                    .enter()
                    .append("rect")
                    .attr("class","nonRect3")
                    .attr("x", width-110) 
                    .attr("y", function(d,i){
                        return hScale(i);//fold/2 + i*25+10;
                    })
                        .attr("opacity", .5)
                        //     function(d,i){
                        //     if(i>0){
                        //         return .5;
                        //     }else{
                        //         return 0;
                        //     }
                        // })
                    .attr("fill", tamR)   
                    .attr("width", 0)
                    .attr("height",uniHeight)
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

                // svg.append("text")
                //     .attr("class","sourceLabel")
                //     .attr("x", width-130)
                //     .attr("y", fold/2-10)
                //     .text("Non-unified")   
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






















// city

// city
// city
// city
// City
// city
// City
// CITY
// CITY
// CITY
// CITY
// City
// City
// city
// city
// city
// City, city, City, CITY, CITY, "CITY","city","city"]
var backHeight = 20;
function bottom(){
// d3.selectAll(".text3").transition().duration(2000).attr("opacity",0)
var off = 0;
            var hScale = d3.scale.linear()
                .domain([0, dataIs.length])
                .range([topSpaceRect, height])//+400])

            var height3Scale = d3.scale.linear()
                .domain([0, dataIs.length])
                .range([topSpaceRect, height])//+100])

        // svg.selectAll("textBottom")
        //     .data(dataTypes)
        //     .enter()
        //     .append("text")
        //     .attr("class", "label")
        //     .style("text-anchor", "middle")
        //     .attr("x", function(d,i){
        //         return xScale(d)+widthBottom/2;
        //     })
        //     .attr("y", (fold/2)-10)
        //     .text(function(d){ return d });
                city = 0;                  

        var j = 0;
           svg.selectAll("rectBack")
                .data(dataTypes)
                .enter()
                .append("rect")
                .attr("class", function(d,i){
                    return "back"+i;
                })
                .attr("x", function(d,i){
                    return xScale(d);
                })
                .attr("y",topSpaceText3-30)
                .attr("fill","none")
                .attr("opacity",.5)
                .attr("stroke","lightgray")
                .attr("width", wide)
                .attr("height",backHeight)

            svg.selectAll("topText")
                .data(dataNames)
                .enter()
                .append("text")
                .attr("class", "topText")
                .style("text-anchor", "middle")
                .attr("x", function(d,i){
                    return xScale(d)+wide/2;
                })
                .attr("y",topSpaceText3-16)
                .text(function(d){ return d })

        svg.selectAll("City2")
            .data(cityData)
            .enter()
            .append("rect")
            .attr("class", "City2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
            .attr("stroke","white")
            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("City");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Citytext")
            .data(cityData)
            .enter()
            .append("text")
            .attr("class", "Citytext")
                .style("text-anchor", "middle")
            .attr("opacity",off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("City")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("Age2")
            .data(ageData)
            .enter()
            .append("rect")
            .attr("class", "Age2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Age");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Agetext")
            .data(ageData)
            .enter()
            .append("text")
            .attr("class", "Agetext")
                .style("text-anchor", "middle")
            .attr("opacity",off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Age")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("Country2")
            .data(countryData)
            .enter()
            .append("rect")
            .attr("class", "Country2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Country");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Countrytext")
            .data(countryData)
            .enter()
            .append("text")
            .attr("class", "Countrytext")
                .style("text-anchor", "middle")
            .attr("opacity",off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Country")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("Email2")
            .data(emailData)
            .enter()
            .append("rect")
            .attr("class", "Email2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Email Address");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Emailtext")
            .data(emailData)
            .enter()
            .append("text")
            .attr("class", "Emailtext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Email Address")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("FirstName2")
            .data(firstData)
            .enter()
            .append("rect")
            .attr("class", "FirstName2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("First Name");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Firsttext")
            .data(firstData)
            .enter()
            .append("text")
            .attr("class", "Firsttext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("First Name")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("LastName2")
            .data(lastData)
            .enter()
            .append("rect")
            .attr("class", "LastName2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Last Name");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Lasttext")
            .data(lastData)
            .enter()
            .append("text")
            .attr("class", "Lasttext")
                .style("text-anchor", "middle")
            .attr("opacity",off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Last Name")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("ID2")
            .data(idData)
            .enter()
            .append("rect")
            .attr("class", "ID2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("ID");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("IDtext")
            .data(idData)
            .enter()
            .append("text")
            .attr("class", "IDtext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("ID")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("Phone2")
            .data(phoneData)
            .enter()
            .append("rect")
            .attr("class", "Phone2")
            .attr("opacity",  function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Phone Number");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Phonetext")
            .data(phoneData)
            .enter()
            .append("text")
            .attr("class", "Phonetext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Phone Number")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("Sex2")
            .data(sexData)
            .enter()
            .append("rect")
            .attr("class", "Sex2")
            .attr("opacity",  function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Sex");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Sextext")
            .data(sexData)
            .enter()
            .append("text")
            .attr("class", "Sextext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Sex")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("State2")
            .data(stateData)
            .enter()
            .append("rect")
            .attr("class", "State2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("State");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Statetext")
            .data(stateData)
            .enter()
            .append("text")
            .attr("class", "Statetext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("State")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("StreetAdress2")
            .data(stData)
            .enter()
            .append("rect")
            .attr("class", "StreetAddress2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Street Address");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Streettext")
            .data(stData)
            .enter()
            .append("text")
            .attr("class", "Streettext")
                .style("text-anchor", "middle")
            .attr("opacity",off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Street Address")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("Suffix2")
            .data(suffixData)
            .enter()
            .append("rect")
            .attr("class", "Suffix2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Suffix");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Suffixtext")
            .data(suffixData)
            .enter()
            .append("text")
            .attr("class", "Suffixtext")
                .style("text-anchor", "middle")
            .attr("opacity",off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Suffix")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("Title2")
            .data(titleData)
            .enter()
            .append("rect")
            .attr("class", "Title2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Title");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Titletext")
            .data(titleData)
            .enter()
            .append("text")
            .attr("class", "Titletext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Title")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })
        svg.selectAll("ZipCode2")
            .data(zipData)
            .enter()
            .append("rect")
            .attr("class", "ZipCode2")
            .attr("opacity", function(d,i){
                    if(d.length>0){
                        return .9;               
                    } 
                    else{ 
                        return 0;
                    }   
            })
            .attr("fill",tamR)
                        .attr("stroke","white")

            .attr("height",0)
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Zip Code");
            })
            .attr("width",widthBottom)
            .transition()
            .delay(del)
            .duration(2000)
            .attr("height", function(d,i){
                return uniHeight;//heightScale(i);
            })
            .attr("y", function(d,i){
                return hScale(i)
            })
        svg.selectAll("Ziptext")
            .data(zipData)
            .enter()
            .append("text")
            .attr("class", "Ziptext")
                .style("text-anchor", "middle")
            .attr("opacity", off)
            .attr("fill","white")
            .attr("y",topSpaceRect)
            .attr("x", function(d,i){
                return xScale("Zip Code")+wide/2;
            })
            .transition()
            .delay(del)
            .duration(2000)
            .attr("y", function(d,i){
                return hScale(i)+textSpace;
            })
            .text(function(d,i){
                return d;
            })











        .each("end", function(){
            var factor = 10;

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
            .attr("opacity",1)
            .attr("stroke","white")
            .attr("stroke-width", .2)  
        })
        // d3.selectAll("rect").attr("stroke","white");     
}

function undo(){
    // d3.selectAll(".text3").transition().duration(2000).attr("opacity",0);
    d3.selectAll(".line2").transition().duration(2000).attr("opacity",0);

d3.selectAll(".ID2, .Title2, .FirstName2, .LastName2, .Suffix2, .Email2, .Phone2, .StreetAddress2, .City2, .ZipCode2, .State2, .Country2, .Sex2, .Age2")
    .transition()
    .duration(1000)
    .attr("height",0)
    // .attr("y",topSpaceRect)

 d3.selectAll(".sourceText").transition().duration(1000).attr("opacity",0);

d3.selectAll(".sourceRect, .nonRect, .nonRect2, .nonRect3, .outlineRects")
    .transition().duration(1000).attr("height",0) 
}
function redo(){
    d3.selectAll(".sourceTop, .outlineTop, .nonTop").remove();

    d3.selectAll(".topLine").transition().attr("opacity",0);
                var factor = 0;
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
                d3.selectAll(".Age").transition().attr("height", ageTotal*factor);
    

    // d3.selectAll(".text3").transition().duration(1000).attr("opacity",0);
    d3.selectAll(".line2").transition().duration(2000).attr("opacity",1);
 d3.selectAll(".sourceText").transition().duration(1000).attr("opacity",1);




            var hScale = d3.scale.linear()
                .domain([0, dataIs.length])
                .range([topSpaceRect, height])//+400])

// d3.selectAll(".ID2, .Title2, .FirstName2, .LastName2, .Suffix2, .Email2, .Phone2, .StreetAddress2, .City2, .ZipCode2, .State2, .Country2, .Sex2, .Age2")
//     .transition()
//     .duration(1000)
//     .attr("y",function(d,i){
//         return hScale(i);
//     }) 
d3.selectAll(".ID2, .Title2, .FirstName2, .LastName2, .Suffix2, .Email2, .Phone2, .StreetAddress2, .City2, .ZipCode2, .State2, .Country2, .Sex2, .Age2")
    .transition()
    .attr("height",uniHeight)
                // d3.selectAll(".ID2").transition()
                // .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
                // d3.selectAll(".Title2").transition()
                //     .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
                //     d3.selectAll(".FirstName2").transition()
                //         .attr("y",function(d,i){
                //             return hScale(i);
                //         }) 
                // d3.selectAll(".LastName2").transition()    
                // .attr("y",function(d,i){
                //     return hScale(i);
                // }) 
                // d3.selectAll(".Suffix2").transition()    
                // .attr("y",function(d,i){
                //     return hScale(i);
                // }) 
                // d3.selectAll(".Email2").transition()    
                // .attr("y",function(d,i){
                //     return hScale(i);
                // }) 
                // d3.selectAll(".Phone2").transition()   
                // .attr("y",function(d,i){
                //     return hScale(i);
                // }) 
                // d3.selectAll(".StreetAddress2").transition()    
                // .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
                // d3.selectAll(".City2").transition()    
                // .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
                // d3.selectAll(".ZipCode2").transition()    
                // .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
                // d3.selectAll(".State2").transition()    
                // .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
                // d3.selectAll(".Country2").transition()    
                // .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
                // d3.selectAll(".Sex2").transition()    
                // .attr("y",function(d,i){
                //             return hScale(i);
                //         }) 
                // d3.selectAll(".Age2").transition()    
                // .attr("y",function(d,i){
                //         return hScale(i);
                //     }) 
    














        d3.selectAll(".sourceRect").transition().duration(1000)
                        .attr("height",function(d,i){
                            return sourceHeight[i];
                        })
        d3.selectAll(".outlineRects").transition().duration(1000)
                        .attr("height",function(d,i){
                            return sourceHeight[i]+10;
                        })
        d3.selectAll(".nonRect, .nonRect2, .nonRect3").transition().duration(1000)
                        .attr("height",function(d,i){
                            return uniHeight;
                        })



        // d3.selectAll(".sourceMid").transition().duration(1000)
        //             .attr("height", uniHeight);

        d3.selectAll(".outlineTop").transition().duration(1000)
                        .attr("height", function(d,i){
                            return recordScale(dataIs[1].Records)+10;
                        })
 // .sourceMid, .outlineTop                        
        d3.selectAll(".sourceText").transition().duration(1000).attr("opacity",1)   
}





























// svg.selectAll("rectBottom")
//     .data(dataIs)
//     .enter()
//     .append("rect")
//     .attr("class", function(d,i){
//         return dataTypes[i]+2;
//     })
//     .attr("width", 0)
//     .attr("height",0)
//     .attr("x", function(d,i){
//         // console.log(d);
//         var j = i;
//         var p;
//             if(j<dataTypes.length){
//                 p = saveOne[i][j];
//             }
//             if(d.hasOwnProperty(p)){
//                 // console.log(d)
//                 return xScale(p);                
//             } 
//             else{ 
//             }   
//     })
//     .attr("fill",tamR);
    // return "rgb("+colorScale(i)+","+100+","+100+")";
    // .attr("opacity", function(d,i){
    //     var j = i;
    //     var p;
    //         if(j<dataTypes.length){
    //             p = saveOne[i][j];
    //         }
    //         if(d.hasOwnProperty(p)){
    //             return .9;               
    //         } 
    //         else{ 
    //             return 0;
    //         }   
    // })
    // .transition()
    // .delay(del)
    // .duration(2000)
    // .attr("x", function(d,i){
    //     // console.log(d);
    //     var j = i;
    //     var p;
    //         if(j<dataTypes.length){
    //             p = saveOne[i][j];
    //         }
    //         if(d.hasOwnProperty(p)){
    //             // console.log(d)
    //             return xScale(p);                
    //         } 
    //         else{ 
    //         }   
    // })
    // .attr("y", function(d,i){   
    //         return fold/2;
    // })










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


//                 .on("mouseover", function(d,i){
// // var coordinates = [0, 0];
// // coordinates = d3.mouse(this);
// var x = (d3.select(this).attr("x"));
// var y = (d3.select(this).attr("y"))+20;
//                     svg.append("text")
//                         .attr("class","mouseLabel")
//                         .attr("x", x)
//                         .attr("y", y)
//                         // .attr("fill","white")
//                         .text(oneData[8])   
//                     // console.log("moused"+"text."+thisName)
//                 })
//                 .on("mouseout", function(d,i){
//                     // var thisName = (d3.select(this).attr("class"));
//                     d3.selectAll(".mouseLabel").transition().attr("opacity",0)
//                     // console.log("moused"+"text."+thisName)
//                 })


                // svg.append("text")
                //     .attr("class","sourceLabel")
                //     .attr("x", width-130)
                //     .attr("y", topSpaceText)
                //     .text("Non-unified")  