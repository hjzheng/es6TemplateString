//include ejs and multiline js file in brower
ejs.open = '${';
ejs.close = '}';

function es6TemplateString(func, obj) {
   return ejs.render(multiline(func), obj); 
}
