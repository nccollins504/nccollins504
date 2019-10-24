// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
// create an object literal to the function named makeContact that holds three parameters
//create a contact object
// return an object literal of keys: id, nameFirst, nameLast
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
};
}

// create another function named makeContactList
// return a key of id, nameFirst, and nameLast
/*
create API's named: length (that returns contacts.length), addCOntacts (that uses the array method
push), removeContacts (that returns contacts using the array method splice), and findContacts (that returns the contacts at the i)
*/
function makeContactList(id, nameFirst, nameLast) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
   
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            return contacts.push(contact)
        },
        removeContact: function(contact) {
            // using a for loop, loop over the contacts
            // also use an if statement that will return the contacts, spliced.
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i] === contact){
                    return contacts.splice(i, 1);
                }
            }
        },
        findContact: function(fullName) {
            for (let i = 0; i < contacts.length; i++){
                if (fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
                    return contacts[i];
                }
            }
        },
        // create an API named printAllContactNames and in thet function, put contact as an arguement
        printAllContactNames: function(contact){
            // create a variable naemd contactsName that has an empty string
         let contactsName = " ";
         // again, use a fro loop
         for(let i = 0; i < contacts.length; i++){
           contactsName += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"
         } // return contacts name, sliced
         return contactsName.slice(1, contactsName.length - 1);
       }
}
     
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
