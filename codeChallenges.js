////////////////////////////////////////////////////////////
//Challenge #001

// Write a function that takes two strings. Remove any special characters. Parameter b also needs to be reversed.
// Return a & b together with the first character capitalized.

function myFunction(a, b) {
  //Parameter A: Symbols removed, first character capitalized
  const parA1 = a.replace(/[^a-zA-Z ]/g, "");
  const parA2 = parA1.charAt(0).toUpperCase();
  const parA3 = parA2 + parA1.slice(1);
  //Parameter B: Symbols removed, reversed
  const parB1 = b.replace(/[^a-zA-Z ]/g, "");
  const parB2 = parB1.split("").reverse().join("");
  return parA3 + parB2;
}
myFunction("java", "tpi%rcs");
//Returns "Javascript"

////////////////////////////////////////////////////////////
//Challenge #002

// Write a function that takes two strings (a & b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b) {
  //Initialize counter
  let occurence = 0;
  //Loop over b while checking for matches. If matched, occurence is incremented.
  for (let i = 0; i < b.length; i++) {
    a === b[i] ? occurence++ : null;
  }
  return occurence;
}
myFunction("m", "how many times does the character occur in this sentence?");
//Returns 2

////////////////////////////////////////////////////////////
// Challenge #003

// Write a function that takes two numbers as arguments (x, y)Check if x is divisible by y.
// If true, return x.
// If false, return the next higher natural number that is divisible by y.

function myFunction(x, y) {
  //Check if x is divisible by y, if so return x.
  if (x % y === 0) return x;
  else {
    // Else loop over x, x++ until x is divisible by y, return x.
    for (let i = x; ; i++) {
      if (x % y !== 0) {
        x++;
        if (x % y === 0) return x;
      }
    }
  }
}
myFunction(7, 3);
//Returns 9

////////////////////////////////////////////////////////////
// Challenge #004

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  let result = [];
  let finalResult = [];
  const toArray = str.split("");
  toArray.forEach((i) => {
    result.push(i.charCodeAt(0) + 1);
  });
  result.forEach((i) => {
    finalResult.push(String.fromCharCode(i));
  });
  return finalResult.join("");
}
myFunction("bnchmf");
// returns 'coding'

////////////////////////////////////////////////////////////
// Challenge #005

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction(a, n) {
  return a[n - 1];
}
myFunction([1, 4, 6, 8, 2], 3);
//returns 6

////////////////////////////////////////////////////////////
// Challenge #006

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

function myFunction(a) {
  return console.log(a.slice(3, a.length));
}
myFunction([1, 2, 3, 4]);
//returns [4]

////////////////////////////////////////////////////////////
// Challenge #007

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

function myFunction(a, b) {
  return a.hasOwnProperty(b) ? true : false;
}
myFunction({ a: 1, b: 2, c: 3 }, "b");
// returns true

////////////////////////////////////////////////////////////
// Challenge #008

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function myFunction(a) {
  return a.splice(a.length - 3, a.length);
}
myFunction([1, 2, 3, 4]);
// returns [1]

////////////////////////////////////////////////////////////
// Challenge #009

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n) {
  return a.slice(a.length - n);
}
myFunction([1, 2, 3, 4, 5], 2);
// returns [4, 5]

////////////////////////////////////////////////////////////
// Challenge #010

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction(a, b) {
  return a.filter((word) => word !== b);
}
myFunction([1, 2, 3], 2);
// returns [1,3]

////////////////////////////////////////////////////////////
// Challenge #011

// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction(a) {
  return +a.length;
}
myFunction([1, 2, 2, 4]);
//returns 4

////////////////////////////////////////////////////////////
// Challenge #012

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {
  let count = 0;
  a.forEach((i) => {
    i < 0 ? count++ : null;
  });
  return count;
}
myFunction([1, -2, 2, -4]);
// returns 2

////////////////////////////////////////////////////////////
// Challenge #013

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr) {
  return arr.sort().reverse();
}
myFunction([1, 3, 2]);
// returns [3,2,1]

////////////////////////////////////////////////////////////
// Challenge #014

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
  let total = 0;
  arr.forEach((i) => (total += i));
  return total / arr.length;
}
myFunction([10, 100, 40]);
// returns 50

////////////////////////////////////////////////////////////
// Challenge #015
