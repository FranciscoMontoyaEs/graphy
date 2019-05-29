var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var data = [{pointX: 100, pointY: 200}, 
  {pointX: 300, pointY: 300},
  {pointX: 400, pointY: 500},
  {pointX: 400, pointY: 300}]

getData()

var svg = d3.select("#dataShow")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
  .domain([0, 500])
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

var y = d3.scaleLinear()
  .domain([0, 500])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

svg.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function (d) { return x(d.pointX); } )
    .attr("cy", function (d) { return y(d.pointY); } )
    .attr("r", 2.5)
    .style("fill", "#69b3a2")

function getData(){
  for(var i = 0; i < 100; i++){
    data.push({pointX: Math.floor(Math.random()* 500), pointY: Math.floor(Math.random()* 500)})
  }
}