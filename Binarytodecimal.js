

const binaryArrayToNumber = arr => {
 decimal = arr.reduce((s,n,i,a) => s + n * ( 2 ** (a.length - i-1)),0);
console.log(decimal);

//console.log(typeof decimal);
  
  // your code
  
return decimal;
 
};
  
binaryArrayToNumber([1,0,1,0]);

// This is an best alternTive from codewarrior
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); //simple