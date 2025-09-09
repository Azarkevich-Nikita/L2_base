//https://www.codewars.com/kata/52fb87703c1351ebd200081f

function whatCentury(year)
{
  let centery;
  if(year % 1000 != 0){
     centery = parseInt(year / 100) + 1;
  }
  else{
    centery = Math.floor(year / 100);
  }
  
  if(centery > 20 && centery % 10 == 1){
    centery += "st";
  }
  else if(centery > 20 && centery % 10 == 2){
    centery += "nd";
  }
  else if(centery > 20 && centery % 10 == 3){
    centery += "rd";
  }
  else{
    centery += "th";
  }
  
  return centery;
}