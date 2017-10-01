// exercise 1
var input = prompt('Pick a number', '0');

var input = prompt('Pick a number', '0');
var total = 0;
for  (var i = 0; i<input; i ++) {
total = total + 1;
} 
console.log("The total is:" + total);

// exercise 2
var input= prompt("Do you want to play?");

if (input === "yes"){
    var answer= prompt("Enter a Word");
    var answer2 = prompt("Would you like to play again?");
    if (answer2 === "yes"){
        do {
            var answer3 = prompt("Enter a Word");
            var question = prompt("Would you like to play again?");
            var answers = answer + answer3;
            console.log(answers);
        }
        while(question === "yes");
    }
    else {
        console.log(answer);
    }

}

// exercise 3 
var name = prompt("What is your name?");
var myNameAJeff = "Hello. My name is "+ name +"";
var printName = prompt("Would you like to print your name?");

if(printName === "yes") {
	console.log(myNameAJeff);
}


do {
 	var printNameAgain = prompt("Would you like to print your name again?");
	var myNameAJeff = myNameAJeff +"!";
 	console.log(myNameAJeff);
}

while(printNameAgain === "yes");

//exercise 4
var morning = ['breakfast', 'eggs and toast'];
var noon = ['lunch', 'a salad'];
var evening = ['dinner', 'chicken and rice'];


var timeOfDay = prompt("What time of day is it?");
if (timeOfDay === "morning") {
	console.log("Since it is "+ timeOfDay + ", you should be eating "+ morning[0] +". We suggest "+ morning[1] +".");
}

if (timeOfDay === "noon") {
	console.log("Since it is "+ timeOfDay + ", you should be eating "+ noon[0] +". We suggest "+ noon[1] +".");
}

if (timeOfDay === "evening") {
	console.log("Since it is "+ timeOfDay + ", you should be eating "+ evening[0] +". We suggest "+ evening[1] +".");
}