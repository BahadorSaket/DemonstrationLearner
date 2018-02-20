
var dx,dy;

function barUnbindEvents(){
	d3.selectAll('.item').each(function(d) {
  		d3.select(this).on('mousedown.drag', null);
    });

    $("#dialog").hide();
}

function barAddInteraction(listFeatures){
	barUnbindEvents();
	for(i=0;i<listFeatures.length;i++)
	{
		if(listFeatures[i]=="Position")
		{
			positionChangeBar();
		}
		else if(listFeatures[i]=="Color")
		{
			colorChangeBar();
		}
		else if(listFeatures[i]=="Height")
		{
			heightChangeBar();
		}
		else if(listFeatures[i]=="Width")
		{
			widthChangeBar();
		}
	}
}

function positionChangeBar(){
  	d3.selectAll('.item').each(function(d) {
  		d3.select(this).call(drag);
    });
}

function colorChangeBar(){
	
  	d3.selectAll('.item').each(function(d) {
  		d3.select(this).on("click", function (d, i) { 
  			console.log("fire")
  			$("#dialog").show();
             
			$('#dialog').dialog({
				height: 100,
				width: 50,
				modal: false,
				dialogClass: 'no-close success-dialog',
				bgiframe: true,
				close: (d) =>{
				  d3.selectAll(".itemSelected").classed("itemSelected",false)
				}
			});

			$("#colorWell").change((d) =>{
				d3.selectAll(".itemSelected").attr("fill", function(){
					return $("#colorWell").val();
				});
			});
  		});

    });

}


function widthChangeBar(){
	
}

function heightChangeBar(){

}


var drag = d3.behavior.drag()
    .origin(function(d) { return d; })
    .on("dragstart", dragstarted)
    .on("drag", dragged)
    .on("dragend", dragended);

function dragstarted(d) {
	if(d3.select(this).classed("itemSelected"))
	{
	  d3.event.sourceEvent.stopPropagation();
	  dx = Number(d3.select(this).attr("x"));
	  dy = Number(d3.select(this).attr("y"));
	}
}

function dragged(d) {
	if(d3.select(this).classed("itemSelected"))
	{
	  dx= dx + d3.event.dx;
	  dy= dy + d3.event.dy;
	  d3.select(this).attr("x", dx).attr("y", dy);
	}
}

function dragended(d) {
  // d3.select(this).classed("dragging", false);
}
