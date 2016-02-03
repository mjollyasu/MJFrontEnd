(function(){
	
	var app = angular.module('routing',[]);	
	
	app.config(function($routeProvider, $locationProvider) {
	    $routeProvider
	    	.when('/contact', { 
	    		templateUrl: "views/contact.html" 
	    })
	    
        .when('/', {
            templateUrl : 'views/main.html'  
        })

        .when('/resume', {
            templateUrl : 'views/resume.html'
        })
        
        .when('/about', {
        	templateUrl: 'views/about.html'
        })

        .when('/contact', {
            templateUrl : 'views/contact.html', 
            controller : 'MsgController as msgCtrl'
        });
	})
	
})();