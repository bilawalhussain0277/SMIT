// // JavaScript Assignment 01

// //                         <<<<<<<<<<<<<<<<<< Chapter No 01 >>>>>>>>>>>>>>>>>>

// // Question No 01

alert("Welcome");

// // Question No 02

alert("Error! Please enter a valid password.");

// // Question No 03

alert("Welcome to Javascript...\n Happy Coding!");

// // Question No 04

alert("Welcome to Javascript Programming Language...");
alert("Happy Coding!");

// // Question No 05

console.log("Hello... i can run Javascript through my web browser's console")

// //                           <<<<<<<<<<<<<<<<<< Chapter No 02 >>>>>>>>>>>>>>>>>>

// // Question No 01

var username= "Bilawal"

alert(username)

// // Question No 02

var myName = "Bilawal Hussain"

alert(myName)

// // Question No 03

var message=""

message = "Hello world"

alert(message)

// // Question No 04

var studentName="Bilawal"

var studentAge=22

var course="Web & Mobile App Developer"

alert(studentName)
alert(studentAge)
alert(course)
alert(studentName + studentAge + course)

// // Question No 05

var wannaEat= "Pizza\nPizz\nPiz\nPi\nP"

alert(wannaEat)

// // Question No 06

var msg="My email address is : "

var email="bilawalhussain0277@gmail.com"

alert(msg + email)

// // Question No 07

var msgBook="I am trying to learn from the book : "

var book="A smarter way to learn JavaScript."

alert(msgBook+book)

// // Question No 09

var showCase="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"

alert(showCase)

// //                           <<<<<<<<<<<<<<<<<< Chapter No 03 >>>>>>>>>>>>>>>>>>

// // Question No 01

var age="i am 22 years old"

alert(age)

// // Question No 02

var visitCount="You have visited this site 69 times."

alert(visitCount)

// // Question No 03

var msg="My Birth Year is "
var birthYear = 2001;

console.log(msg + birthYear + "\nData type of my declared variable is number");

// // Question No 04

var visitorName = "Bilawal";
var productTitle = "watches";
var quntaity = 10 ;
var store = "www.seiko5.com";

console.log(visitorName + " ordered " + quntaity + productTitle + " from " + store);

// //                           <<<<<<<<<<<<<<<<<< Chapter No 04 >>>>>>>>>>>>>>>>>>

// // Question No 01

var num1 = 1,
  num2 = 2,
  num3 = 3;

alert(num1 + num2 + num3);

// // Question No 02

// Five illegal variables

// var "name"="ahmed"
// var 1="ahmed"
// var 1name="ahmed"
// var full name="ahmedraza"
// var var="hello world"

// // Five legal variables

// // var fullName=""
// // var batch10=""
// // var course$timing=""
// // var institute_name=""
// // var address=""

// // Question No 03

var a = "“Rules for naming Javascript variables”";
var b =
  "Variable names can only contain " +
  "numbers," +
  "$ and_ " +
  "For example $my_1stVariable";
var c = "Variables must begin with a " + "$name, " + "_name " + "or name";
var d = "Variable names are case " + "sensitive";
var e = "Variable names should not be Javascript " + "Keywords";

console.log(a + "\n" + b + "\n" + c + "\n" + d + "\n" + e);

//                           <<<<<<<<<<<<<<<<<< Chapter No 05 >>>>>>>>>>>>>>>>>>

// Question No 01
var num_1 = 3;
var add = 5;
var msg_1 = "Sum of ";
var msg_2 = " and ";
var msg_3 = " is ";

alert(msg_1 + num_1 + msg_2 + add + msg_3 + (num_1 + add));

// Question No 02
var num_1 = 3;
var add = 5;
var msg_1 = "division ";
var msg_2 = " into ";
var msg_3 = " is ";

alert(msg_1 + num_1 + msg_2 + add + msg_3 + num_1 / add);

// Question No 02.a

var num_1 = 3;
var add = 5;
var msg_1 = "subtraction ";
var msg_2 = " into ";
var msg_3 = " is ";
alert(msg_1 + num_1 + msg_2 + add + msg_3 + (add - num_1));

// Question No 02.b

var num1 = 3;
var add = 5;
var msg_1 = "multiplication ";
var msg_2 = " into ";
var msg_3 = " is ";

alert(msg_1 + num_1 + msg_2 + add + msg_3 + num1 * add);

// Question No 03

var a = "undifined";

console.log("Value after variable declaration is: " + a);

a = 5;
console.log("Initial value: " + a);

a = ++a;
console.log("Value after increment is:" + a);

var a = a + 7;

console.log("value after addition is " + a);

a = --a;

console.log("Value after decrement is:" + a);

console.log("The remainder is " + (a % 3));

// Question No 04

var ticketCost = 600;
var value = 5;

console.log(
  "total cost of buy " +
    value +
    " ticket to a movie is " +
    ticketCost * value +
    "PKR"
);

// Question No 05

var table = 4;
var value = table + 4;
console.log(table + "x" + "1=" + table);
console.log(table + "x" + "2=" + value);
value = value + 4;
console.log(table + "x" + "3=" + value);
value = value + 4;
console.log(table + "x" + "4=" + value);
value = value + 4;
console.log(table + "x" + "5=" + value);
value = value + 4;
console.log(table + "x" + "6=" + value);
value = value + 4;
console.log(table + "x" + "7=" + value);
value = value + 4;
console.log(table + "x" + "8=" + value);
value = value + 4;
console.log(table + "x" + "9=" + value);
value = value + 4;
console.log(table + "x" + "10=" + value);

// Question No 06

// console.log();
// Question No 07

var item1 = 650;
var qunitem1 = 3;
var item2 = 100;
var qunitem2 = 7;
var dCharges = 100;
console.log("Shoping Cart");
console.log("Price of item-1 : " + item1);
console.log("quantity of item-1 : " + qunitem1);
console.log("Price of item-2 : " + item2);
console.log("quantity of item-2 : " + qunitem2);
console.log("Shipping Charges : " + dCharges);
console.log(
  "Total cost of your order is : " +
    (item1 * qunitem1 + item2 * qunitem2 + dCharges)
);

// Question No 08
console.log("Mark Sheet");

var mark=980
var obtained=804
console.log("Total Marks : " + mark)
console.log("Marks Obtained: " + obtained)
console.log("Percentage " + ((obtained/mark)*100)+ "%")

// Question No 09
console.log("Currency PKR");

var usd=104.80
var sRiyal=28

console.log("Total Currency in PKR : "+ ((usd*10)+(sRiyal*25)))

// Question No 10
var number=7
console.log((((number+5)+(number*10))+(number/2)))

// Question No 11

var currentYear = 2023;
var birthYear = 1995;

console.log("Current Year: " + currentYear);
console.log("Birth Year: " + birthYear);
console.log("Your Age is: " + (currentYear-birthYear));

