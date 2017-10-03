var counter = function(){
	return 'this is good';
};

var adder = function (a,b){
	return `The sum is ${a+b}`;
};

module.exports = {
	counter : counter,
	adder : adder 
}