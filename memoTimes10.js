const times10 = (n) => {
return n * 10;
};

let cache = {};

const memoTimes10 = (n) => {
  if(n in cache) {
  return cache[n];
  } else {
    cache[n] = times10(n);
    return times10(n);
  }
}













































