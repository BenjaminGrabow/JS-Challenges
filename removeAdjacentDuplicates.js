// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

var removeDuplicates = function(s, k) {
    let testTwo = true;
    let chars = new Set(s);
    let testArray = []
 for (let char of chars) {
 if (testArray.indexOf(char) === - 1) {
 const multiplyLetters = char.repeat(k);
 testArray.push(multiplyLetters);
 }
 } 
 while (testTwo) {
      testTwo = false;
      for (let i = 0; i < testArray.length; i++) {
     const y = new RegExp(testArray[i]).test(s)
       if(y) {
       x = new RegExp(testArray[i]);
       s = s.replace(x,'');
       testTwo = true;  
       }
      }  
    }
    return s;
 };