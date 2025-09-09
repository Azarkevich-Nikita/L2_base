// https://www.codewars.com/kata/544975fc18f47481ba00107b

function isCircleSorted( arr ){
  let count = 0;
  for(let i = 0; i < arr.length - 1; ++i){
    if(arr[i] > arr[i + 1]){
      count++;
    }
  }
  
  if(arr[0] < arr[arr.length - 1]){ ++count; }
  return count == 1 || count == 0;
}