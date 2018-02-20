    data = [{
            "facilityId": "Cat",
            "responseCount": 2
        }, {
            "facilityId": "Cat",
            "responseCount": 2
        }, {
            "facilityId": "Rabit",
            "responseCount": 1
        }, {
            "facilityId": "Dog",
            "responseCount": 3
        }, {
            "facilityId": "Rabit",
            "responseCount": 3
        }, {
            "facilityId": "Rabit",
            "responseCount": 1
        }, {
            "facilityId": "Cat",
            "responseCount": 2
        },
         {
            "facilityId": "Cat",
            "responseCount": 2
        },
         {
            "facilityId": "Dog",
            "responseCount": 4
        },
         {
            "facilityId": "Deer",
            "responseCount": 8
        }, {
            "facilityId": "Bat",
            "responseCount": 7
        },
         {
            "facilityId": "Camel",
            "responseCount": 6
        },
         {
            "facilityId": "Dog",
            "responseCount": 4
        }, 
        {
            "facilityId": "Deer",
            "responseCount": 8
        }, {
            "facilityId": "Bat",
            "responseCount": 7
        },
         {
            "facilityId": "Camel",
            "responseCount": 6
        },
         {
            "facilityId": "Camel",
            "responseCount": 6
        },
         {
            "facilityId": "Deer",
            "responseCount": 8
        }]

    var color = d3.scale.category10();

    var bubble = d3.layout.pack()
                .sort(null)
                .size([width, height])
                .padding(1.5);


    var svg = d3.select("#visContainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "bubble");


    //convert numerical values from strings to numbers
    data = data.map(function(d){ d.value = +d.responseCount; return d; });

    //bubbles needs very specific format, convert data to this.
    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

    //setup the chart
    var bubbles = svg.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes)
        .enter();

    //create the bubbles
    bubbles.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) { return color(d.value); });

    //format the text for each bubble
    bubbles.append("text")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d.facilityId; })
        .style({
            "fill":"white", 
            "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
            "font-size": "12px"
        });