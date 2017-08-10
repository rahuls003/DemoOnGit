

app.controller("UserController1",["$scope",function($scope)
  {
	
	alert("Welcome to Login Controller");
	
	$scope.msg="Enter User Controller"

    
	$scope.user=
		{
			"id":"",
			"password":""
		}
	
	$scope.register =function()
		{
			console.log("ID : " + $scope.user.id)
			console.log("PASSWORD : "+ $scope.user.password)
		}
	
	$scope.validate =function()
		{
		
				if($scope.user.id=="niit" && $scope.user.password=="niit"){
					alert("valid credentials");
				}else{
					alert("Invalid Credentials");
				}
		
		}
		
	
	
  
  }]);

