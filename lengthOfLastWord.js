// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5


// For loop solution

var lengthOfLastWord = function(s) {
  if(!s) return 0; 
  const split = s.split(' ');
  let result = [];
  for(let i = 0;
     i < split.length; i++){
      if(split[i].match(/[a-zA-Z]/g)) {
          result.push(split[i]);
      }
  }
  if(result[0])return result[result.length - 1].length;
  else return 0;
};

// Solution with array higher order function mao

var lengthOfLastWord = function(s) {
  if(!s) return 0; 
  const split = s.split(' ');
  let result = [];
  split.map(nums => {
        if(nums.match(/[a-zA-Z]/g)) {
          result.push(nums);
      } return nums;
  })
  if(result[0])return result[result.length - 1].length;
  else return 0;
};


//Solution with array higher order function filter

var lengthOfLastWord = function(s) {
  let words = s.split(' ').filter(str => str);
  return words.length ? words[words.length-1].length : 0;
};

// best solution 
var lengthOfLastWord_v5 = s => s.trim().split(' ').reverse().shift().length;
