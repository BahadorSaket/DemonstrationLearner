
function unbindEvents(){
	$("body").find("*").each(function() {
	  $(this).off("click");
	});
}

function addInteractivity(){
  var visType;
  visType= getVisType();
 // addInteractivityChart(visType);

  $('.item').on('click', function(){
		itemSelection(this);
  });

  $('.featureBtn').on('click', function(){
		updateFeatureBtnStatus(visType);
  });

  $('.cancelFeatureChanges').on('click', function(){
		updateFeatureBtnStatus(visType);
  });

  $('.applyFeatureChanges').on('click', function(){
  	    var listActFeatures= getListActivatedFeatures();
     	updateFeatureBtnStatus(visType);
     	addInteractivityChart(visType,listActFeatures);
  });
}



function getVisType(){
   if($('.item')[0].tagName =="circle")
   {
   		if($('.node').length > 0 && $('.node').length > 0)
   		{
   			return "graph";
   		}
   		else
   		{
   			return "scatterplot";
   		}
   }
   else if($('.item')[0].tagName =="rect")
   {
   		return "barchart";
   }
   else if($('.item')[0].tagName =="path")
   {
   		return "linechart";
   }
}

function updateFeatureBtnStatus(visType){
	if(d3.select(".featureBtnContainer").classed("featureBtnSelected"))
	{
		$(".featureBtnContainer" ).removeClass("featureBtnSelected");

		$("#featureMenu").hide("slow");


	} 
	else{
		$(".featureBtnContainer" ).addClass("featureBtnSelected");
	
		$(".featureMenu").hide();
		$("#featureMenu").show("slow");

		if(visType =="scatterplot")
		{   
			$(".scatterplotFeatureMenue").show();
		}
		else if(visType=="graph")
		{
			$(".graphFeatureMenue").show();
		}
		else if(visType=="barchart")
		{
			$(".barchartFeatureMenue").show();
		}
	}
}


function getListActivatedFeatures(){
	var selected=[];
	$('div#featureMenu input[type=checkbox]').each(function() {
	   if ($(this).is(":checked")) {
	       selected.push($(this).val());
	   }
	});
	return selected;
}

function addInteractivityChart(visType,listActFeatures){
	// var selectedFeatures = getSelectedFeatures();
	if(visType == "barchart"){
		barAddInteraction(listActFeatures);
	}
}


function itemSelection(elm){
	if(d3.select(elm).classed("itemSelected"))
	{
		$(elm).removeClass("itemSelected");
	}
	else
	{
		$(elm).addClass("itemSelected");
	}
}