/*
 * CONTROL FLOW:
 * Control flow is the order in which the computer preforms statements. Usually
 * code is read from the first line to the last line but you can change that using
 * control flow. There are multiple different control flow methods:
 * If statements, If-Else statements, else statements, and switch statements.
 */

// 1. If Statements //
/*
 * An if/else statements preforms a block of code if a condition is true. So the
 * code will run until it returns true. So if it returns false then it will run the 
 * next code. You can use infinite amount of if/else-if chains. You use the 'if' 
 *keyword to declare an if statement then followed by 
 *'()', with a condition statement inside of the parentesis. Then it would be followed 
 * up by '{}'.The syntax for using an if statement would be:
 *if() {
     
 }
 */

//Example: 
var text = 'hello'

if(text === 's') {
    return 'world'
} else if(text === 'h') {
    return 'world'
} else if(text === 'hello') {
    return 'world' // evalutes to true so it will run this code and stop!
} else {
    return false
}

// 2. Else If Statements //
/* 
 * else if statements are used to create a new test if the first statement was
 * false.
 */

// 3. Else //
/*
 * To specify a block of code to be executed. This is if none of the code was 
 * true it will run the else statement to stop running the code.
 */

// 4. Switch //
/*
 * The switch statemnet is a conditional statement that is used to preform
 * different actions based on different conditions. You must declare the switch 
 * keyword to start a switch statement. This is the sytax of a switch statement:
 *
 * switch(expression) {
     case x:
     //code block
     break;
     case y:
     //code block
     break;
     default:
     //code block
 }
 */