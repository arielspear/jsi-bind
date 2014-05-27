module.exports.partialRight = function(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function(){
		var remainingArgs = Array.prototype.slice.call(arguments, 0);
		var completedArgs = args.concat(remainingArgs);
		return fn.apply(this, completedArgs);
	};	
};

var partial = function(fn){
	var args = Array.prototype.slice.call(arguments, 1);
	return function(){
		var remainingArgs = Array.prototype.slice.call(arguments, 0);
		var completedArgs = args.concat(remainingArgs);
		return fn.apply(this, completedArgs);
	};
};