/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    for(let i = 0; i <= animals.length - 1; i++) {
        var nameAnimal = animals[i].name
        if(name === nameAnimal) {
            return animals[i];
        } 
            
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for(let i = 0; i <= animals.length - 1; i++) {
        var nameAnimal = animals[i].name
        if(name === nameAnimal) {
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for(let i = 0; i <= animals.length - 1; i++) {
        var newAnimal = animals[i].name;
        if(name !== newAnimal) {
           return animals.splice(newAnimal)
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called add that will take the parameters of animals and animal
function add(animals, animal) {
    if(animals.length < 1) {
        animals.push(animal);
    }
    //create a for loop to loop through the animals array
   for(let i = 0; i < animals.length; i++) {
       //create a var to hold your index at animals
       var animal1 = animals[i].name
       console.log(animals[i])
       //check to see if the length of the name is bigger than 0 and the length of the speices is longer than 0
       if(animal.name.length > 0 && animal.species.length > 0 && animal.name !== animal1) {
           //push that name into the array
           animals.push(animal1);
       }
   }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
