var multiline = require('multiline');
var ejs = require('ejs');

exports = module.exports = es6TemplateString;

ejs.open = '${';
ejs.close = '}';

function es6TemplateString(func, obj) {
   return ejs.render(multiline(func), obj); 
}
