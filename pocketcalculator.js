let a = 0;
let display = document.getElementById("display");
//let array = [];

function display(value){
  let display = document.getElementById("display");
  display.innerHTML += value;
  //array.push(value);
}

/*
function digits(digit) {
  let display = document.getElementById("display");
  display.innerHTML += digit;
}
function decimalpoint() {
  let display = document.getElementById("display");
  display.innerHTML += ".";
}
function operators() {
  let display = document.getElementById("display");
  display.innerHTML += operator;
}
*/

let x;
let y;

function addition(x, y) {
  return x + y;
}
function subtraction(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}
/*
function powers2(x) {
  return x ** 2;
}
function powers3(x) {
  return x ** 3;
}
function powers(x, y) {
  return x ** y;
}
function squareroot(x) {
  return Math.SQRT(x);
}
function root(x) {
  return (x);
*/

// function equals does not work
function equals() {
  let display = document.getElementById("display");
  /*
  for(let n = 0; n < array.length - 1; n++){
    if(!isNaN(Number(array[n]))){ // fix this line
      x += array[n] * (10 * (array.length - n - 1)); // check this line
    }
    // find y
    else if(array[n] = ","){

    }
    else if(array[n] = "."){

    }
    else if(array[n] = "-"){

    }
    else if(array[n] = "&times"){
      multiplication(x, y);
    }
    else if(array[n] = "&divide"){
      division(x, y);
    }
    else if(array[n] = "+"){
      addition(x, y);
    }
    else if(array[n] = "-"){
      subtraction(x, y);
    }
  }
  */
  /*
  if(isNaN(a)){
    display.innerHTML = "ERROR";
  }
  */
  display.innerHTML = a;
}

function percentage() {
  let display = document.getElementById("display");
  a /= 100;
  display.innerHTML = a;
}

function negation() {
  let display = document.getElementById("display");
  a = -a
  display.innerHTML = a;
}

// function clear does not work
function clear() {
  let display = document.getElementById("display");
  display.innerHTML = 0;

}
