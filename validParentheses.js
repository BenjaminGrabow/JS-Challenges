var isValid = function(s) {
  if(!s) return true
     else while(s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
   }
  return !s; 
};