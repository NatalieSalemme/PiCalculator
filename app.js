//Math.PI only covers 16 digits
const value = ('3.1415926535897932384626433832795028841971');

let piAnswer = document.querySelector('#piResult');
let integer = document.querySelector('.int');
let calculateButton = document.querySelector('#calculate');
let piCircle = document.getElementById('pi-circle')

calculateButton.addEventListener('click', function() {
//takes the substring starting at 3.1 so the value will be that number of numbers after the decimal point
  let result = (value.substr(0, 2).concat(value.substr(2, integer.value)));
  //update inner html to show the result
  piAnswer.innerHTML = result;
  if (result.length <= 10) {
    piCircle.style.width = "180px";
    piCircle.style.height = "180px";
  } else if(result.length > 10 && result.length <= 20) {
    piCircle.style.width = "250px";
    piCircle.style.height = "250px";
  } else if(result.length > 20 && result.length <= 30) {
    piCircle.style.width = "420px";
    piCircle.style.height = "420px";
  } else if(result.length > 30 && result.length <= 40) {
    piCircle.style.width = "600px";
    piCircle.style.height = "600px";
  }
});
