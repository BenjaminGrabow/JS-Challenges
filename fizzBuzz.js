const fizzBuzz = () => {
  for(let i = 1; i <= 100; i++){
    if(i % 15 === 0) console.log('fizzbuzz'); // or if(i % 3 === 0 && i % 5 === 0)
    else if(i % 3 === 0) console.log('fizz');
    else if(i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
};

console.log(fizzBuzz())