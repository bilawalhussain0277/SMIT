//                      Chapter # 14-16

//                      Question no. 1

var student = [];

//                      Question no. 2

student = [];

//                      Question no. 3

var str = ["Bilawal", "Hussain", "Sheikh", "Siddique"];

//                      Question no. 4

var num = [12345, 2709304, 2623642];

//                      Question no. 5

var boolean = [true, false];

//                      Question no. 6

var mix = ["Bilawal", 19012001, true, "Hussain", 2709304, false];

//                      Question no. 7

var qaulifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phill.",
  "PhD",
];

document.write("<h2>Qaulifications</h2>");
document.write(qaulifications);

//                      Question no. 8

var students = ["Bilawal", "Hussain", "Bilal"];
var score = [320, 230, 480];
var totalMarks = 500;

document.write(
  "<br />score of " +
    students[0] +
    " is " +
    score[0] +
    ". Percantage: " +
    (score[0] / 500) * 100 +
    "%"
);
document.write(
  "<br />score of " +
    students[1] +
    " is " +
    score[1] +
    ". Percantage: " +
    (score[1] / 500) * 100 +
    "%"
);
document.write(
  "<br />score of " +
    students[2] +
    " is " +
    score[2] +
    ". Percantage: " +
    (score[2] / 500) * 100 +
    "%"
);

//                      Question no. 9

var colorName = ["Green"];
alert(colorName);

colorName.unshift(
  prompt("Enter a color name you want to add a beginning", "Red")
);
alert(colorName);

colorName.push(prompt("Enter a color name you want to add in end", "Orange"));
alert(colorName);

colorName.unshift(
  prompt("Add two more color name you want to add in beginning", "Black")
);
colorName.unshift(
  prompt("Add two more color name you want to add in in beginning", "White")
);
alert(colorName);

colorName.shift();
alert(colorName);

colorName.pop();
alert(colorName);

colorName.push(prompt("which index you want to add a color name.", "2"));
alert(colorName);

colorName.splice(
  prompt(
    "Which index you want to delete color(name) & how many colors want to delete",
    "2,2"
  )
);
alert(colorName);

document.write(colorName);

//                      Question no. 10

const scores = [320, 230, 480, 120];
document.write("Unordered score", scores);
document.write("<br />Ordered scores", scores.sort());

//                      Question no. 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(cities.slice(2, 4));

//                      Question no. 12

var arr = ["This", "is", "my", "cat"];
document.write("This is Array: ", arr);
document.write("<br />This is String: ", "This is my cat");

// //                      Question no. 13

var device = ["Keyboard", "Mouse", "Printer", "Monitor"];

document.write("Devices:" + "<br/>" + device);
document.write("<br/>");

var returnValue = device.shift();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.shift();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.shift();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.shift();
document.write("<br/> Out:" + "<br/>" + returnValue);

// // //                      Question no. 14

var device = ["Keyboard", "Mouse", "Printer", "Monitor"];

document.write("Devices:" + "<br/>" + device);
document.write("<br/>");

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);

var returnValue = device.pop();
document.write("<br/> Out:" + "<br/>" + returnValue);

// //                      Question no. 15

var phoneManufactures = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<h1>Select a phone Manufactures:<h1/>");
document.write(
  "<select>" + "<option>" + phoneManufactures[0] + "<option/>" + "</select>"
);
