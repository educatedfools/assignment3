//STEP 1
//var aString = ["terminater 2", "kindergarten cop", "commando", "north shore", "point break"];
//window.console.log(aString[1]);

//STEP 2
//var movies = [];
//movies[0] = "terminater 2";
//movies[1] = "kindergarten cop";
//movies[2] = "commando";
//movies[3] = "north shore";
//movies[4] = "point break";
//
//window.console.log(movies[0]);

//STEP 3
//var movies = [];
//movies[0] = "terminater 2";
//movies[1] = "kindergarten cop";
//movies[2] = "commando";
//movies[3] = "north shore";
//movies[4] = "point break";
//movies.splice(2, 0, "Robocop");
//window.console.log(movies);

//STEP 4
//var movies = [];
//movies[0] = "terminater 2";
//movies[1] = "kindergarten cop";
//movies[2] = "commando";
//movies[3] = "north shore";
//movies[4] = "point break";
//delete movies[0];
//window.console.log(movies);

//STEP 5
//var movies = [];
//movies[0] = "terminater 2";
//movies[1] = "kindergarten cop";
//movies[2] = "commando";
//movies[3] = "north shore";
//movies[4] = "point break";
//movies[5] = "robocop";
//movies[6] = "rambo: first blood";
//
//var i;
//for (i = 0; i < movies.length; i++) {
//    window.console.log(movies[i]);
//}

//STEP 6
//var movies = ["terminater 2", "kindergarten cop", "commando", "north shore", "point break", "rambo: first blood", "robocop"];
//var x;
//var i;
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies[i]);
//    }
//}
//Don't fully understand hasOwnProperty. Played with it to clear a lint error. //My understanding is that it could solve some problems with using a for-in to //iterate an array.

//STEP 7
//var movies = ["terminater 2", "kindergarten cop", "commando", "north shore", "point break", "rambo: first blood", "robocop"];
//var x;
//var i;
//for (i in movies) {
//    if (movies.hasOwnProperty(i)) {
//        window.console.log(movies.sort()[i]);
//    }
//}

//STEP 8
//var movies = ["terminater 2", "kindergarten cop", "commando", "north shore", "point break", "rambo: first blood", "robocop"];
//
//var leastFavMovies = [
//    "rom-com",
//    "transformers",
//    "spider man(the ones with toby maquire)"
//];
//
//var movieList = "Movies I like: \n\n";
//movieList += movies.join("\n");
//movieList += "\n\nMovies I don't like:\n\n";
//movieList += leastFavMovies.join("\n");
//window.console.log(movieList);


//STEP 9
//window.console.log(movies.concat(leastFavMovies));

//STEP 10
//var lastMovie = movies.pop();
//window.console.log(lastMovie);

//STEP 11
//var firstMovie = movies.shift();
//window.console.log(firstMovie);

//STEP 12
//var movieList = movies.concat(leastFavMovies);
//var reverseList =  movieList.reverse();
//window.console.log(reverseList);

//STEP 13
//Would this be better written in dot notation and using {objects}?
//var employee1 = [];
//employee1["id"] = 100;
//employee1["name"] = "Dannika";
//employee1["title"] = "Ice Cream Professional";
//employee1["department"] = "Restaurant";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 200;
//employee2["name"] = "Melissa";
//employee2["title"] = "Copy Writer";
//employee2["department"] = "Legal";
//employee2["isCurrent"] = true;
//
//var employees = [employee1, employee2];

//window.console.log(employees[1]["name"]);

//step 14
//var i;
//for (i = 0; i < employees.length; i++) {
//    window.console.log(employees[i]["name"]);
//}

//step 15
//var employee3 = [];
//employee3["id"] = 300;
//employee3["name"] = "Mike";
//employee3["title"] = "Web Developer";
//employee3["department"] = "IT";
//employee3["isCurrent"] = false;
//
//var employees = [employee1, employee2, employee3];
//
//var i;
//for (i = 0; i < employees.length; i++) {
//    if (employees[i]["isCurrent"] === true) {
//        window.console.log(employees[i]["name"]);
//    }
//}

//step 16
//var movies = [
//    "Terminator 2", 1,
//    "Robocop", 2,
//    "North Shore", 3,
//    "Point Break", 4,
//    "Rambo: First Blood", 5
//];
//
//var movieNames = movies.filter(function (names) {
//        return typeof names === "string";
//    });
//window.console.log(movieNames);

//PART 2
//STEP 1
//var displayMessage = function (message) {
//    window.console.log("The message is " + message);
//};
//
//displayMessage("Hello World");

//STEP 2
//function calculate(x, y) {
//    window.console.log(x % y);
//}
//
//calculate(6, 3);

//STEP 3
//var employees = [
//    "Zak",
//    "Jessica",
//    "Mark",
//    "Fred",
//    "Sally"
//];
//
//var showEmployee = function () {
//    var i;
//    for (i = 0; i < employees.length; i++) {
//        window.console.log(employees[i]);
//    }
//};
//window.console.log("Employees: " + "\n\n");
//showEmployee(employees);





