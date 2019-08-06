// test if palindrome without
// converting value to string 

var isPalindrome = function(x) {
  let reversedNumber = 0;
  const givenNumber = x
  while (x > 0) {
      reversedNumber = (reversedNumber * 10) + (x % 10);
      x = Math.floor(x / 10);
  }
  return reversedNumber === givenNumber;
};