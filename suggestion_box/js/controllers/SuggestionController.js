app.controller('SuggestionController',
			['$scope','$routeParams','suggestions',
			function($scope,$routeParams, suggestions){

					$scope.post = suggestions.posts[$routeParams.id];

					$scope.addComment = function(){

	 				//if input empty, don't submit??

	 		 		//push suggestion posts in suggestions.js
	 					$scope.post.comment.push({
	 					title: $scope.title,
	 					upvotes: 0,
						id: $scope.post.comment.length

	 				});
	 			 	
	 			 		//after submit, clear input
			 			$scope.title='';

					};

					//add +1 to suggestion
					$scope.upVote = function(comment) {              
						comment.upvotes += 1;          
				}; 

			}]);