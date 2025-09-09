// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win){
  
  let countOfWins = 0;
  
  for(let i = 0; i < ticket.length; ++i){
    for(let j = 0; j < ticket[i][0].length; ++j){
      if(ticket[i][0].charCodeAt(j) == ticket[i][1]){
        countOfWins++;
        break;
      }
    }
  }
  
  return countOfWins >= win ? "Winner!" : "Loser!";
}