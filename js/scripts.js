
$(document).ready(function(){
  $("form#input").submit(function(event) {
  var input = $("input#string").val();
  console.log(input);
  write(resolve(input));
  event.preventDefault();
  });
});

function resolve(num) {
  var returnMe = eval(num);
  return returnMe;
}
function write(num) {
    document.getElementById("s").innerHTML = num;
}
