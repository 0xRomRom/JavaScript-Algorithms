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
