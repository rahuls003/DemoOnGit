

var app=angular.module('RoutingApp', ['ngRoute']);

app.config( ['$routeProvider', function($routeProvider) {
  $routeProvider
  
   .when('/first', {
    templateUrl: 'first.html'
   })
   
   .when('/second', {
    templateUrl: 'second.html'
   })
   
   .when('/job', {
    templateUrl: 'Job/job.html',
    controller : 'JobController1'
   })
   
   .when('/login', {
    templateUrl: 'Login/login.html',
    controller : 'UserController1'
   })
   
   .when('/register', {
    templateUrl: 'register.html'
   })
   
   .otherwise({
    redirectTo: '/'
   });
 }]);


/*var app=angular.module('myApp',['ngRoute']);


app.config(function($routeProvider)
{
		  $routeProvider	
	      
	      .when('/',{
	    	  templateUrl:'index.html'
	      })
	      
	      .when('/Login',{
	    	  templateUrl:'Login.html'
	      })
	      
	      .when('/Register',{
	    	  templateUrl:'Register.html'
	      })
		
	      .otherwise({redirectTo: '/'});
});*/