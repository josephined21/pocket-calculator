function dis(val) {
  document.getElementById("display").value += val;
}

function equals(val) {
  let num = eval(val)
  /*
  if (num > 999) {
      let numString = num.toLocaleString();
      num = Number(numString);
  }
  */

  if (num > 999999999){
    num = num.toExponential();
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
  if the user attempts to divide by 0
  if the next value entered by the user after an operator is not a number
have a fixed width / ensure that values never overflow its bounds
numbers that exceed 999 should be comma-delimited
limit input sizes to 999,999,999
*/
