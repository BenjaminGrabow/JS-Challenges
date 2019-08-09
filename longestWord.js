// return longest word of string 
// if two or more with same length return
// words in array

const longestWord = (s) => {
 const wordArray = s.toLowerCase().match(/[a-z0-9]/g);
 console.log(wordArray)
};

longestWord('Hello, I am,!');


