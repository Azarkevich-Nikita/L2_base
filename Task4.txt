//https://www.codewars.com/kata/52de553ebb55d1fca3000371

function findMissing(list) {  
  let differents = [];
  
  for(let i = 0; i < list.length - 1; ++i){
    if(differents.indexOf(list[i + 1] - list[i]) == -1){
      differents.push(list[i + 1] - list[i]);
    }
  }
  
  let min = differents[0];

  for (let i = 1; i < differents.length; i++) {
    if (differents[i] < min) min = differents[i];
  }
  
  for(let i = list[0], j = 0; j < list.length; i += min, j++){
    if(list[j] != i){
      return i;
    }
  }
  return;
}