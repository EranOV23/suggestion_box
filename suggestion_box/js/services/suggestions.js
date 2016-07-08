app.factory('suggestions',[function(){
	var demoSuggestions = {
		posts: [
			{
				title: 'Free pizza at club meetings',
				upvotes: 15,
				comments: [
					{
					body: 'I LOVE PIZZA!! :)',
					likes: 0,
					}
				],
			},		
			{
				title: 'Happy Hour every Sunday evening',
				upvotes: 23,
				comments: [
					{
					body: 'Sunday is not an Happy day',
					likes: 0,
					}
				],
			},
			{
				title: 'End all club emails with Laffy Taffy jokes',
				upvotes: 9,
				comments: [
					{
					body: 'seriously?',
					likes: 5,
					}
				],
			},

			

		] 
	};
	return demoSuggestions;
}]);
