//Most basic algorithm bubble sort with time and space complexity of O(n)

const bubbleSort = (arrNums) => {

  //_______________While loop wihtout do _____________
  // let finished = false;
  
  // while(!finished) {
  // finished = true;
  // for(let i = 0; i < arrNums.length; i++) {
  // if(arrNums[i] > arrNums[i +1]) {
  // const saveNum = arrNums[i];
  // arrNums[i] = arrNums[i + 1];
  // arrNums[i + 1] = saveNum;
  // finished = false;
  // }
  // }
  // }
  // return arrNums;
  
  
  // ______________With do / while:___________
  // let finished;
  
  // do {
  //   finished = true;
  //   for(let i = 0; i < arrNums.length; i++) {
  // if(arrNums[i] > arrNums[i +1]) {
  // const saveNum = arrNums[i];
  // arrNums[i] = arrNums[i + 1];
  // arrNums[i + 1] = saveNum;
  // finished = false;
  // }
  // }
  // }while(!finished)
  
  // return arrNums;
  
  // With array higher order method with do while loop
  
  // let finished = false;
  
  // do {
  //   finished = true;
  // arrNums.forEach((num, i, arr) => {
  //     if(arr[i] > arr[i +1]){
  // const saveNum = arr[i];
  // arr[i] = arr[i + 1];
  // arr[i + 1] = saveNum;
  // finished = false;
  //     }
  //   })
  // }while(!finished)
  
  // return arrNums;
  // };
  
  // With array higher order method with only while loop
  
  let finished = false;
  
  while(!finished){
    finished = true;
  arrNums.forEach((num, i, arr) => {
      if(arr[i] > arr[i +1]){
  const saveNum = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = saveNum;
  finished = false;
      }
    })
  }
  
  return arrNums;
  };
  
  bubbleSort([100, 50, 60, 3, 5, 8]);