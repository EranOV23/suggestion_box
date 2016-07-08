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
	 					$scope.post.comment.push({
	 					body: $scope.body,
	 					upvotes: 0,
	 				});
	 			 	
	 			 		//after submit, clear input
			 			$scope.body='';

					};

					//add +1 to suggestion
					$scope.upVote = function(comment) {              
						comment.upvotes += 1;          
				}; 

			}]);
