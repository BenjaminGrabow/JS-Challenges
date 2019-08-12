const capitalLetters = (s) => {
  
// of course also with for loop possible ! 

  // return s
  //   .split(' ')
  //   .map(char =>
  //     char
  //     .substring(0, 1) /// or char[0]
  //     .toUpperCase() + char
  //     .substring(1))
  //     .join(' ');

  ///////////////////////////////////////////////////

  // regular expression

  return s.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
  //g for all words 
  //i case sensitive
};

capitalLetters('hello bye yeah');