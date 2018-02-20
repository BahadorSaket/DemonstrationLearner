  var dataset = [ 5, 10, 12, 17, 23, 25, 21, 16, 11, 14, 22, 18, 9, 3 ];
    var svg = d3.select("#visContainer")
                .append("svg")
                .attr({
                  width: width + margin.left + margin.right,
                  height: height + margin.top + margin.bottom
                })
                .append("g")
                .attr("transform", "translate(" + [margin.left, margin.top] + ")");
    var xScale = d3.scale.ordinal()
                  .rangeRoundBands([0, width], 0.1);
    var yScale = d3.scale.linear()
                  .range([height, 0]);
    var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom");
    var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left");
    xScale.domain(d3.range(dataset.length));
    yScale.domain([0, d3.max(dataset)]);
    // Build the viz
    var rects = svg.selectAll("rect.bar")
                    .data(dataset);
    rects.enter()
            .append("rect")
            .classed("bar", true)
            .attr("class","item")
            .attr({
              x: function(d, i) { return xScale(i); },
              y: function(d) { return yScale(d); },
              height: function(d) { return height - yScale(d); },
              width: xScale.rangeBand()
            });
            
    svg.append("g")
      .classed("x axis", true)
      .attr("transform", "translate(" + [0, height] + ")")
      .call(xAxis);
    svg.append("g")
      .classed("y axis", true)
      .call(yAxis);