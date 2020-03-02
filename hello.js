/* jshint esversion: 6 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//Question 1A
var celebrityNames = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"];
//alert("The names of the contestants are " + celebrityNames.toString());


//Question 1B
var beetles = new Array(celebrityNames.length);
for (let i = 0; i < beetles.length; i++){
    beetles[i] = parseInt(Math.random()*1001);
}

//alert(beetles.toString());

var min = beetles[0];
var personIndex = 0;

for (let i = 0; i < beetles.length; i++){
    if (beetles[i] < min){
        min = beetles[i];
        personIndex = i;       
    }
    //alert(personIndex);
}

//alert("The minimum number of beetles is " + min + " consumed by " + celebrityNames[personIndex] + "\nThat person is eliminated.");
celebrityNames.splice(personIndex,1);
alert(celebrityNames);

function makeBeetleArray(){
    var anArray= new Array(names.length);
    for (let i = 0; i < anArray.length; i++){
        anArray[i] = parseInt(Math.random()*1001);
    }
    return anArray
}

var beetles = makeBeetleArray();

console.log("-------------------------------------------------------");
console.log("The number of beetles eaten by each contestant are [" + beetles.toString() + "]\n");

function removeLowestElement(nameArray, numberArray){

    var min = numberArray[0];
    var personIndex = 0;

    for (let i = 0; i < numberArray.length; i++){
        if (min > numberArray[i] ){
            min = numberArray[i];
            personIndex = i;       
        }
    
    }
    console.log("The person removed was " + nameArray[personIndex] 
					+ " at position " + personIndex 
					+ " (starting at zero.)");

    nameArray.splice(personIndex,1);
    
    return nameArray;
}

var secondRoundContestants = removeLowestElement(names, beetles);






//If you would like to test your answers for questions 1A, you will need to declare the variables in this export function
module.exports.celebrityNames = celebrityNames;
