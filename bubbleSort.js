//Most basic algorithm bubble sort with time and space complexity of O(n)

const bubbleSort = (arrNums) => {

  let finished = false; 
  
  while(!finished) {
  finished = true;
  for( let i = 0; i < arrNums.length; i++){
    if(arrNums[i] > arrNums[i + 1]) {
  let saveNum = arrNums[i];
  arrNums[i] = arrNums[i + 1];
  arrNums[i + 1] = saveNum;
  finished = false;
    }
  }
  }
  
  return arrNums;
  };
  
  
  bubbleSort([1, 3, 1, 20, 33, 5, 8]);