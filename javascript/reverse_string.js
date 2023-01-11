function reverseString(str) {

  // create a new variable to hold a reversed string
  let reversedStr = ''
  
  // iterate through the given string
  for (let i = 0; i < str.length; i ++) {

    // with every iteration add an element from the given string to the BEGINNING of the reversed string
    reversedStr = str[i] + reversedStr
  }

  // return reversed array
  return reversedStr;
}




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
