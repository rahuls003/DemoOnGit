

app.service("UserService",function()
  {
	
	alert("Welcome to Login Controller");
	
	
	this.validate =function(id,password)
	{
	
			if(id=="niit" && password=="niit")
			{
				alert("valid credentials");
			}
			else
			{
				alert("Invalid Credentials");
			}
	
	}
	
	this.register=function(user)
	{
		alert("Successfully Registered")
	}
	
  });	