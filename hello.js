/* jshint esversion: 6 */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


// Question 1.a
var names = ["Flash", "Anne", "Chelsee", "Corrie", "Des", "Zed"];

alert("The names of the contestants are " + names.toString());




// Question 1.b
var beetles = new Array(names.length);
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

alert("The minimum number of beetles is " + min + " consumed by " + names[personIndex] + "\nThat person is eliminated.");
names.splice(personIndex,1);
alert(names);


//1(b)--Using Functions--------------------------------------------

function makeBeetleArray(){
    var anArray= new Array(names.length);
    for (let i = 0; i < anArray.length; i++){
        anArray[i] = parseInt(Math.random()*1001);
    }
    return anArray
};

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
    
    };
    console.log("The person removed was " + nameArray[personIndex] 
					+ " at position " + personIndex 
					+ " (starting at zero.)");

    nameArray.splice(personIndex,1);
    
    return nameArray;
}

var secondRoundContestants = removeLowestElement(names, beetles);


//Question 1.c
let animals = ["wombat", "spider", "platypus", "treefrog", "cockroach",  
											"koala"];
let adjectives = ["slimy", "venomous", "scaly", "malodorous", 
							 "screechy", "snappy", "creepy"];
let responses = [];
let responsesLength = [];

for (let i = 0; i < names.length; i++){

    animalNumber = parseInt(Math.random()*animals.length);
    adjectiveNumber = parseInt(Math.random()*adjectives.length);

    responses[i] = names[i] + " is a " + adjectives[adjectiveNumber] 
							+ " " + animals[animalNumber];

}
alert(responses.toString());


for(let i = 0; i < responses.length; i++){
    responsesLength[i] = responses[i].length;
}
alert(responsesLength.toString());


personIndex = 0;
min = responsesLength[0];
for (let i = 0; i < responsesLength.length; i++){
    if (responsesLength[i] < min){
        min = responsesLength[i];
        personIndex = i;
    }
}

alert("The minimum number of characters is " + min + " for " 
		+ names[personIndex]+ "\nThat person is eliminated.");

names.splice(personIndex,1);
alert("The  remaining contestants are " + names.toString());

let animals = ["wombat", "spider", "platypus", "treefrog", "cockroach",  
											"koala"];
let adjectives = ["slimy", "venomous", "scaly", "malodorous", 
							 "screechy", "snappy", "creepy"];

function assignAnimals(nameArray){
    let outputArray = [];
    for (let i = 0; i < nameArray.length; i++){

        animalNumber = parseInt(Math.random()*animals.length);
        adjectiveNumber = parseInt(Math.random()*adjectives.length);


        outputArray[i] = "\n" + nameArray[i] + " is a " 
					+ adjectives[adjectiveNumber] + " " 
					+ animals[animalNumber] ;
    }
    return outputArray;
}

let responses = assignAnimals(secondRoundContestants);
console.log(responses.toString());

console.log("\n--------------------------------------------------\n");

function makeResponseLengthArray(){

   let responsesLengthArray  = [];
    for(let i = 0; i < responses.length; i++){
        responsesLengthArray[i] = responses[i].length;
    }
    return responsesLengthArray;
}
let responsesLength = makeResponseLengthArray();

console.log(responsesLength);

let thirdRoundContestants 
		= removeLowestElement(secondRoundContestants, responsesLength);

console.log("\n---------------------------------------------------\n");
console.log(thirdRoundContestants);

//Question 1.d
let loudness = new Array(names.length)
for (let i = 0; i < loudness.length; i++){
    loudness[i] = parseInt(Math.random()*21 + 1);
}

alert(loudness);

personIndex = 0;
max = responsesLength[0];
for (let i = 0; i < responsesLength.length; i++){
    if (responsesLength[i] > max){
        max = responsesLength[i];
        personIndex = i;
    }
}
alert("The maximum loudness score was " + max + " for " + names[personIndex] + ".\nThat person is eliminated.");
names.splice(personIndex,1);
alert("The  remaining contestants are " + names.toString());


//1(d)-----------------------------------------------------------

function getLoudnessArray(){

    let loudnessArray = new Array(thirdRoundContestants.length);

    for (let i = 0; i < loudnessArray.length; i++){
      	//Make loudness values negative so we can re-use 
		//"removeElement" function which removes the lowest value
		//The lowest negative value would correspond to the 
		//largest value
        loudnessArray[i] = -parseInt(Math.random()*19 + 1);
    }
    return loudnessArray;
}
let loudness = getLoudnessArray();
console.log(loudness);


let fourthRoundContestants 
			= removeLowestElement(thirdRoundContestants, loudness);

console.log("\n------------------------------------------------------\n");
console.log(fourthRoundContestants);
console.log("\n------------------------------------------------------\n");

//Question 1.e
let bananas = new Array(names.length);
let numberOfRounds = 4;

for (let round = 0; round < names.length; round++){
    bananas[round]  = new Array(numberOfRounds);
}

var output = "";
for (let i= 0; i < bananas.length; i++){
    for (let j = 0; j < bananas[0].length; j++){
        bananas[i][j] = parseInt(Math.random()*6 + 1);
        //output += bananas[i][j] + " ";
    }
    //output += "\n";
}
//alert(output);


let bananaNumbers = [0,0,0];

for (let i = 0; i < bananas.length; i++){
    for (let j = 0; j < bananas[0].length; j++){
        bananaNumbers[i] += bananas[i][j];
    }
}
alert(bananaNumbers);


personIndex = -1;
main = bananaNumbers[0];
for (let i = 0; i < bananaNumbers.length; i++){
    if (min > bananaNumbers[i]){
        min = bananaNumbers[i];
        personIndex = i;
    }
}

alert("The minimum number of bananas collected is " + min + " for " 
			+ names[personIndex]+ "\nThat person is eliminated.");

names.splice(personIndex,1);
alert("The  remaining contestants are " + names.toString());



//1(e) Using Functions--------------------------------------------

function getBananas(nameArray){

    let bananas = [];
    let numberOfRounds = 4;
    let bananasPerRound = 6

    for (let round = 0; round < nameArray.length; round++){
        bananas[round]  = new Array(numberOfRounds);
    }

    var output = "";
    for (let i= 0; i < bananas.length; i++){
        for (let j = 0; j < bananas[0].length; j++){
            bananas[i][j] = parseInt(Math.random()*bananasPerRound + 1);           
        }       
    }
    let bananaNumberArray = [0,0,0];

    for (let i = 0; i < bananas.length; i++){
        for (let j = 0; j < bananas[0].length; j++){
            bananaNumberArray[i] += bananas[i][j];
        }
    }
    return bananaNumberArray
}

let bananaNumbers = getBananas(fourthRoundContestants);
console.log(bananaNumbers);

let fifthRoundContestants 
		= removeLowestElement(fourthRoundContestants, bananaNumbers);

console.log("\n----------------------------------------------------\n");
console.log(fifthRoundContestants);
console.log("\n----------------------------------------------------\n");


//Question 1.f 
var sameScores = true;
let scores = [0,0];
let winner = "";

while(sameScores){
    round = 1;

    scores[0] = parseInt(Math.random()*6 + 1);
    scores[1] = parseInt(Math.random()*6 + 1);

    if (scores[0] > scores[1]){
        winner = names[0];
        alert(names[0] + " with " + scores[0] + " beat " 
						+ names[1] + " with " + scores[1]);
        sameScores = false;

    } else if (scores[0] < scores[1]){

        winner = names[1];
        alert(names[1] + " with " + scores[1] + " beat " + names[0] 
								+ " with " + scores[0]);
        sameScores = false;

    } else {

        alert("No winner  on round " + round);
        round++;
    }

}

alert("The Ruler of the Jungle is " + winner);


//1(f) Using Functions------------------------------------------------

function getWinner(nameArray){

    var sameScores = true;
    let scores = [0,0];
    let theWinner = "";
    let round = 1;

    while(sameScores){
        
        scores[0] = parseInt(Math.random()*6 + 1);
        scores[1] = parseInt(Math.random()*6 + 1);

        if (scores[0] > scores[1]){

            theWinner = nameArray[0];
            console.log(nameArray[0] + " with " + scores[0] + " beat " 
						+ nameArray[1] + " with " + scores[1] 
								  + " on round " + round);
            sameScores = false;

        } else if (scores[0] < scores[1]){
            theWinner = nameArray[1];
            console.log(nameArray[1] + " with " + scores[1] + " beat " 
						+ nameArray[0] + " with " + scores[0] 
								 + " on round " + round);
            sameScores = false;

        } else {
            console.log("No winner on round " + round);
            round++;

        }   
    } // end while loop
    return theWinner;

} // end function

let winner = getWinner(fifthRoundContestants);

console.log("\n---------------------------------------------------\n");
console.log("The Ruler of the Jungle is " + winner);
console.log("\n---------------------------------------------------\n");
