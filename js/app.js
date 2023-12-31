// Решение задач Freecodecamp
// 18 декабря 2023 года

// 1 Comment Your JavaScript Code
// simple comment

/**
 * long comment
 */


// 2 Declare JavaScript Variables
var myName;

// 3 Storing Values with the Assignment Operator
var a;
a = 7;


// 4 Assigning the Value of One Variable to Another
a = 7;
var b;

b = a;

// 5 Initializing Variables with the Assignment Operator
var a = 9;


// 6 Declare String Variables
var myFirstName = 'Ivan';
var myLastName = 'Ivanov';

// 7 Understanding Uninitialized Variables
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";


// 8 Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// 9 Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";


// 10 Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line


// 11 Add Two Numbers with JavaScript
const sum = 10 + 10;


// 19 декабря
// 12 Subtract One Number from Another with JavaScript
const difference = 45 - 33;


// 13 Multiply Two Numbers with JavaScript
const product = 8 * 10;


// 14 Divide One Number by Another with JavaScript
const quotient = 66 / 33;


// 15 Increment a Number with JavaScript
let myVar = 87;
myVar++;

// 16 Decrement a Number with JavaScript
let myVar = 11;
myVar--;

// 17 Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
const myDecimal = 5.7;


// 18 Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;



// 19 Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0; // Change this line


// 20 Finding a Remainder in JavaScript
const remainder = 11 % 3;


// 21 Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;


// 22 Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;


// 23 Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;


// 24 Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;


// 25 Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 



// 26 Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';



// 27 Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";



// 28 Concatenating Strings with Plus Operator
const myStr = "This is the start. " + "This is the end.";



// 29 Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."


// 30 Constructing Strings with Variables
const myName = "Stanislav";
const myStr = "My name is" + myName + "and  and I am well!";




// 21 декабря

// 31 Appending Variables to Strings
const someAdjective = "useful";
let myStr = "Learning to code is ";
myStr += someAdjective;



// 32 Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;



// 33 Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; 



// 34 Understand String Immutability
let myStr = "Jello World";

//myStr[0] = "H"; // Change this line
myStr = "Hello World";



// 35 Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2]; 



// 22 декабря

// 36 Use Bracket Notation to Find the Last Character in a String
const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line



// 37 Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
