function duplicateCount(text) {
  
  const textLower = text.toLowerCase();
  const mySet = [... new Set(textLower)];
  checkDiff = Number(textLower.length - mySet.length);
  
  console.log(checkDiff);
  console.log(mySet);
  console.log(textLower);
  
  return checkDiff;
  
  
  
  
  
 // console.log(typeof text.length);
  
 // console.log(typeof mySet.length);
  //...
}


duplicateCount("abcdefghABCDabcABA");

/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the
input string. The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits.*/