////////////////////////////////////////////////////////////
//Challenge #001

//Write a function that removes special characters from parameters a & b. Parameter b also needs to be reversed. Return a & b together with the first character capitalized.

// function myFunction(a, b) {
//   //Parameter A: Symbols removed, first character capitalized
//   const parA1 = a.replace(/[^a-zA-Z ]/g, "");
//   const parA2 = parA1.charAt(0).toUpperCase();
//   const parA3 = parA2 + parA1.slice(1);
//   //Parameter B: Symbols removed, reversed
//   const parB1 = b.replace(/[^a-zA-Z ]/g, "");
//   const parB2 = parB1.split("").reverse().join("");
//   return console.log(parA3 + parB2);
// }
// myFunction("java", "tpi%rcs"); // Returns "Javascript"

////////////////////////////////////////////////////////////
