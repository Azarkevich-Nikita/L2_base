// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str){
  let result = [];
  
  for(let i = 0; i < str.length; ++i){
    if(str[i] == " "){
      continue;
    }
    result.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  
  return result;
  
}