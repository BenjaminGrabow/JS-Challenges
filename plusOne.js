// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// FASTEST SOLUTION 
var plusOne = function(digits) {
  var ans = [];
  var val = digits[digits.length-1] + 1;
  var carryover = 0;
  
  if (val > 9){
      carryover = 1;
      val %= 10;
  }
  //this code is actually the reason why it's the fastest. Because it ends with O(1) speed if the last digit + 1 isn't over 9
  else{
      digits[digits.length-1] = val;
      return digits;
  }

  ans.push(val);
if (carryover === 1){
      for (var i = digits.length-2; i >= 0; i--){
          val = digits[i] + carryover;
          if (val > 9){
              carryover = 1;
              val %= 10;
          }
          else {carryover = 0;}
          ans.unshift(val);

      }
  }
  else {
      for (i = digits.length-2; i >= 0; i--){
          ans.unshift(digits[i]);
      }
  }
  
  if(carryover === 1){
      ans.unshift(1);
  }

  return ans;
}