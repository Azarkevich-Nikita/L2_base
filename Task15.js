//https://www.codewars.com/kata/57b06eb0bb9944d42c0001ab

function howManyTimes(time1, time2) {
  let start = new Date(time1);
  let end = new Date(time2);
  let total = 0;

  while (start < end) {
    let h = start.getHours();
    let m = start.getMinutes();
    let s = start.getSeconds();

    if (m === 0 && s >= 0 && s < (h % 12 || 12)) {
      total++;
    }
    if (m === 30 && s === 0) {
      total++;
    }

    start = new Date(start.getTime() + 1000);
  }

  return total;
}