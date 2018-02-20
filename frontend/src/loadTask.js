function loadTaskPanel(){
	$('<div/>', {
   	 class:"taskAddition",
  	  height: 30,
   	  width: $("#taskCustomPanel").width() * 9.5/10
  	}).appendTo('#taskCustomPanel');
    
    $(".taskAddition").prepend('<a id="reject" style="text-decoration:none;" class="btn" href="#"><i class="fas fa-plus"></i> Add Task</a>');

     
}