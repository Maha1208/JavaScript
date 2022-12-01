var a="I am learning java script ";
var b="I'm learnt html, html and css html";
var c="I'm going to learn React js";
var x=('-----------------------------------------------')


//charAt()
const d = 'The quick brown fox jumps over the lazy dog.';
const e = 4;
console.log(a.charAt(8));
console.log(`The character at index ${e} is ${d.charAt(e)}`);
console.log(x);


//charCodeAt()
console.log(a.charCodeAt(1));
console.log(a.charCodeAt(a-1));
console.log(x);

//concatenation
console.log(a+" "+"and" +" ".concat(b,c));
console.log(a +" "+"and"+" "+c);
console.log(x);


//indexOf
console.log(a.indexOf('j'));
console.log(a.indexOf('a',4));
console.log(b.indexOf("html"));
console.log(b.indexOf("html",3));
console.log(x);


//lastIndexOf
console.log(a.lastIndexOf('l'));
console.log(a.lastIndexOf('I',4));
console.log(b.lastIndexOf("and"));
console.log(b.lastIndexOf("html",6));
console.log(x);

//search()
console.log(b.search(/html/));
console.log(a.search("script"));
console.log(x);

//match()
console.log(c.match("React"));
console.log(x);

//replace()
console.log(c.replace("React js","Angular Js"));
console.log(x);

//replaceAll()
console.log(b.replaceAll("html","css"));
console.log(x);

//substring()
console.log(a.substring(1, 8));
console.log(b.substring(2));
console.log(x);

//matchAll
const regexp = /(t)e(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]);
console.log(array[1]);
console.log(x);

//toLowerCase
console.log(a.toLowerCase(a));
console.log(x);

//toUpperCase
console.log(b.toUpperCase(b));
console.log(x);

//slice
console.log(str.slice(31));
console.log(str.slice(4, 19));//startidex,endindex
console.log(str.slice(-4));
console.log(str.slice(-9, -5));
console.log(x);

//split
const words = str.split(' ');
console.log(words[3]);

const chars = str.split('');
console.log(chars[8]);

const strCopy = str.split();
console.log(strCopy);
console.log(x);

//trim(), trimStart(), trimEnd()
const str2='    How are you my friend     ';
console.log(str2.trim(str2)); // remove whitespace from starting and ending
console.log(str2.trimEnd(str2));
console.log(str2.trimStart(str2));
console.log(x);

//length
console.log(str.length)
console.log(` The length of str is ${str.length}`);
console.log(x);

//include()
const word = 'React';
console.log(`The word "${word}" ${c.includes(word) ? 'is' : 'is not'} in the given string`);
console.log(c.includes('React'));
console.log(x);

//endsWith()
console.log(c.endsWith('js'));
console.log();



