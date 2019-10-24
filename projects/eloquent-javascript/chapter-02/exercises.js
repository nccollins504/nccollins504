
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
/*
 * " # #\n# #\n # #\n# #"
 */
//create a loop that will print a hash or space to our chessboard width
//create a chessboard var to hold my chessboard characters
var chessBoard = '';
//create a nested loop to print the length of my chessboard
for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        if((i + j) % 2 === 0) {
            chessBoard += " ";
        }else {
            chessBoard += '#';
        }
    }//After inner loop terminates add newline character
    chessBoard += '\n';
}
console.log(chessBoard);
//use the new line charcrter to add a new line to my chessboard
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
