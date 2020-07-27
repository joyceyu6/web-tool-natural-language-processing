var path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config()

var AylienNewsApi = require("aylien-news-api");
var defaultClient = AylienNewsApi.ApiClient.instance;

var app_id = defaultClient.authentications["app_id"];
// app_id.apiKey = process.env["NEWSAPI_APP_ID"];
app_id.apiKey = process.env.API_ID;

var app_key = defaultClient.authentications["app_key"];
// app_key.apiKey = process.env["NEWSAPI_APP_KEY"];
app_key.apiKey = process.env.API_KEY;

// var aylienapi = new aylien({
//     application_id: process.env.API_ID,
//     application_key: process.env.API_KEY
//  }); 

var api = new AylienNewsApi.DefaultApi();
//var api = new AylienNewsApi.DefaultApi(defaultClient);









// var json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

// console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// app.get('/test', function (req, res) {
//     res.json(mockAPIResponse);
// })

app.get('/test', function (req, res) {
    console.log(req.query.name);
    console.log(req.query);

    var opts = {
        title: req.query.name,
        sortBy: "social_shares_count.facebook",
      //   notLanguage: ["en"],
        publishedAtStart: "NOW-7DAYS",
        publishedAtEnd: "NOW",
      //   entitiesBodyLinksDbpedia: [
      //     "http://dbpedia.org/resource/Donald_Trump",
      //     "http://dbpedia.org/resource/Hillary_Rodham_Clinton"
      //   ]
    };
    

    var allData = {
        titles: [], 
        sources:[],
        };

var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      
      console.log("API called successfully. Returned data: ");
      console.log("========================================");
      for (var i = 0; i < data.stories.length; i++) {
          allData.titles.push(data.stories[i].title);
          allData.sources.push(data.stories[i].source);  
          
          console.log(data.stories[i].title + " / " + data.stories[i].source.name);
      }
      res.json(allData);
  
    }
  }

    api.listStories(opts, callback);

   
})


// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
