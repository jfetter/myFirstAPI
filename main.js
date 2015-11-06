"use strict";

// gravitar component will take in an email address
// and plug it in to a url then spit out the
// url of gravitar. instructions: https://www.npmjs.com/package/md5

var math = require("./math")
var md5 = require("md5")
var _= require("lodash");

//var npm = require("npm");
// npm.load(myConfigObject, function (er) {
//   if (er) return handlError(er)
//   npm.commands.install(["some", "args"], function (er, data) {
//     if (er) return commandFailed(er)
//     // command succeeded, and data might have some info
//   })
//   // npm.registry.log.on("log", function (message) { .... })
// })

var http = require("http")
var server = http.createServer(function(req, res){
	//res.setHeader("Access-Control-Allow-Origin", "http://localhost:3005")

	var urlify = req.url
	var input = req.url.split("/")
	var operator = input[2];

if (input[1] === "math"){	
	console.log(req.url)
	switch(operator){
		
			case "sum":

					var sum = math.sum(input)
					//res.write("sum is" + sum + "\n");
					res.write(`the sum is  ${sum}
						` )
		  		break;

		  	case "square":
			  	var square = math.square(input)
			  	res.write(input[2] + "squared is: " + square +" \n")
			  	break;

		  	case "cube":
			  	var cube = math.cube(input)
			  	res.write(input[2] + " cubed is: " + cube + " \n")
			  	break;

		  	case "inverse":
			  	var inverse = math.inverse(input)
			  	res.write("the inverse of" + input[2] + "/" + input[2] + "is" + inverse+"\n")
			  	break;
				  }
	} else if(input[1] == "gravitar"){
		var email = md5(input[2]);
		var imageURL = "https://s.gravatar.com/avatar/" + email;
		console.log(imageURL)
	} else if (input[1] == "sentence"){
		var text = decodeURI(input[2])
		console.log(text);
		var trimmedText = text.trim();
		var chars = text.length;
		var spaces = text.match(/\s/g).length;
		var words = trimmedText.match(/[a-z]\s/ig).length + 1;
		var avg = (chars - spaces) /words;
		console.log(words + " words, " + chars + " characters, " + spaces + "spaces. Average word length is " + avg + " characters\n")
		res.write(words + " words, " + chars + " characters, " + spaces + "spaces. Average word length is " + avg + " characters\n");
	} else {
		res.write( "Como? que-que?\n")
		res.end();
	 	}
});


server.listen(3005);

