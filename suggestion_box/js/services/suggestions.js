app.factory('suggestions',[function(){
	var demoSuggestions = {
		posts: [
			{
				title: 'Happy Hour every Sunday evening',
				upvotes: 23,
				comments: [],
			},
			{
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: [],
			},
			{
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: [],
			},



		]
	};
	return demoSuggestions;
}]);