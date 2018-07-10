var search;
var numRecords=""
var startDate = 19201201
var endDate = 20201201
//ajax request
var test = $("#search-term").val()
console.log(test)
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "29682e6e1b2e47189cfaa9a29501b31a",
  'q': search,
  'begin_date': startDate,
  'end_date': endDate,
  'sort': "newest",
  'page': numRecords

});

  console.log(url)

$.ajax({
        url: url,
        method: "GET"
      })

    
        .then(function(response) {

            

            console.log(response)
            console.log("Web URL: " + response.response.docs[0].web_url)
            $("#submit-button").on("click",function(e){
              e.preventDefault();
              search = $("#search-term").val()
              console.log(search)
              $("#articleHolder").text(response.response.docs[0].web_url)
            })


        });