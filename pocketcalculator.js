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

// decimal point
function decimalPoint(val) {
  return val !== ".";
}

//commas
/*
function commas(val) {
  let del = ",";
  let a = val.split('.', 2);
  let b = a[1];
  let c = parseInt(a[0]);
  if (isNaN(c)) {
    return '';
  }
  return val;
}
*/

// equals
function equals() {
  // operators
  for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/") && (arr[i + 1] == "+" || arr[i + 1] == "-" || arr[i + 1] == "*" || arr[i + 1] == "/")) {
      arr.splice(i, 1);
      i--;
    }
  }

  // decimal point
  /*
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  for (let i = 0; i < arr.length; i++) {
    let firstDecimalIndex;
    let decimalPointPressed = false;
    while (!isNaN(arr[i]) || arr[i] === ".") {
      if (arr[j] === ".") {
        decimalPointPressed = true;
        firstDecimalIndex = j;
        break;
      }
    }
  }

  let num;
  let str;
  if (decimalPointPressed === true) {
    for (let j = 0; j < firstDecimalIndex + 1; j++) {
      arr1.push(arr[j]);
    }
    for (let k = firstDecimalIndex + 1; k < arr.length; k++) {
      arr2.push(arr[k]);
    }
    arr2 = arr2.filter(decimalPoint);
    arr3 = arr3.concat(arr1, arr2);
    str = arr3.join("");
    num = eval(str);
  }
  else {
    str = arr.join("");
    num = eval(str);
  }
  */

  // scientific notation
  if (num > 999999999) {
    num = num.toExponential();
  }

  // errors
  if (num == "NaN" || num == "undefined" || num == "Infinity") {
    num = "ERROR"
  }
  // commas
  else {
    for (let n = 0; n < arr.length; n++) {
      if (!isNaN(arr[n])) {
        let num1;
        let num2 = 0;
        while (!isNaN(arr[n])) {
          num1 += arr[n] * (10 ** num2);
          num2++;
          if (num2 == 3) {
            num1 += ",";
          }
        }
      }
    }
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
  arr = [0];
  document.getElementById("display").value = "0";
}

/*
to do:
numbers that exceed 999 should be comma-delimited
limit input sizes to 999,999,999
if an operator is entered immediatley after another operator(s), ignore the previous operator(s)
*/
