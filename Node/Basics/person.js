// Exporting Class created by approach 2
var Person = function(){
	var name = '';
	this.setName = value => name = value;
	this.getName = () => name;
}

module.exports = Person;