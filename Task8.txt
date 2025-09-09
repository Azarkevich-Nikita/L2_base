//https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  let count = 1;
  let resArr = [];
  
  while (num > 0) {
    let lastNum = num % 10;
    if(lastNum > 0){
      resArr.unshift(lastNum * count);
    }
    count *= 10;
    num = Math.floor(num / 10);
  }

  return resArr.join(" + ");
}