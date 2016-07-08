app.factory('suggestions',[function(){
	var demoSuggestions = {
		posts: [
			{
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: ['good'],
			},		
			{
				title: 'Happy Hour every Sunday evening',
				upvotes: 23,
				comments: ['bad'],
			},
			{
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: ['fine'],
			},

			

		] 
	};
	return demoSuggestions;
}]);
