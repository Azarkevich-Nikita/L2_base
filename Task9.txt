//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
  let result = [];
    
  for(let i = 0; i < str.length; i+=2){
    if(i == str.length - 1){
      result.push(str[i] + '_');
    }
    else{
      result.push(str[i] + str[i+1]);
    }
  }
  
  return result;
}