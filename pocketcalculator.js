let value = 0;

function digits(digit) {
  let display = document.getElementById("display");
  display.innerHTML += digit;
}
function decimalpoint() {
  let display = document.getElementById("display");
  display.innerHTML += ".";
}
function operators(operator) {
  /*
  if(operator == "&times"){

  }
  else if(operator == "&divide"){

  }
  else if(operator == "+"){

  }
  else if(operator == "-"){

  }
  */
  let display = document.getElementById("display");
  display.innerHTML += "&nbsp" + operator + "&nbsp";
}
function equals() {
  let display = document.getElementById("display");
  display.innerHTML = value;
  //
}
function percentage() {
  //value /= 100;
  let display = document.getElementById("display");
  display.innerHTML = value;
}
function negation() {
  let display = document.getElementById("display");
  //
}
function clear() {
  let display = document.getElementById("display");
  //display.innerHTML = "";
}
