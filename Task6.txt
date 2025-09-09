// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string){
  string = string.toLowerCase();
  
  let strs = string.split(" ");
  
  let resultStr = "";
  
  for(let i = 0; i < strs.length; ++i){
    for(let j = 0; j < strs[i].length; ++j){
      if(j % 2 == 0){
        resultStr += strs[i][j].toUpperCase();
      }
      else{
        resultStr += strs[i][j];
      }
    }
    resultStr += " ";
  }
  
  return resultStr.slice(0, resultStr.length - 1);
}