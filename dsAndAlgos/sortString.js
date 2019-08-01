/*

Sort a string in alphabetical order. 
There can be: 
1. Spaces
2. Special Characters 
3. Numbers 

In any of these cases, just ignore the special characters and stick to sorting uppercase + lowercase characters. 
*/


/* checks if char is uppercase */ 
const isUpper = (char1) => {
  return char1 === char1.toUpperCase();
}


/* creates substring of the same char */ 
const generateSubstring = (count, char) => { 

  let chars = ""; 
  while (count > 0) {
    chars += char; 
    count--;
  }
  return chars; 
}


/* creates sorted string based on concatenating substrings of lowercase + uppercase chars */
const createSortedString = (upperCaseCount, lowerCaseCount) => {
  
  let result = ""; 
  
  for (let char = 0; char < 26; char++) {
    
    let upperCount = upperCaseCount[char];
    let upperCaseChar = String.fromCharCode(char + 65);

    let lowerCount = lowerCaseCount[char]; 
    let lowerCaseChar = String.fromCharCode(char + 97);


    // first add lowerCase, then upperCase to result
    if (lowerCount && upperCount) {
      result += generateSubstring(lowerCount, lowerCaseChar) + generateSubstring(upperCount, upperCaseChar);
    // just add uppercase if only upperCase 
    } else if (upperCount) {
      result += generateSubstring(upperCount, upperCaseChar);
    } else {
      result += generateSubstring(lowerCount, lowerCaseChar); 
      }
    }

    return result; 
  }


/* check if a given char is a - z or A - Z */
const validChar = (char) => {
    let ascii = char.charCodeAt(); 
    if ((65 <= ascii <= 90) || (97 <= ascii <= 122)) {
        return true;
    } 
    return false; 
}

/* main driver function */ 
const alphabetSoup = (word) => {
  const upperCaseCount = new Array(26).fill(0); 
  const lowerCaseCount = new Array(26).fill(0); 
  
  // make sure input is of type string. 
  if (typeof(word) !== "string") {
      return ""; 
  }

  // loop through each char in word
  // add upperCase char to upperCaseCount array
  // add loweCase char to lowerCaseCount array
  // map char to index in array based on ascii value 

  for (let char of word) {
    if (!validChar(char)) { continue; }
    if (isUpper(char)) {
      let indexInUpperCaseChars = char.charCodeAt() - 65; 
      upperCaseCount[indexInUpperCaseChars]++; 
    } else {
      let indexInLowerCaseChars = char.charCodeAt() - 97; 
      lowerCaseCount[indexInLowerCaseChars]++; 
    }
  }
 
  return createSortedString(upperCaseCount, lowerCaseCount);

}

// Complexity: 
// Time: O(N) 
// Space: O(N) 

console.log(alphabetSoup("hello")); // ehllo
console.log(alphabetSoup("Goodbye")); // bdeGooy
console.log(alphabetSoup("FAaf")); // aAfF 
console.log(alphabetSoup("")); // "" 
console.log(alphabetSoup("asdjfhalsdjkfhalsiuhfelwiueyrweknnsdSDFSDFbfajhsdgfkasjdhfgaksdf")); // "" 
console.log(alphabetSoup("ljahsdlfhasdbfakjhsdvgafkjsdgfalshdflaASDJKHASDHFASdfjahsdlfaushefaljksbflasudgfalsebfakhsgflasyegfASKHSKDHAJSHDFUAHSdfashdgflajshdgfkasgdhf"))
console.log(alphabetSoup("ljah sdlf hasdbfakjhsdvgafkj32334sdgfalshdflaASDJKHASDHFASdfjahsd lfaushefaljksbflasudgf alsebfakhsgflasyegfASKHSKDHAJSHDFUAHSdfashd gflajshdgfkasgdhf"))
console.log(alphabetSoup(1213123123123))

