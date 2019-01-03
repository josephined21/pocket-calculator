let value;

function digits(digit){
  var display = document.getElementById("display");
  display.innerHTML += digit;
}
function decimalpoint(){
  var display = document.getElementById("display");
  display.innerHTML += ".";
}
function operators(operator){
  var display = document.getElementById("display");
  display.innerHTML += "&nbsp" + operator + "&nbsp";
}
function equals(){
  //
  var display = document.getElementById("display");
  display.innerHTML = value;
}
function percentage(){
  //
}
function negation(){
  //
}
function clear(){
  //
}
