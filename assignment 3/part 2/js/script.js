//PART 1 - Rock, Paper, Scissors

//var userChoice = window.prompt("Rock, Paper, or Scissors");
//
//var computerChoice = Math.floor(Math.random() * 3) + 1;
//var result;
//
//if (computerChoice === 1) {
//    result = "rock";
//} else if (computerChoice === 2) {
//    result = "paper";
//} else {
//    result = "scissors";
//}
//
//window.console.log(computerChoice);
//if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
//    window.alert("Please check your spelling and enter a valid choice");
//}
//
//if (userChoice === "rock" && computerChoice === 1) {
//    window.alert("Rock vs Rock: tie!");
//} else if (userChoice === "rock" && computerChoice === 2) {
//    window.alert("Rock vs Paper: Loss!");
//} else if (userChoice === "rock" && computerChoice === 3) {
//    window.alert("Rock vs Scissors: Win!");
//}
//
//if (userChoice === "paper" && computerChoice === 2) {
//    window.alert("Paper vs Paper: tie!");
//} else if (userChoice === "paper" && computerChoice === 1) {
//    window.alert("Paper vs Rock: Win!");
//} else if (userChoice === "paper" && computerChoice === 3) {
//    window.alert("Paper vs Scissors: Loss!");
//}
//
//if (userChoice === "scissors" && computerChoice === 3) {
//    window.alert("Scissors vs Scissors: Tie!");
//} else if (userChoice === "scissors" && computerChoice === 1) {
//    window.alert("Scissors vs Rock: Loss!");
//} else if (userChoice === "scissors" && computerChoice === 2) {
//    window.alert("Scissors vs Paper: Win!");
//}

//PART 2
//var userNumber1 = window.prompt("Select a number");
//var userNumber2 = window.prompt("Select a second number");
//var userOperation = window.prompt("Choose to either: add, subtract, multiply, or divide");
//
//
//var calculate = function (num1, num2, operation) {
//    num1 = parseInt(userNumber1, 10);
//    num2 = parseInt(userNumber2, 10);
//    var result;
//    
//    switch (userOperation) {
//    case "add":
//        result = num1 + num2;
//        window.alert(result);
//        break;
//    case "subtract":
//        result = num1 - num2;
//        window.alert(result);
//        break;
//    case "multiply":
//        result = num1 * num2;
//        window.alert(result);
//        break;
//    case "divide":
//        result = num1 / num2;
//        window.alert(result);
//        break;
//    default:
//        var error = window.confirm("You messed up, click OK to start over");
//        if (error === true) {
//            window.location.reload(false);
//        }
//    }
//};
//
//calculate(userNumber1, userNumber2, userOperation);

//PART 3
//STEP 1
//var scramble = function (word) {
//window.console.log(word.split('').sort().join(''));
//};
//scramble("webmaster");

//STEP 2
//function capitalize(name) {
//    var splitStr = name.toLowerCase().split(' ');
//    var i;
//    for (i = 0; i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//    }
//    return splitStr.join(' ');
//}
//
//window.console.log(capitalize("the quick brown fox"));

//STEP 3
//var findVowel = function (name) {
//        return name.match(/[aeiou]/gi).length;
//    };
//window.console.log(findVowel("The quick brown fox"));

//STEP 4
//var randomString = function() {
//        var random = Math.random().toString(36).substring(19);
//        window.console.log(random);
//    };
//randomString();

//STEP 5
var longestString = [
    "australia",
    "Germany",
    "United States of America"
];

var findLength = function () {
    var i, longest;
    var x = 0;
    for (i = 0; i < longestString.length; i++) {
        if (longestString[i].length > x) {
            x = longestString[i].length;
            longest = longestString[i];
            window.console.log(longest);
        }
    }
};
findLength();

