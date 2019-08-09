// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  if(!s) return true;
  
  let compareNormal = [];
  let compareReversed = [];
  
      for(let i = 0; i < s.length; i++) {
      if(s[i] !== " " && s[i].match(/[a-zA-Z0-9]/)) compareNormal.push(s[i].toLowerCase()); 
      }
  
       for(let j = s.length - 1; j >= 0; j--) {
      if(s[j] !== " " && s[j].match(/[a-zA-Z0-9]/)) compareReversed.push(s[j].toLowerCase()); 
      }
  
      const joinNorm = compareNormal.join('');
      const joinRev = compareReversed.join('');
  
      if(joinNorm === joinRev) return true;
      else return false;
  };

  // One of the best 

  var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
    let beg = 0, end = s.length - 1
    while (beg <= end) {
        if (s[beg++] != s[end--])
            return false
    }
    return true
};