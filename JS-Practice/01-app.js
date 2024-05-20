//console.log("Hello !");
//let userName = window.prompt("input");
//window.alert("welcome " + userName);

const { normalize } = require("path");

//let userName = Number(window.prompt("input"));
//console.log(Number(userName));
/*
let nameArr = ["Gary", "Yen", "Sawa", "he"];
let copyArr = nameArr;
console.log(nameArr);

copyArr[3] = "fat";

console.log(copyArr);

console.log(nameArr == copyArr);

let Student = {
  firstName: "Gary",
  lastName: "Chang",
  age: 26,
  is_married: true,
  say(word) {
    console.log(this.firstName + " say " + word);
  },
  showTh() {
    console.log();
  },
};
console.log(Student.age);
console.log(Student["age"]);
Student.say("Hello Word!");

function hello() {
  console.log("Hello");
  console.log(this); //windows object
}

hello();

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //object
console.log(typeof hello); //function
//bug....
console.log(Array.isArray(arr));
*/

/* 
//------------------------------------------------------------------------------------------------
//guess the random number
//define a number between 0~100
let ans = Math.floor(Math.random() * 100);
console.log(ans);
let min = 0;
let max = 100;
while (1) {
  let guess = Number(
    window.prompt("Guess a number between" + min + " and " + max)
  );
  if (guess < min || guess > max) {
    window.alert("wrong number plz input again!");
    continue;
  }
  if (guess == ans) {
    window.alert("Good Good");
    break;
  } else if (guess < ans) {
    min = guess;
  } else if (guess > ans) {
    max = guess;
  }
}
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//revers the array
const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
console.log(friends);

let reversArr = []; // = friends.pop();
for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
  reversArr.push(friends[i]); //friends.pop();
}
console.log(reversArr);

reversArr = friends.reverse();
console.log(reversArr);

//find the max number
function findBiggest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findBiggest([15, 20, 22, 16, 7]));
console.log(findBiggest([1, 2, 3, 4, 5, 999]));
console.log(findBiggest([-11, 0, -3, -4, -5, -999]));
console.log(findBiggest([]));
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
function addUpTo(num) {
  console.log(typeof num);
  return ((num + 1) * num) / 2;
}
console.log(addUpTo(1000));
*/

/*
//------------------------------------------------------------------------------------------------
//Arithmetic sequence
function printEvery3(num) {
  let ret = 1;

  do {
    console.log(ret);
    ret = ret + 3;
  } while (ret <= 88);
}
printEvery3(26);
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
let table9to9 = function () {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i + " x " + j + " =" + i * j);
    }
  }
};
table9to9();
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
function isUpperCase(input) {
  //console.log(typeof input);
  if (input === "") {
    return console.log("false");
  }
  return console.log(input[0] == input[0].toUpperCase());
}
isUpperCase("ABCD"); // returns true
isUpperCase(""); // returns false
isUpperCase("aBCD"); // returns false
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
function isAllUpperCase(input) {
  //console.log(typeof input);
  if (input === "") {
    return console.log("false");
  }
  return console.log(input == input.toUpperCase());
}
isAllUpperCase("ABCD"); // returns true
isAllUpperCase(""); // returns false
isAllUpperCase("ABCDEFGHIJKLm"); // returns false
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
function position(input) {
  let check = false;
  for (let i = 0; i < input.length; i++) {
    //console.log(input[i]);
    if (input[i] === input[i].toUpperCase()) {
      console.log(input[i] + " " + i);
      check = true;
      break;
    }
  }
  if (!check) {
    console.log(-1);
  }
}
position("abcd"); // prints -1
position("AbcD"); // prints A 0
position("abCD"); // prints C 2
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
//how many number in the array smaller than argument 2
function findSmallCount(arr, smaller) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smaller) {
      count++;
    }
  }
  console.log(count);
}

findSmallCount([1, 2, 3], 2); // returns 1
findSmallCount([1, 2, 3, 4, 5], 0); // returns 0
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
function findSmallerTotal(arr, smaller) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smaller) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

findSmallerTotal([1, 2, 3], 3); // returns 3
findSmallerTotal([1, 2, 3], 1); // returns 0
findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
function stars(num) {
  for (let i = 0; i < num; i++) {
    //console.log(i);
    for (let j = 0; j <= i; j++) {
      //console.log(j);
      console.log("*");
    }
    console.log("\n");
  }
}
//
//
//stars(1);
// *
stars(4);
// *
// **
// ***
// ****
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
function stars2(num) {
  for (let i = 0; i < num; i++) {
    //console.log(i);
    for (let j = 0; j <= i; j++) {
      //console.log(j);
      console.log("*");
    }
    console.log("\n");
  }

  for (let i = num - 1; i > 0; i--) {
    //console.log("i in i loop :" + i);
    for (let j = 0; j < i; j++) {
      //console.log("j:" + j);
      //console.log("i in j loop :" + i);
      console.log("*");
    }
    console.log("\n");
  }
}
stars2(1);
// *
stars2(2);
// *
// **
// *
stars2(3);
// *
// **
// ***
// **
// *
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
function fib(num) {
  if (num <= 1) {
    return console.log(num);
  }

  let ret = Array[num + 1];
  ret = [0, 1];
  for (i = 2; i <= num; i++) {
    //console.log("i:" + i);
    ret[i] = ret[i - 1] + ret[i - 2];
    //console.log(ret[i]);
  }
  return console.log(ret[num]);
}

//fib(0); // returns 0
//fib(1); // returns 1
//fib(2); // returns 1
//fib(3); // returns 2
fib(8); // returns 21
//------------------------------------------------------------------------------------------------
*/
//////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------------------
//week1 practice 1
// let label = "senecacollege";
// let tld = "ca";
// let domainName = label + "." + tld;
// console.log(domainName);
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 2
// let isSeneca = domainName === "senecacollege.ca" ? true : false;
// console.log(isSeneca);
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 3
// let isNotSeneca = isSeneca ? false : true;
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 4
// let byte1 = Math.ceil(Math.random() * 255);
// let byte2 = Math.ceil(Math.random() * 255);
// let byte3 = Math.ceil(Math.random() * 255);
// let byte4 = Math.ceil(Math.random() * 255);
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 5
// console.log(byte1.toString());
// console.log(byte1.toString(2));
// console.log(byte1.toString(16));
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 6
// let ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
// console.log(ipAddress);
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 7
//???????????????????????????????
// let ipIn = (byte1 <<= 24);
// console.log(ipIn);
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 8

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 9
// let statusCode = 418;
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 10
// if (statusCode >= 400 && statusCode < 500) {
//   console.log("Is 4xx error message");
// }
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 12
// switch (statusCode) {
//   case 101:
//     console.log("100 Continue");
//     break;
//   case 101:
//     console.log("101 Switching Protocols");
//     break;
//   case 102:
//     console.log("102 Processing");
//     break;
//   case 103:
//     console.log("103 Early Hints");
//     break;
// }
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 13
// let studentName = "Gary";
// let studentAge = 32;
// console.log('"' + studentName + " is " + studentAge + " years old." + '"');
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 14
/*
function isEven(num) {
  return (num ^ 1) === 0;
}
console.log(isEven(7));
console.log(isEven(4));
*/
// function isEven(num) {
//   return (num & 1) === 0 ? true : false;
//   //return num % 2 === 0 ? true : false;
// }

// Test the function
// console.log(isEven(44)); // Output: true
// console.log(isEven(47)); // Output: false

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 2
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 2
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 2
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 2
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 2
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//week1 practice 20
//------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
/*
//------------------------------------------------------------------------------------------------
//week2 practice 1 calculate the area of a circle
const PI = 3.1415926;
function circleCal(r) {
  let area = r * r * PI;
  console.log(area);
}
circleCal(5);
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 2 rolling a dice
function roll(numOfSide = 6) {
  if (numOfSide != undefined) {
    side = numOfSide;
  }
  return Math.ceil(Math.random() * numOfSide);
}
console.log(roll(50));
console.log(roll());
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
//week2 practice 3 Celcius to Farenheit
function convCelToFar(cel = 0) {
  return cel * 1.8 + 32;
}
console.log(convCelToFar(-40));
console.log(convCelToFar(38));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 4 dual convert
function convTemp(deg, unit) {
  //return deg * 1.8 + 32;

  switch (unit) {
    case "F":
      return (deg - 32) / 1.8 + " C";
    case "C":
      return deg * 1.8 + 32 + " F";
  }
}
console.log(convTemp(23, "C"));
console.log(convTemp(122, "F"));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 5 all less than 50
let isUnder50 = function (...num) {
  let allLess50 = true;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 50) {
      allLess50 = false;
      break;
    }
  }
  return allLess50;
};
console.log(isUnder50(1, 2, 3, 5, 4, 65));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 6 return sum all
let sumAll = (...num) => {
  let sum = 0;
  //for (let i = 0; i < num.length; i++) {
  //  sum += num[i];
  //}

  num.forEach((n) => (sum += n));

  //for (let n of num) {
  //  sum += n;
  //}
  return sum;
};
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
//------------------------------------------------------------------------------------------------
*/

//------------------------------------------------------------------------------------------------
//week2 practice 7 all exist
function allExist(...args) {
  let ret = true;

  // not use
  // for (let i = 0; i < args.length; i++) {
  //   if (args[i] == false) {
  //     ret = false;
  //   }
  // }

  args.map((n) => {
    if (n == false) {
      ret = false;
    }
  });

  //not use
  //for (let i of args) {
  //  if (args[i] == false) {
  //    ret = false;
  //  }
  //}

  return ret;
}

// console.log(allExist(true, true, 1));
// console.log(allExist(1, "1", 0));
//------------------------------------------------------------------------------------------------

/*
//------------------------------------------------------------------------------------------------
//week2 practice 8 add ".js"
function generateName(name) {
  return name.endsWith(".") ? name + "js" : name + ".js";
}
console.log(generateName("dog"));
console.log(generateName("dog."));
//------------------------------------------------------------------------------------------------
*/
/*
//------------------------------------------------------------------------------------------------
//week2 practice 9 check the MOD
function checNum(num, mul) {
  return num % mul === 0;
}
console.log(checNum(123, 3));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 10 check number between
function checkBetween(target, num1, num2, include) {
  if (include) {
    return (
      (num1 <= target && target <= num2) || (num2 <= target && target <= num1)
    );
  } else {
    return (num1 < target && target < num2) || (num2 < target && target < num1);
  }
}
*/
/*function checkBetween(target, num1, num2, include) {
  let ret = false;
  if (include) {
    if (
      (num1 <= target && target <= num2) ||
      (num2 <= target && target <= num1)
    ) {
      ret = true;
    }
  } else {
    if ((num1 < target && target < num2) || (num2 < target && target < num1)) {
      ret = true;
    }
  }
  return ret;
}*/

//console.log(checkBetween(66, 1, 50, true));
//console.log(checkBetween(1, 50, 1, true));
//console.log(true);
//------------------------------------------------------------------------------------------------

/*
//------------------------------------------------------------------------------------------------
//week2 practice 11 calculate HST
function plusTax(amounts, taxedRate = 1.13) {
  return amounts * taxedRate;
}
console.log(plusTax(100, 1.5));
console.log(plusTax(100));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 12 discount
function discount(amounts, dis = 0) {
  return amounts * (1 - dis / 100);
}
console.log(discount(100, 15));
console.log(discount(100));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 13 cal time
function Time(mins) {
  let day = Math.floor(mins / 1440); //day
  let hr = Math.floor((mins - day * 1440) / 60); //hr
  let min = mins % 60;
  return console.log(day + " days " + hr + " hours " + min + " mins");
}
Time(2000);
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 14 cal time modify
function Time(mins) {
  let day = Math.floor(mins / 1440) > 0 ? Math.floor(mins / 1440) : 0; //day
  let hr =
    Math.floor((mins - day * 1440) / 60) > 0
      ? Math.floor((mins - day * 1440) / 60)
      : 0; //hr
  let min = mins % 60;
  let arr = [
    [day, " days "],
    [hr, " hours "],
    [min, " mins "],
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        //console.log(arr[i][j]);
        arr[i][j] = "";
        arr[i][j + 1] = "";
        break;
      }
    }
  }
  return console.log(
    arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]
  );
}
Time(60);
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 15 reverse and to String
function revers(...nums) {
  //let arr = Array();
  //for (let i = 0; i < nums.length; i++) {
  //  arr[i] = nums[i];
  //}
  let arr = [...nums];
  //easy way
  //return arr.reverse().toString();
  //let tmp = arr.pop();
  let rev = Array();
  for (let i = 0; i < nums.length; i++) {
    //let tmp = arr.pop();
    //console.log(tmp);
    rev.push(arr.pop());
  }

  return rev.toString();
}
console.log(revers(1, 2, 3, 4, 5));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 16 change the decimal portion to in
function intSum(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    //sum += Math.floor(nums[i]);
  }
  return sum;
}
console.log(intSum(1.6, 3.333333));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 17 find the match number
function findMatches(...nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[0] === nums[i]) {
      count++;
    }
  }
  return count;
}
console.log(findMatches(66, 1, 345, 2334, 66, 67, 66));
console.log(findMatches(99, 99, 55, 332, 32453, 2345, 78, 77, 99));
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 18 log larger than 255
let showOutsideByteRange = function (...nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 255) {
      console.log(nums[i]);
    }
  }
};
showOutsideByteRange(1, 5, 233, 255, 256, 0);
//------------------------------------------------------------------------------------------------
*/

/*
//------------------------------------------------------------------------------------------------
//week2 practice 19 url encode
let prepareString = (url) => {
  return console.log(encodeURIComponent(url));
};

prepareString("hello world");
//------------------------------------------------------------------------------------------------
//week2 practice 20 url querystring
let buildQueryString = (...args) => {
  let combine = "?";
  for (let i = 0; i < args.length; i++) {
    if (i === 0) {
      combine += encodeURIComponent(args[i]);
    } else {
      combine += "&" + encodeURIComponent(args[i]);
    }
  }
  console.log(combine);
};

buildQueryString("hello world", "goodnight moon");
//"?hello%20world&goodnight%20moon"
//------------------------------------------------------------------------------------------------
*/
//------------------------------------------------------------------------------------------------
//week2 practice 21
//------------------------------------------------------------------------------------------------

// function isEven(num) {
//   return (num ^ 1) == num + 1 ? true : false;
// }

// console.log(isEven(7));
// console.log(isEven(2));

//csv-line
let csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function removeExtraWhiteSpace(s) {
  return s.replace(/\s+/, " ");
}

function extractAreaCode(phoneNumber) {
  let match = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);
  if (match) {
    return match[1];
  }
  return phoneNumber;
}

function normalizeHight(height) {
  if (height.endsWith("inches")) {
    return height;
  }
  let cm = parseFloat(height);
  let inches = cm * 0.39;

  return `${inches.toFixed(2)} inches`;
}

function rowToFields(row) {
  let field = row.split(/\s*,\s*/);

  field[1] = removeExtraWhiteSpace(field[1]);
  field[2] = extractAreaCode(field[2]);
  field[3] = normalizeHight(field[3]);
  return field.join(",");
}

function precess(csv) {
  let rows = splitIntoRows(csv);
  let data = rows.map(rowToFields);
  // let data = rows.map((r) => rowToFields(r));

  return data.join("\n");
}

let processed = precess(csvData);
console.log(csvData);
console.log(processed);
