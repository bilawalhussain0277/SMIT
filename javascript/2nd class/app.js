var name = "Bilawal";
var firstName = "Bilawal";
var lastName = "Hussain";

console.log("name",name)
console.log("FName",firstName)
console.log("LName",lastName)

var weight = 150
console.log("1",weight)
var weight = 100
console.log("2",weight)

var num = 0
console.log(++num)

var a = 4;
var b = 3;

var c = a++ - b++ + --a + a++;

console.log(c)

var a = 4;
var b = 3;
var c = --b + --a - ++b + a++ - --a;
console.log(c)

var num = "2" + 2;

console.log(typeof num)

// var firstName = "Bilawal";
// var lastName = "Hussain";
// var fullName = firstName + " " + lastName

// document.write("<h1>" + "Mr. " + fullName + "!" + "</h1>")

var firstName = prompt();
var lastName = prompt();
var fullName = firstName + " " + lastName

console.log("Mr. " + fullName + "!")