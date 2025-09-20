//https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function(){
  return this.map(x => x * x);
}

Array.prototype.cube = function(){
  return this.map(x => Math.pow(x,3));
}

Array.prototype.average = function(){
  if(this.length === 0) return NaN;
  return this.sum() / this.length;
}

Array.prototype.sum = function(){
  if(this.length === 0) return NaN;
  let sum = 0;
  for(const value of this){
    sum += value;
  }
  return sum;
}

Array.prototype.even = function(){
  const result = [];
  for(const value of this){
    if(value % 2 === 0){
      result.push(value);
    }
  }
  return result;
}

Array.prototype.odd = function(){
  const result = [];
  for(const value of this){
    if(value % 2 === 1){
      result.push(value);
    }
  }
  return result;
}