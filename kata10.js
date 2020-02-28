let calculateChange = function (total, cash) {

  // get change and define a changeable variable @remainingChange to use step-calculation
  const change = cash - total;

  let remainingChange = change;

  // create an object with {key:pair} == {money in string : money in value}
  let moneyTable = [
    { string: "twentyDollar", value: 2000 },
    { string: "tenDollar", value: 1000 },
    { string: "fiveDollar", value: 500 },
    { string: "twoDollar", value: 200 },
    { string: "oneDollar", value: 100 },
    { string: "quarter", value: 25 },
    { string: "dime", value: 10 },
    { string: "nickel", value: 5 },
    { string: "penny", value: 1 }

  ];

  // new object to return calculated result
  let newObj = {};

  // loop using the table index
  for (i = 0; i < moneyTable.length; i++) {
    // if more than 1 of the money value is included in the change, set the remaining change after taking the used value away
    if ((remainingChange / moneyTable[i].value) > 1) {

      // indicate which money value is currently used
      moneyString = moneyTable[i].string;

      /* Get how many times a money value can be used i.e.) 250 -> 2 x dollars + remaining 50c
       And set the value in the object such as {dollar : 1}
      */
      newObj[moneyString] = Math.floor(remainingChange / moneyTable[i].value);

      // calculate remaining change for next calculation
      remainingChange = remainingChange - (moneyTable[i].value * newObj[moneyString]);

    }
  }

  return newObj;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));