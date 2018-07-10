var search;
var numRecords;
var startDate = 19201201
var endDate = 20201201
//ajax request
$("#submit-button").on("click",function(e){
    e.preventDefault();
    search = $("#search-term").val()
    console.log(search)

console.log(search)

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  'api-key': "29682e6e1b2e47189cfaa9a29501b31a",
  'q': search,
  'begin_date': startDate,
  'end_date': endDate,
  'sort': "newest",
  'page': numRecords,
});

  console.log(url)

$.ajax({
        url: url,
        method: "GET"
      })

    
        .then(function(e) {
            console.log(e.response.docs.length);
            for(i = 0; i < e.response.docs.length; i++){
                console.log(i);
                var $p = $("<p>");
                $p.append(e.response.docs[i].web_url);
                $("#article-holder").prepend($p);  
            }
            console.log("Web URL: " + e.response.docs[0].web_url)

        });
});