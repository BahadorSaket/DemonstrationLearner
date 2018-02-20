(function(){

	// call it visex - short for Vis Examplar

  visType = "scatter";
  demoType ="";
  initialData =[] 
  newData = [];

  window.visMl = {};

  radius = 7;
  originalColor = "#3385ff";
  MlModels={"logestic,":false, "decision,":false, "mlp,":false};
  // demo = new demoClassifier();
  // obj = new featureExtraction();

  userID= new Date().valueOf();



  $(".developerView").width(9.84/10*$(window).width()).height(9/10*$(window ).height());

  var margin = {top: 40, right: 100, bottom: 10, left: 40},
  width = 5/10 * $(window ).width() - margin.left - margin.right,
  height = 9.7/10 * $(window ).height() - margin.top - margin.bottom;
  
  $("#visContainer, #taskCustomPanel").height($(window).height() - ( 0.1/100*$(window ).height() + margin.top + margin.bottom));
  $(".viewPanel").height(0.1/100*$(window ).height()+ margin.top + margin.bottom)
  
  // loading and adjusting all divs
  $('select').niceSelect();


// buttons for changing the view from user view to developer view
  $(".userButton").click(function(){
    $(".developerView, .devMenu").hide();
    $(".userView").show();
  })

  $(".devButton").click(function(){
    $(".userView").hide();
    $(".developerView, .devMenu").show();
  })
 
})();





