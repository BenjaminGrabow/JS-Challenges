// return longest word of string 
// if two or more with same length return
// words in array

const longestWord = (s) => {
 // create filtered array
  const wordArray = s.toLowerCase().match(/[a-z0-9]+/g);
 
  // sort by length
 const sorted = wordArray.sort((a, b) => b.length - a.length);

 // if multiple longest length put in array

 const longestWordArray = sorted.filter(word => word.length === sorted[0].length);

 if(longestWordArray[1]) return longestWordArray;
 else return sorted[0];

};

longestWord('Hello, Iccc amcc, Ben !!!');


