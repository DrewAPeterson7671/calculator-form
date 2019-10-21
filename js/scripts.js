function add(num) {
  return (num1+num2);
}
var current = "";
function enter(num) {
  current += num;
  console.log(num);
}
function resolve(num) {
  var returnMe = eval(num);
  return returnMe;
}
function write(num) {
    document.getElementById("s").innerHTML = num;
}
