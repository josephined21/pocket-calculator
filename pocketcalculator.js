function dis(n) {
  document.getElementById("display").value += n;
}
function equals(n) {
  document.getElementById("display").value = eval(n);
}
function percentage(n) {
  document.getElementById("display").value = n / 100;
}
function negation(n) {
  document.getElementById("display").value = -n;
}
function clear() {
  document.getElementById("display").value = "0";
}
