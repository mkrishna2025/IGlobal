class Father {
	getGender(){
		return "Male";
	}
	getName(){
		return "Venkat";
	}
}

class Son extends Father {
	getName(){
		return "Prakash";
	}
	getAge(){
		return 10;
	}
}

module.exports = Son;