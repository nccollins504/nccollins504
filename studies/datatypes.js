/*
 * DATATYPES:
 * Data types are important to programming because they allow you to operate on 
 * variables. Javascript has dynamic types because the same variables can be used
 * to hold different data types. There are two different values that datatypes hold:
 * mutable and immutable. A mutable object is an object that can be changed after it 
 * has been created. An immutable object is an object that can be changed. So there 
 * are 9 different data types, 6 immutable values and 3 mutable values. The 6 
 * immutable valus are: symbol, number, boolean, null, undefined, string, 
 * and BigInt. The mutable values are an object, function and an array.
 */

// 1. Number //
/*
 * A number data type is an integer and floating point numbers. There are a lot
 * of different operations that you . can preform for numbers: +, -, *, / and many more.
 * 
 */
//Example:
let number = 9 //integer
let number2 = 9.87 //floating point numbers

// 2. Boolean //
/*
 * The boolean data type can only have two values such as: true or false, on or off, 
 * yes or no. You can use the 'Boolean()' Function top figure out if an 
 * expression or variable is true or false.
 */

//Example:
(10 > 9) //returns true
(30 < 1) //returns false
Boolean(77 > 54) //returns true

// 3. Null //
/*
 * The null value is a keyword that represents either no value or nonexistence of 
 * any value. Null is special because it forms a different type that only takes
 * 'null' as a value.
 */

//Example: 
let data = null
console.log(data) //returns null

/*
 * This returns null because the console reads that 'data' is nothing or empty
 * which also means null.
 */

// 4. Undefined //

/*
 * Undefined is very similar to null for many reasons. First undefined is special
 * because it stands on its own as a data type. So when creating a variable there
 * are two steps: declare and assign. If you do not assign the variable to anything
 * then that variable will become undefined.
 */

//Example:
let x;
console.log(x) //returns undefined

// 5. String //

/*
 * A Javascript string is anything that holds a series of characters. These 
 * characters will be surrounded by quotes. There are three different types of
 * quotes: "", '', ``. Double quoted and single quotes have no difference in them
 * and they are reffered top as simple quotes.
 */

//Example:
let car = 'Ford'
let model = "Explorer"

/*
 * Backticks are a little different because they are extended functionality 
 * quotes. Extended functionality quotes allow you to place variables and
 *  expressions inside a string.
 */

//Example:
let school = "Operation Spark"
alert(`Esplanade, ${school}`) //Esplanade Operation Spark
alert(`sum ${9 + 8}`) //the sum is 17

// 6. Function //
/*
 * A function is Javascript is a block of code that is created to preform a task.
 * You execute that function by calling the function. Every function will have four
 * parts and the first part is the function name. This will be whatever you decide
 * to name your function. Then this function will either take parameters or
 * arguments. The parameters or arguments act as local variables. The third part of 
 * a function is the function body. The last part of a function is the return
 * statement. This is the syntax for a function:
 * function name(parameter) {
     function body
     return statement
 } 
 */

//Example:
function math(a1, a2) {
    return a1 * a2
}
math(5,5) //returns 25

// 7. Array //
/* 
 * An array is a special value because it can hold multiple values inside one 
 * variable. Array's are useful when you need them to make a list. Instead of creating
 * multiple variables and assigning them you just create a list inside an array.
 */

//Example:
var neighborhoods = ['Lakeview', 'Mid-City', 'Kenner']

/*
 * Since everything inside an array is basically a varaible then you need a way to 
 * access them. You would then access them by what index they are.
 */

//Example: 
var house = neighborhoods[1] //return Mid-City

/*
 * You can add or remove items from an array by using a myriad of methods. 
 * These methods are .push, .unshift, .pop, .shift. The Push method and the Unshift
 * method are both methods to add to the Array. Push method will add to the end of 
 * the array and Unshift will add to the beginning of the array. The pop and shift
 * methods remove from the array. Pop method removes from the end of the array
 * and the shift method removes from the front.
 */

// 8. NaN //
/*
 * NaN is an acronym for ' Not-a-Number'. You can test if a value is NaN by using:
 * isNaN(). This will determine if the value is a number or not.
 */
 
 //Example:
 var y = true;
 isNaN(y);  //return Not-a-Number
 
 // 9. Infinity and - Infinity
 /*
  * Infinity is a value that represents positive infinity
  */
 //Example:
 (9/0) // returns positive Infinity
 
 /*
  * -Infinity is a valur that represents negative infinity
  */
 
 //Example:
 (-9/0) //returns negative infinity
 
 // 10. Primitive/Simple vs Complex Data types //
 /*
  * Simple/Primitive data types are immutable. Which means you cannot add or change
  * the original value. These Data Types are: Number, boolean, null, undefined, NaN,
  * symbol.
  * Complex data types are mutable. So you can manipulate these values and add to
  * the original value. These data types are: Array, Object, and Function.
  */
 
 // 11. By Copy and by Refrence //
 /*
  * Since Primitive datat types are assigned variable we can think of them holding
  * a primitive value. When we assign these variables to new variables we basically
  * copy the value to a new variable. They are copied by value. Simple/Primitive
  * values will always copy by value.
  */
 
 //Example:
 var i = 7;
 var y = i //var i and var y are both assigned to 7
 
 /*
  * If an object is copied to another variable the address of that value
  * is what is copied over. So an object will be copied over by refrence.
  */
 
 //Example:
 var reference = [4]
 var refCopy = reference

 // 12. Object