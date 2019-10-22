/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animal and ssign it to object
var animal = {};
animal.species = 'dog',
animal['name'] = 'Gigi'
animal.noises = []
console.log(animal)

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an array called noises
var noises = [];
//add using bracket notation
noises[0] = 'bark'
//add to the end of the array
noises.push('woof')
//add to the begining of the array
noises.unshift('ruff')
//add to the end of the array using bracket notation
noises[noises.length] = 'howl'
//print the length of the array



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('fart');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animals
var animals = [];
animals.push(animal)
console.log(animals)
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}
animals.push(duck);
var monkey = {
    species: 'monkey',
    name: 'bob',
    noises: ['ohh', 'ahh']
}
animals.push(monkey)
var horse = {
    species: 'horse',
    name: 'john',
    noises: ['ohh', 'ahh']
}
animals.push(horse)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var container = [];
var friends = container
function getRandom(array) {
  return Math.floor(Math.random() * Math.floor(array.length - 1));
}
friends.push(animals[getRandom(animals)].name);
dog['friends'] = friends;


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
