function tribonacci(signature,n){
  //your code here
  let initialNum = [...signature];
  for(let i = 0; i < n - signature.length;i++){
initialNum.push(initialNum[initialNum.length -1] + 
                initialNum[initialNum.length -2
      ] + initialNum[initialNum.length -3]);
    
}
  console.log(initialNum.slice(0,n));
    return initialNum.slice(0,n);
}

tribonacci([1,1,1], 10);


//****
//Much better solution for calculating Tribonacci sequence

function tribonacci(s,n){
  //create an empty array to store result
  var arr = [];
  // loop over the given s
  for(var i=0; i<n; i++) {
    //ternery operator if s < 3 return last index, if more than 3 sum the elements accorging to the index from right i.e -1,-2,-3
    arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
  }
  return arr;
}