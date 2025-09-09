//https://www.codewars.com/kata/5594c4599934000e1e00002e

function longest(arr, n) {
  for(let i = 1; i < arr.length; ++i){
    for(let j = i; j > 0 && arr[j - 1].length < arr[j].length; j--){
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
    }
  }
  return arr[n - 1];
}