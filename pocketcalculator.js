function dis(val) {
  document.getElementById("display").value += val;
}

function equals(val) {
  /*
  let num = eval(val);
  let numString;
  if (num > 999) {
    for (let i = 1; i < num.toString().length; i++) {
      let n = (num / (i * (num.toString().length - 1))).toString();
      numString += n;

      if (i % 3 == 0){
        numString += ",";
      }
    }
    document.getElementById("display").value = numString;
  }
  else {
    document.getElementById("display").value = num;
  }
  */
  document.getElementById("display").value = eval(val);
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
show error messages
  if the user attempts to divide by 0
  if the next value entered by the user after an operator is not a number
have a fixed width / ensure that values never overflow its bounds
numbers that exceed 999 should be comma-delimited
limit input sizes to 999,999,999; computational results exceeding 999,999,999 - scientific notation
*/
