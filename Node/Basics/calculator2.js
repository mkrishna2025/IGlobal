// Exporting Object
var Calculator = {
	addition: function(x, y){
		return x + y;
	},
	subtraction: function(x, y){
		return x - y;
	},
	multiplication: (x, y) => {
		return x * y;
	},
	division: (x, y) => x / y
} 

module.exports = Calculator;