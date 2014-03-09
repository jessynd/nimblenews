var nn = {};

nn.api_key = "7E776CF1C5DD322E58250545B073106D:5:68907953";
nn.buri = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
nn.userSearch = $("input.search").val()




nn.getNews = function(){

	$.ajax(nn.buri + "fq=" + nn.userSearch + "&api-key=" + nn.api_key , {
		dataType: "jsonp",
		type: "GET",
		success : function(data){
			console.log(data)
			nn.displayNews(data.response)
		} //end success
	}); //end ajax

} //end getNews



