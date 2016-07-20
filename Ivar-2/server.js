var express = require('express');
var app = express();
var phoneBook = require('./model/map.js');

var port = 3000;

var searchTerm = "Ivar Chan";
var results = [];

function Yeah(){

    for (var i = 0; i < 6; i++) {
    // console.log(i)
    // console.log(phoneBook[i].firstName)
    // console.log("starting next loop")
    if(searchTerm == phoneBook[i].lastName){
      var lookFor = /phoneBook[i].lastName/i;
      results = phoneBook[i].lastName+", "+phoneBook[i].firstName+"."
      console.log(results)

    }
  }

  // console.log(phoneBook[searchTerm].phone)
}

Yeah()

//change data map to All jacobs, all Chans,


// The string:
var str = "Hello world!";

// Look for "Hello"
var patt = /Hello/g;
var result = patt.test(str);

// Look for "W3Schools"
patt2 = /World/i;
result2 = patt2.test(str);

console.log(result2)




////==================Server Spinning==========================================
app.listen(port, function(){
  console.log('Server is spinning ' + "on " + port + ",bruh")
})
