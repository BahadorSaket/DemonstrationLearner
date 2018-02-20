function readMultipleFiles(callback) {
    $('#visContainer').empty();
    var reader = new FileReader();
    unbindEvents();
    reader.readAsText($("#filebutton")[0].files[0], "UTF-8");
    reader.onload = function (evt) {
      $( ".featureBtnContainer" ).slideDown( "slow", function() {
          var width= $("#visContainer").width();
          var height= $("#visContainer").height();
          var str = " var margin = {top: 70, right: 15, bottom: 80, left: 60}, width =" + String(width) + "- margin.left - margin.right , height ="+ String(height)+"- margin.top - margin.bottom;"
          $('<script id="appendedScript">' + str + (evt.target.result) +"</"+"script>").appendTo("#visContainer");
          callback();
          loadTaskPanel();
      });
    }
    reader.onerror = function (evt) {
        console.log(evt.target.result)
    }
}
