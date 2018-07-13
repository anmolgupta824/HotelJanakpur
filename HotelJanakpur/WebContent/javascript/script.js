
// create the module and name it scotchApp    
var scotchApp = angular.module('RoutingApp', ['ngRoute']);  
  
// configure our routes    
scotchApp.config(function($routeProvider) {  
    $routeProvider  
  
    // route for the home page    
        .when('/', {  
        templateUrl: 'html/home.html',  
        controller: 'HomeCtrl'  
    })  
  
    // route for the about page    
    .when('/about', {  
        templateUrl: 'html/about.html',  
        controller: 'AboutCtrl'  
    })  
  
    // route for the contact page    
    .when('/contact', {  
        templateUrl: 'html/contact.html',  
        controller: 'ContactCtrl'  
    })
    .otherwise({
    	 templateUrl: 'html/home.html',  
         controller: 'HomeCtrl' 
    });
  
});  
  

