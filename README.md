es6TemplateString
===================

使用ejs和multiline 实现ES6 Template String的功能

#### ES6 Template String 支持的功能 

```javascript
//Basic usage with an expression placeholder
var person = 'Hao Ju Zheng';
console.log(`Yo! My name is ${person}`);

//Expressions work just as well with object literals
var user = {name: 'Zhen Ou Yun'};
console.log(`Thanks, ${user.name}`);

//Expression interpolation, One use is readable inline math.
var a = 50;
var b = 100;
console.log(`The number of JS frameworks is ${a + b} and not ${ 2 * a +b }`);

//Multi-line strings without needing \n\
console.log(`string text line 1
string text line 2`);

//Function inside expressions
function fn() {return "result"}
console.log(`foo ${fn()} bar`);
```

#### 浏览器支持情况

- firefox 34及其以上版本
- Chrome [马上会支持][4]

详见[ES6兼容表][3]

#### 使用ejs和multiline的实现的es6TemplateString

```javascript
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
```
#### 使用es6TemplateString

- 浏览器
   - 引入[ejs][2]和[multiline][1]
   - 引入es6TemplateString.js
- nodejs
   - ```npm install es6templatestring```
   - ```var es6TemplateString = require('es6templatestring');```
   - 参见 [test.js][0]
   
#### 关于更多问题，大家可以参见[ejs][2]和[multiline][1]的README文件
   
[0]:https://github.com/hjzheng/ES6-Template-String/blob/master/test.js
[1]:https://github.com/sindresorhus/multiline
[2]:https://github.com/tj/ejs
[3]:https://kangax.github.io/compat-table/es6/
[4]:https://twitter.com/addyosmani/status/541978036904554496?utm_source=javascriptweekly&utm_medium=email