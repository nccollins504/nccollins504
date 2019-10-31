/*
 * FUNCTIONS:
 * 
 */

// 1. Two Phases of a function //
/*
So there are two phases to a function and the first one is the declare the function
then it is optional to give it parameters. The second part to a function would
be the function. In the function body you will use an if sstatement to stop the funtion
or you call by its name to invoke the function.
*/

// 2. Parameters/ Arguements //
/*
So parameters are basically variable’s or placeholders for the arguments. Just 
like in a math expression when you have a variable like x, it takes the place 
of the number that should be there. Parameters basically are the variables, and 
arguments are the numbers you are trying to replace those variables with.
*/

// 3. Assigning a function to a variable //
/*
So you can assign a function to a variable in a higher order function. These functions
take in another function as parameters or passed in as arguments.
*/

// 4. Passing by value or reference //
/*
Parameters are the functions arguments and in Javascript arguments are passed by value. 
These are all primitive or simple data types. So that means that you can change 
the arguments of the function as much as you want without the value of the parameter 
changing. Object and array’s are little different when it comes to functions. 
In pass by reference, a function is called by passing the reference of the variable 
as the argument. So if we are passing either objects or arrays into the function as 
arguments it could change the value of the object.
*/

// 5. Scope //
/*
There are two types of scopes: Global scope and Local scope. Global scope is the otter 
most scope and can be accessed by any function even if it is local. If you declare a 
variable outside the function you can still access it. It is a little different when 
you are talking about local scope. Local scope is everything inside the function and 
the local scope can only access inside the function. Everything inside the local scope 
is considered block of code.
*/

// 6. Syntax for Function //
/*
There are four parts to a function: Function keyword, function name, parameters/arguements,
and function body. The 'function' keyword is a keyword in javascript to create a 
function. The function name is anything you would like to describe your function
as or just a random word. The parameters are going to be placeholders for your arguemnts.
the function body is going to be what you want to execute with this function and you 
can put a return statemnet in there to end your function.
*/

//Example: 
function name(p1, p2) {
    return p1 *p2
}
name(8, 9) // resolves to 72
// 7. Closure //
/*
A closure is the combination of a function bundled together with references
to its surrounding state. In other words, a closure gives you access to an outer 
function’s scope from an inner function. In JavaScript, closures are created every 
time a function is created, at function creation time.
*/