/* 
 * OPERATORS:
 * Operators in javascript act on our data, by assigning them to variables, comparing them,
 * or including them in arithmetic operations. Operators are classed by what 
 * they do and how many operands they require. There are four different types of operators in 
 * javascript: Logical operators, comparison operators, arithmetic operators, and 
 * assignment operators.
 */

// 1. Assignment Operators //
/*
 * The basic and universal assignment operator is the equal sign '='. This will assign the value 
 * of the right operand to the left operand. There are mnay other assignment operators such as:
 * +=, -=, *=, /=, %=, **=, <<=, >>=, >>>=, &=, ^=, and |=.
 */
//Example:
let x = 8 //x is assigned to 8

// 2. Logical Operators //
/*
 * Although they are called 'logical' operators they can be used for non-boolean values. For the
 * most part they are used for boolean values in which they will output either true or false.
 * There are three logical operators: ||, &&, !. The || and && operator return the value of the
 * specified operands, so if these operators are used with non-boolean values then they will return
 *  a non-boolean value. 
 */

//Example:
console.log(true || true) //returns true
console.log(true || false) //returns true
console.log(false || false) //returns false

console.log(true && true) //returns true
console.log(true && false) //returns false
console.log(false && false) //returns false

console.log(!true) //returns false
console.log(!false) //returns true

// 3. Arithmetic Operators //
/*
 * Arithmetic operators take numerical values as operands and return a singular numerical value.
 * Just like in math the standard operators for arithmetic operators are: +, -, *, /. The addition
 * operator produces the sum of two numbers or concates them together. The subtraction operators 
 * produces the difference of two different numbers. The multiplication operator creates the
 * product of two diffrent numbers. The division operator produces the quotient of its operands 
 * where the left operand is the dividend and the right operand is the divisor.
 */

//Example:
let a = 5
let b = 4
console.log(a + b) //returns a + b which equals 9

let a1 = 6
let b1 = 4
console.log(a1 - b1) // returns a1 - b1 which equaals 2

let a2 = 6
let b2 = 8
console.log(a2 * b2) // returns a2 * b2 which equals 48

let a3 = 40
let b3 = 5
console.log(a3 / b3) //returns a3 / b3 which equals 8

// 4. Comparison Operators //
/*
 * There are seven diffrent comparison operators and they are: ==, ===, !==, >=, <=, <, >.
 * Comparison operators compare two diffrent values and returns a boolean value. So there 
 * is a diffrence in == and ===. One is striclty equal to and the other is loosly equal to.
 */

//Example:
(1 == 1) //true
(1 === 1) //true
(1 == '1') //true
(1 === '1') //false
(1 > 2) //false
(2 < 6) //true
(1 !== 1) //false
(1 !== 2) //true

// 5. Unary Operators //
/*
 * Unary Operators are operators that only take one operand. When using loops you either increment or
 * decrement and both of thee are unary operators. This is a list of all the unary operators: ++,
 * --, +, -, !, typeof, and delete.
 */

//Example:
for(let i = 0; i < 10; i++) //example of increment
for(let i = 20; i < 0; i-- ) //example of decrement

// 6. Ternary Operators //
/*
 * The ternary operator is the only JavaScript operator that takes three operands. This 
 * operator is frequently used as a shortcut for an if statement.
 */

//Example:
(condition) ? 'something' : 'somethingelse';