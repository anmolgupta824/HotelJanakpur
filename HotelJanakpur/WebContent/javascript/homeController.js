

angular.module('RoutingApp').controller('HomeCtrl',function($scope)
		{
				$scope.HomeMessage = 'Home Controller Called !!!';
				
				document.addEventListener('DOMContentLoaded', function() {
				    var elems = document.querySelectorAll('.carousel');
				    var instances = M.Carousel.init(elems, options);
				  });
			
				 
					 
		
		});