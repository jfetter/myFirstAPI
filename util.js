var _=require("lodash");
	
	var double= function(n){

		return n * 2;
	};

	// let double = ne => n*2

exports.square = n => n*n

exports.cube = n => n* n*n;

exports.sum = nums => nums.reduce((sum,n) =>sum +n,0);

exports.double = double; 