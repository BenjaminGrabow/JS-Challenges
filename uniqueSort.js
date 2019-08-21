// return array with unique characters 


const uniqSort = array => {
  let map = {};

  let result = [];

  for(let i = 0; i < array.length; i++) {
    if(!map[array[i]]){
      result.push(array[i]);
      map[array[i]] = true;
    }
  }

 console.log(result.sort((a, b) => a - b ));
};

uniqSort([4, 2, 100, 5, 7]);