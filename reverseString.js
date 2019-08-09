const reverseString = (str) => {
  // return str.split('').reverse().join('');


  /////////////////////////////////////////////////////////////

  // let revString = '';

  // for(let i = str.length - 1; i >= 0; i--){
  //   revString += str[i];  ///// or: revString = revString + str[i];
  // }

  // return revString;

  ///////////////////////////////////////////////////////////

  // let revString = '';

  // for(let i = 0; i < str.length; i++){
  //   revString = str[i] + revString;
  // }

  // return revString;


  /////////////////////////////////////////////////////////////

  // ES6 Syntax => more impressive !
  // let revString = '';

  // for(let char of str){
  //   revString = char + revString;
  // }

  // return revString;


  /////////////////////////////////////////////////////////////////

  // High order array method
  // let revString = '';

  // return str.split('')
  // .forEach(char => revString = char + revString);


  ///////////////////////////////////////////////////////////////////


  return str
    .split('')
    .reduce((revString, char) => char + revString);

};
reverseString('hello');