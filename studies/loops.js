/*
 * LOOPS:
 * There are five diffrent types of loops and they are: for, for/in, for/of, while, do/while.
 */

// 1. For Loops //
/*
 * For loops loop through a block of code a number of times. For/in loops loop through the 
 * properties of a object. For/of loops loop through the values of an iterable of an object.
 * While loops loop through a block of code while a specified condition is true. Do/While
 * loops loop through a block of code while a specified condition is true
 */

// 2. Loop Forward //

//Example
for(let i = 0; i < 20; i++) // prints 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
//15, 16, 17, 18, 19

// 3. Loop Backwards //

//Example:
for(let i = 10; i >= 0; i--) // prints 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// 4. Loop Through an Array //

//Example:
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < 11; i++) {
    
}

// 5. Loop Through an Object //

//Example: 
let y = {
    name: 'Nathan',
    age: 20
}

for(let key in y) { // prints name: 'Nathan', age: 20
    
}
// 6. While Loop //
/*
The while statement creates a loop that executes a specified statement as long as
the test condition evaluates to true. The condition is evaluated before executing 
the statement.
*/