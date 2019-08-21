let cache = {};

const memoTimes10 = (n) => {
if(cache[n]){
return cache[n];
} else {
  const result = n * 10;
  cache[n] = result;  
  return result;
}
};