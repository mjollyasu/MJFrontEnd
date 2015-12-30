(function(){
	
	var app = angular.module('main-directives',[]);
	
	//<--------- Header components --------->
	app.directive("mainHeader", function() {
		    return {
		      restrict: 'E',
		      templateUrl: "views/partial/mainHeader.html"
		    };
		  });
	
	//<--------- Contact page components --------->
	app.directive("sendMsg", function(){
		return{
			restrict: 'E',
			templateUrl: "views/partial/sendMsg.html"
		};
	});
	 
	app.directive("wall", function(){
		return{
			restrict: 'E',
			templateUrl: "views/partial/wall.html"
		};
	});
	
	//<--------- About page components --------->
	app.directive("aboutPanels", function(){
		return{
			restrict: 'E',
			templateUrl: "views/partial/aboutPanels.html"
		};
	});
	
	//<--------- Resume page components --------->
	app.directive("professionalExperience", function(){
		return{
			restrict: 'E',
			templateUrl: "views/partial/professionalExperience.html"
		};
	});
	
	app.directive("education", function(){
		return{
			restrict: 'E',
			templateUrl: "views/partial/education.html"
		};
	});
	
	app.directive("technologies", function(){
		return{
			restrict: 'E',
			templateUrl: "views/partial/technologies.html"
		};
	});
})();


