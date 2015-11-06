var _=require("lodash");
	
	var double= function(n){
		return n * 2;
	};

function sum(nums){
	nums = nums.splice(3)

	return nums.reduce(function(sum, n){
	n = Number(n);
	sum = sum + n; 
	return sum; 
},0);
}

function square(nums){
	var n = Number(nums[3]);
	return n*n
}

function cube (nums) {
	var n = Number(nums[3])
	return n*n*n;
}

function inverse (nums) {
	var x = nums[3]
	var y = nums[4]
	return x +"/" +y
}

	// let double = ne => n*2

exports.square = square;

exports.cube = cube;

exports.sum = sum; 

exports.double = double; 

exports.inverse = inverse;