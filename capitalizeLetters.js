const capitalLetters = (s) => {
  
// of course also with for loop possible ! 

  return s
    .split(' ')
    .map(char =>
      char
      .substring(0, 1) /// or char[0]
      .toUpperCase() + char
      .substring(1))
      .join(' ');
};

capitalLetters('hello bye yeah');