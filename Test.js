//First letter capital rest repeated wrt its index saperated by (-)
/*

function accum(s) {
  const strSplit = s.toLowerCase().split('');

  const newArr = strSplit.map(
    (element, i) => element.toUpperCase() + element.repeat(i)).join("");
    
    console.log(newArr);

  return newArr;
  // your code
}

accum('abcd');




//`${c.toLocaleUpperCase()}${c.repeat(i)}`



function litres(time) {
  const waterInTake = Math.floor(time * 0.5);
  console.log(waterInTake);
  return waterInTake;
}

litres(6.7);

*/

function solution (str, ending) {
  (str.includes(ending)) ? console.log("true") : console.log("false");
}

solution("abcd","abc");