let arr = [];

// display
function dis(val) {
  if (arr[0] === 0) {
    arr.shift();
    arr.push(val);
    document.getElementById("display").value = val;
  }
  else {
    arr.push(val);
    document.getElementById("display").value += val;
  }
}

// display digits
let numDigitsPressed = 0;
function digits(val) {
  if (numDigitsPressed < 9) {
    if (arr[0] === 0) {
      arr.shift();
      arr.push(val);
      document.getElementById("display").value = val;
      numDigitsPressed++;
    }
    else {
      arr.push(val);
      document.getElementById("display").value += val;
      numDigitsPressed++;
    }
  }
}

// display operators
function operators(val) {
  numDigitsPressed = 0;
  if (arr[0] === 0) {
    arr.shift();
    arr.push(val);
    document.getElementById("display").value = val;
  }
  else {
    arr.push(val);
    document.getElementById("display").value += val;
  }
}

// decimal point
function getNotDecimalPoint(val) {
  return val !== ".";
}

function decimalPoint(val) {
  let arr1 = [];
  let str1 = val.toString();
  for (let i = 0; i < str1.length; i++) {
    arr1.push(str.charAt(i));
  }

  for (let j = 0; j < arr1.length; j++) {
    let firstDecimalIndex;
    let decimalPointPressed = false;
    while (!isNaN(arr[j]) || arr[j] === ".") {
      if (arr[j] === ".") {
        decimalPointPressed = true;
        firstDecimalIndex = j;
        break;
      }
    }
  }

  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let str2;

  if (decimalPointPressed === true) {
    for (let k = 0; k < firstDecimalIndex + 1; k++) {
      arr2.push(arr[k]);
    }
    for (let l = firstDecimalIndex + 1; l < arr1.length; l++) {
      arr3.push(arr[l]);
    }
    arr3 = arr3.filter(getNotDecimalPoint);
    arr4 = arr4.concat(arr1, arr2);
    str2 = arr4.join("");
  }
  else {
    str2 = arr1.join("");
  }
  return str2;
}

// equals
function equals(val) {
  arr = [0];
  val = val.toString();
  for (let i = 0; i < val.length; i++) {
    if (val.charAt(i) != ",") {
      arr[i] = val.charAt(i);
    }
  }

  // operators
  for (let j = 0; j < arr.length - 1; j++) {
    if ((arr[j] == "+" || arr[j] == "-" || arr[j] == "*" || arr[j] == "/") && (arr[j + 1] == "+" || arr[j + 1] == "-" || arr[j + 1] == "*" || arr[j + 1] == "/")) {
      arr.splice(j, 1);
      j--;
    }
  }

  // decimal point
  /*
  for (let k = 0; k < arr.length; k++) {

  }
  */

  let str = arr.join("");
  let num = eval(str);

  // scientific notation
  if (num > 999999999) {
    num = num.toExponential();
  }

  // commas
  if (!isNaN(num)) {
    num = num.toLocaleString();
  }
  // errors
  if (num == "NaN" || num == "undefined" || num == "Infinity") {
    arr = [0];
    num = "ERROR";
  }

  document.getElementById("display").value = num;
}

// percentage
function percentage(val) {
  document.getElementById("display").value = val / 100;
}

// negation
function negation(val) {
  document.getElementById("display").value = -val;
}

// clear
function ac() {
  numDigitsPressed = 0;
  arr = [0];
  document.getElementById("display").value = "0";
}

/*
to do:
decimal points afer the first decimal point in a number are ignored
*/
