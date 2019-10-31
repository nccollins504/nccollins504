/*
 * STRING-MANIPULATION:
 * String manipulation or string methods help you work with strings in javescript. This is 
 * a list of all the methods used for string manipulation: charAt(), charCodeAt(), concat(),
 * endsWith(), fromCharCode(), includes(), indexOf(), latsIndexOf(), localCompare(), match(),
 * repeat(), replace(), search(), slice(), split(), startWith(), substr(), substring(),
 * toLocaleLowerCase(), toLocaleUpperCase(), toLowerCase(), toString(), toUpperCase(),
 * trim(), valueOf().
 */
// 1. Operators //
// Example:
var str = 'hello'
var str1 = 'world'
console.log(str + ' ' + str1) //prints 'hello world'

// 2. Methods //
//Example:
var str2 = 'nathan'
str2.toUpperCase() //resolves to 'NATHAN'

var str3 = 'Collins'
str3.toLowerCase() //resolves to 'collins'

var str4 = 'Nathan'
var str5 = 'Collins'
str4.concat(str5) //resolves to 'NathanCollins'