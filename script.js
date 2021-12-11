// // This is an Challenge 4 of the course with Ternary expressions/Operators.

// const stevenBill = 430;
// const tip = stevenBill * 0.15;
// const higherTip = stevenBill * 0.2;

// console.log(stevenBill);

// tip >= 50 && tip <= 300
//   ? console.log(
//       //Here the Question mark (?) after the Boolean expression is v important
//       `the tip steven has to pay for his ${stevenBill} is ${tip} and the total value is ${
//         stevenBill + tip
//       }`
//     )
//   : console.log(
//       // Here after the Colen(:) the Else Statement comes. Above is IF statement.
//       `The Higher tip Steven has to pay for his lowe bill of ${stevenBill} is ${higherTip} and the total value is ${
//         stevenBill + higherTip
//       }`
//     );

// Example of a funtion
//I Cannot Access variable defined inside of the function from outside.

// function calculateSalary(hrs, days, absent) {
//   const salary = 25 * hrs * days;
//   const deductions = absent * hrs;

//   let myName = `Santosh`;
//   console.log(
//     `${myName}'s salary is Rs. ${salary}, for working ${hrs} hours for ${days} days.
//      Deductions of ${deductions} for ${absent} hours. Total take home salary Rs.${
//       salary - deductions
//     }`
//   );
//   return salary, deductions;
// }

// let mySalary = calculateSalary(7, 3, 4);

// console.log(mySalary);

// Challenge 2 from Fundamentals of javascript 2 on Arrays and Funtions

/*

const bills = [125, 555, 44];

function calcTip(bills) {
  const tip = bills * 0.15;
  const higherTip = bills * 0.2;

  if (bills >= 50) {
    calcTip = bills * 0.15;
    return tips;
  } else if{
    calcTip = bills * 0.2
    return tips;
  } else {
    return none
  }
}

const allTips = [calcTip(bills[1])];

//allTips.unshift(tips);
//const allTips = [];
console.log(`The tip for bill of ${bills[1]} is ${allTips}`);
//console.log(tips.length);
//console.log(tips.index);

*/

// Challenge 3 Fundamentals 2
/*
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  height: 1.69,
  weight: 78,
  
 calcBMI: function () {
   this.bmi = this.weight / this.height ** 2;
    return this.bmi
  }
};


const john = {
  firstName: "John",
  lastName: "Smith",
  height: 1.95,
  weight: 92,
  
  calcBMI: function () {
  this.bmi = this.weight / this.height ** 2;
  return this.bmi
  }
};
  
  john.calcBMI();
  mark.calcBMI();
  
  if(john.bmi > mark.bmi) {
      console.log(`${john.firstName}'s BMI ${john.bmi} is higher than ${mark.firstName}'s BMI of ${mark.bmi}`)
  }else if (mark.bmi > john.bmi){
      console.log(`${mark.firstName}'s BMI ${mark.bmi} is higher than ${john.firstName}'s BMI of ${john.bmi}`)
  }else
  console.log(`Nothing`)
  
  
  
  

  
  console.log(john.bmi);
  console.log(mark.bmi);
  
  
  const temp = [17, 21, 23];
  
 const printForecast = function(arrI) {
   if(arrI == “number”) {
     arrI[0] + arrI.length-
   }
  
 }
 */
 
 
 function squareDigits(num) {
   numArray = Array.from(num), number;
   console.log(numArray);
   return 0;
 }
 squareDigits(9119);