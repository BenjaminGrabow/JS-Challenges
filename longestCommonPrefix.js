// horizontal method
// - Compares only two elements same time which is not 
// efficient 

// vertical method 
// - Compares every element same time
// - very efficient

var longestCommonPrefix = function(strs) {
  let  prefix = '';
 
  if(strs.length === 0) return prefix;
 
  for(let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
 
     for (let j = 0; j < strs.length; j++){
 
      if(strs[j][i] !== char) return prefix
    }
    prefix = prefix + char;
  }
  return prefix;
 };
 
 longestCommonPrefix(["flower","flow","flight"])