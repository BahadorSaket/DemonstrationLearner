var dataset = [
      {legend:"apple", value:10, color:"red"},
      {legend:"orange", value:45, color:"orangered"},
      {legend:"banana", value:25, color:"yellow"},
      {legend:"peach", value:70, color:"pink"},
      {legend:"grape", value:20, color:"purple"}
      ];

    var radius = 170;

    var svg = d3.select("#visContainer").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(30);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d){ return d.value; });

    var g = svg.selectAll(".fan")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class", "fan")

    g.append("path")
      .attr("d", arc)
      .attr("class","item")
      .attr("fill", function(d){ return d.data.color; })
    
    g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.legend; });