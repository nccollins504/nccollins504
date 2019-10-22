// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

//create a for loop to loop through numbers 1-100
for(let i = 1; i < 101; i++) {
    
//check to see if index is divisible by three and five if true print 'FizzBuzz'
if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
    //check to see if index is divisible by 5 
} else if (i % 5 === 0) {
    //print 'Buzz' to console if true
    console.log('Buzz')
    //check to see if index is divisible by 3 
} else if (i % 3 === 0) {
    //print 'Fizz' to the console
    console.log('Fizz')
} else {
    //print the numbers to the console
    console.log(i)
}
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}