"use strict";

// gravitar component will take in an email address
// and plug it in to a url then spit out the
// url of gravitar. instructions: https://www.npmjs.com/package/md5

var math = require("./math")

var _= require("lodash");

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

			  	default:
						res.write( "Unkown operation\n")
						res.end();
				  }
} else {
			switch(operator){

				case "gravitar":
	  		var imageURL;
	  		var email = input[1];
	  		console.log("email" + email)

	  		break;
	  	case "sentence":
	  		var words = 0;
	  		var spaces =0;
	  		var characters=0;
	  		var avgLength =0; 
	  		console.log("words" + words)
	  		break;

	  	default:
				res.write( "Unkown operation\n")
				res.end();
 	 		}
		}
});


server.listen(3005);

