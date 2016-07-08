app.controller('SuggestionController',
			['$scope','$routeParams','suggestions',
			function($scope,$routeParams, suggestions){

			        // Put individual post ID in an object
					$scope.post = suggestions.posts[$routeParams.id];


					$scope.addComment = function(){

	 				//if input empty, don't submit??
			            if (!$scope.body || $scope.body === '') {
    		            return;
            			}
 
 	 		 		//push suggestion posts in suggestions.js
	 					$scope.post.comments.push({
	 					body: $scope.body,
	 					likes: 0,
	 				});
	 			 	
	 			 		//after submit, clear input
			 			$scope.body='';
	 					likes: 0;


					};

					//add +1 to suggestion
					$scope.likes = function(comment) {              
						comment.likes += 1;          
				}; 

			}]);
