//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//create an empty array for new array
var arr1 = [];
//create a var for values in the key
//loop through the object to get the values of the keys
for(var key in object) {
    var arr = object[key]
    //push the variable into the new array
    arr1.push(arr)
}
return arr1;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//create a string 
var str1 = '';
//create an array
var arr2 = [];
//loop through the object
for(var key in object) {
    //var str1 = [key]
    arr2.push(key)
    
}
return arr2.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//create a string
var str1 = '';
//create a new array
var arr3 = [];
//create a loop to loop through the values of the keys in the object
for(var key in object) {
    //var value = object[key]
    //push the values into array
       if(typeof object[key] === 'string') {
           //str1 += object[key]
           arr3.push(object[key]);
}

}
console.log(arr3)
//join the values by a ' '
return arr3.join(' '); 
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //check to see if it is array 
    if(Array.isArray(collection)) {
        //return 'array' if it is an array
        return 'array'
        //check to see if collection is an object
    } else if(typeof collection === 'object') {
        //return 'object' if it is an object
        return 'object'
    }
    //return collection
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //if(typeof string === 'string') {
        //string.toUpperCase(string[0])
return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 return string.replace (/\w\S*/g, function(txt) {
     return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
 });
 }
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return 'Welcome ' + capitalizeWord(object.name) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //loop through the object
 for(var key in object) {
     //create a variable for the values of the keys
     var arr = object[key]
     //check to see if the value is an arry 
     if(arr.length > 0) {
         //return the array separated by a space
            return arr.join(' ')
     }
    //return 'there are no noises';
 }
 return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//Should take a string of words and a word and return true if <word> is in <string of words>,
// otherwise return false.
//create an array
//var container = [];
//loop through the string
if(string.includes(word)) {
    return true
} else {
    return false;
}
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends
// array then return the object
function addFriend (name, object) {
object.friends.push(name)
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> 
//is a friend of <object> and false otherwise
function isFriend(name, object) {
if(object.hasOwnProperty('friends')) {
    for(let i = 0; i < object.friends.length; i++) {
        if(name === object.friends[i]) {
            return true
        }
    }
                                
} return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> 
//is not friends with
function nonFriends(name, array) {
let arr2 = [];
for(var i = 0; i < array.length; i++) {
    if(array[i].friends.includes(name) === false && name !== array[i].name) {
        arr2.push(array[i].name)
    }
}return arr2;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//removeProperties() : Should take an object and an array of strings. Should remove any 
//properties on <object> that are listed in <array> 
function removeProperties(object, array) {
for(var key in object) {
    for(var i = 0; i < array.length; i ++) {
        if(key === array[i]) {
            delete object[key]
        }
    }
}

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
 const uniqueArr = new Set(array);
 const backToArray = [...uniqueArr];
 return backToArray;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}