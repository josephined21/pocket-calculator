function dis(val) {
  document.getElementById("display").value += val;

  /*
  if (!isNaN(val)){
    for (let n = 0; n < str.length; n++) {
      if (!isNaN(str.charAt(str.length - 1)) && !isNaN(str.charAt(str.length - 2))) {
        document.getElementById("display").value += val + ",";
      }
    }
  }
  else {
    document.getElementById("display").value += val;
  }
  */
}
let digitsPressed = 0;
function digits(val) {
  if (digitsPressed == 3) {
    document.getElementById("display").value += "," + val;
  }
  else if () {
    
  }
}

function operators(val) {

}

let decimalPressed = false;
function decimalPoint() {
  if (val === "." && decimalPressed == true) {
  }
  else if (val === "." && decimalPressed == false) {
    document.getElementById("display").value += ".";
    decimalPressed = true;
  }
}

function equals(val) {
  let num = eval(val)

  /*
  for (let i = 0; i < num.toString().length; i++){
    if (!isNaN(numString.charAt(i))) {
      for (let j = 0; j < num.toString().length; j += 3) {
        if (!isNaN(numString.charAt(j)) && !isNaN(numString.charAt(j + 1)) && !isNaN(numString.charAt(j + 2))) {
          document.getElementById("display").value += ",";
        }
      }
    }
  }
  */

  if (num > 999999999) {
    num = num.toExponential();
  }

  if (num === "Infinity") {
    num = "ERROR";
  }

  document.getElementById("display").value = num;
}

function percentage(val) {
  document.getElementById("display").value = val / 100;
}

function negation(val) {
  document.getElementById("display").value = -val;
}

function ac() {
  document.getElementById("display").value = "0";
}

/*
to do:
show error messages
  if the next value entered by the user after an operator is not a number
numbers that exceed 999 should be comma-delimited
limit input sizes to 999,999,999
*/
