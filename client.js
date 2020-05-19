const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

let bonus = 0;

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];
  let peopleMoney = bonusNumberCal(employee);
  // console.log(peopleMoney);
}

let test1 = bonusNumberCal(employees[0]);
let test2 = bonusNumberCal(employees[1]);
let test3 = bonusNumberCal(employees[2]);
let test4 = bonusNumberCal(employees[3]);
let test5 = bonusNumberCal(employees[4]);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);

function bonusNumberCal(employeeParam) {
  console.log("In bonusNumberCal!");
  let totalBonus = 0;
  let moneyMoney = Number(employeeParam.annualSalary);

  const retObj = {
    name: employeeParam.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  };
  // employee.annualSalary +
  // bonus = (employee.annualSalary * bonusRate
  if(employeeParam.rating <= 2){
  }
  else if (employeeParam.rating === 3){
    retObj.bonusPercentage = 0.04;
  }
  else if (employeeParam.rating === 4){
    retObj.bonusPercentage = 0.06;
  }
  else if (employeeParam.rating === 5) {
    retObj.bonusPercentage = 0.10;
  }

  if (employeeParam.employeeNumber.length === 4){
    retObj.bonusPercentage = retObj.bonusPercentage + 0.05;
  }
  if(retObj.bonusPercentage > 0.13){
    retObj.bonusPercentage = 0.13;
  }

  if (moneyMoney > 65000) {
    retObj.bonusPercentage = retObj.bonusPercentage - 0.01;
  }

  // calculate that final bonus
  // calculate that final compensation
  retObj.totalCompensation = ((employeeParam.annualSalary * retObj.bonusPercentage)
   + employeeParam.annualSalary)
  return retObj;
  // What do we want this to do?
  // needs to return

  //return object;

}
// 