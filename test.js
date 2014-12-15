var es6TemplateString = require('./index');

//Basic usage with an expression placeholder
var person = "Hao Ju Zheng";

console.log(es6TemplateString(function(){/*!
Yo My name is ${= person }
*/}, {'person': person}));


//Expressions work just as well with object literals
var user = {name: "Zhen Ou Yun"};

console.log(es6TemplateString(function(){/*!
Thanks, ${= name }
*/}, user));


//Multi-line strings without needing \n\
console.log(es6TemplateString(function(){/*!
string text line 1
string text line 2
*/}, {}));


//Function inside expressions
function fn() {return "result"}
console.log(es6TemplateString(function(){/*!
foo ${= fn() } bar
*/}, {'fn': fn})); 
