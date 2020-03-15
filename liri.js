const dotenv = require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require('axios');
//const moment = require("moment");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var op = process.argv[2];
var input = process.argv.slice(3);

if (op === "concert-this") {

   axios.get("https://rest.bandsintown.com/artists/" + input.join(" ") + "/events?app_id=codingbootcamp")
  .then(function(response) {
   
    console.log(response.data);
  })
} else if (op === "spotify-this-song") {
    spotify.search({ type: 'artist', query: `${input}`}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });

} else if (op === "movie-this") {
    console.log(input) ;
    
    var query =  axios.get("http://www.omdbapi.com/?t=" + input.join("+") + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
    console.log(response.data);
  })
  

} else if (op === "do-what-it-says") {

}