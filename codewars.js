function squareDigits(num) {
const number = String(num).split("");
const squares = [];
for ( const n of number ) {
squares.push( n * n);
  squares.push(number[i] * number[i]);
  result = Number(squares.join(""));
}
return result;
}

squareDigits(9119);