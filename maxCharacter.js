const maxCharacter = (s) => {
   const charMap = {};
   let maxNumber = 0;
   let maxChar = '';

   s.split('').forEach(char => {
  if(charMap[char]) charMap[char]++;
  else charMap[char] = 1;
});

for(let char in charMap) {
 if(charMap[char] > maxNumber) maxNumber = charMap[char];
 maxChar = char;
}

return maxChar;
}

maxCharacter('javascripttt');