(function(){
	
	var app = angular.module('mj',[ 'ngRoute', 'ngResource', 'main-directives', 'routing']);
	
	//<--------------------------------------------------------       Services        -----------------------------------------------------> 
	  
	//Message service
	app.service('MsgService', ['$http', '$location',  function($http, $location){
		
		//Stores current list of messages
		var messages = [];
		
		//Returns the current list of messages
		this.getMsgs = function(){
			return messages;
		};
				
		//Get all public messages via get request to back-end webservice
		this.fetchMsgs = function()
		{
			console.log("Fetching");
			$http.get('http://nwpc-env-mtj7sfjubd.elasticbeanstalk.com/service/messages').success(function(data){            	  
				console.log("fetched ----> " + JSON.stringify(data));
          	 	messages = data;          	 	
            });	           	
		};
		
		//Send a new message via post request to the back-end webservice
		this.sendMsg = function(msg)
		{
			console.log("sending");
			
			$http.post('http://nwpc-env-mtj7sfjubd.elasticbeanstalk.com/service/sendMsg', msg,{headers : {
	          	  'Content-Type' : 'application/json; charset=UTF-8',
	          	  'Accept': 'application/json' 
	            }}).success(function(data){  
	            	console.log("Sent and retrieved --> " + JSON.stringify(data));
	          	 	messages = data;
		    	});
		}
	}]);
	
	
	//<--------------------------------------------------------       Controllers        ----------------------------------------------------->
	//Message controller
	app.controller('MsgController', ['MsgService', '$scope', function(MsgService, $scope){
		$scope.msgOut = {};
		$scope.messages = MsgService.fetchMsgs();
		
		//Get all messages via message service
		this.callMsgSvc = function(){			
			$scope.messages = MsgService.getMsgs();
			return $scope.messages;		
		};
		
		//Send a new message via message service
		this.sendMsg = function(){
			this.msgOut.idmessages = -1;
			this.msgOut.createdAt = "";
			if(!this.msgOut.private_)
			{
				this.msgOut.private_ = 0;
			}
			MsgService.sendMsg(this.msgOut);
			this.msgOut = {};			
		};
		
	}]);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
})();