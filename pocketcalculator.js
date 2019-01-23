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
let digitsPressed = 0;
function digits(val) {
  if (digitsPressed < 9) {
    if (arr[0] === 0) {
      arr.shift();
      arr.push(val);
      document.getElementById("display").value = val;
      digitsPressed++;
    }
    else {
      arr.push(val);
      document.getElementById("display").value += val;
      digitsPressed++;
    }
  }
}

// display operators
let operatorsPressed = 0;
function operators(val) {
  digitsPressed = 0;
  if (arr[0] === 0) {
    arr.shift();
    arr.push(val);
    document.getElementById("display").value = val;
    operatorsPressed++;
  }
  else {
    arr.push(val);
    document.getElementById("display").value += val;
    operatorsPressed++;
  }
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
      operatorsPressed--;
      j--;
    }
  }

  // decimal point
  let decimalPointPressed;
  for (let k = 0; k < arr.length; k++) {
    decimalPointPressed = false;
    while (!isNaN(arr[k]) || arr[k] == ".") {
      if (arr[k] == "." && decimalPointPressed == false) {
        decimalPointPressed = true;
      }
      else if (arr[k] == "." && decimalPointPressed == true) {
        arr.splice(k, 1);
        k--;
      }
      k++;
    }
  }

  let str = arr.join("");
  let num = eval(str);

  // scientific notation
  if (num > 999999999) {
    num = num.toExponential();
  }

  // errors
  if (num == "NaN" || num == "undefined" || num == "Infinity") {
    arr = [0];
    num = "ERROR";
  }

  digitsPressed = 0;
  for (let l = 0; l < arr.length; l++) {
    if (!isNaN(arr[l])) {
      digitsPressed++;
    }
  }
  operatorsPressed = 0;

  document.getElementById("display").value = num.toLocaleString();
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
  digitsPressed = 0;
  operatorsPressed = 0;
  arr = [0];
  document.getElementById("display").value = "0";
}
