

app.controller('JobController1',['$scope',function($scope)
  {
	
	alert("Welcome to Job Controller");
	
	$scope.msg="Enter Job Controller";
	
	$scope.job=
		{
			"id":"1",
			"title":"technical lead",
			"qualification":"B.Tech"
		}
	
	$scope.jobs=
	[
			{"id":"1","title":"technical lead","qualification":"B.Tech"},
			{"id":"2","title":"technical lead","qualification":"M.Tech"},
			{"id":"3","title":"technical lead","qualification":"MCA"}
	]
	
  }]);



