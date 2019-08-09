// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer 







/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x < 0) {
      let result = x.toString().split('').reverse('');
      result.pop();
      result.unshift('-');
      result = Number(result.join(''));
    
      if(result < -2147483647) return 0;
      else return result;
      
  } else {
    let result = parseInt(x.toString().split('').reverse('').join(''));
  
  if( result > 2147483647) return 0;
  else return result;
  }
  };
// check if negative number

