//https://www.codewars.com/kata/54d512e62a5e54c96200019e

function primeFactors(n) {
  const resArray = [];
  let num = n;

  for (let i = 2; i * i <= num; i++) {
    let count = 0;
    while (num % i === 0) {
      num = num / i;
      count++;
    }
    if (count > 0) {
      resArray.push(count > 1 ? '(' + i + '**' + count + ')' : '(' + i + ')');
    }
  }

  if (num > 1) {
    resArray.push('(' + num + ')');
  }

  return resArray.join('');
}