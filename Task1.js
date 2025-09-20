//https://www.codewars.com/kata/55fd4919ce2a1d7c0d0000f3

function hasTwoCubeSums(n) {
  let countOfSum = 0;
  
  for(let num1 = 1; Math.pow(num1, 3) <= n; ++num1){
    
    const num23 = n - Math.pow(num1, 3);
    
    if(num23 < 0){ continue; }
    
    const num2 = Math.cbrt(num23)
    
    if(num2 % 1 === 0 && num2 != num1 && num2 < num1){ countOfSum++; }
    
  }
  return countOfSum >= 2 ? true : false; 
}