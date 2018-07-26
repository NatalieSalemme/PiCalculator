const value = ('3.1415926535897932384626433832795028841971693993751058');
let piAnswer = document.querySelector('#piResult');
let integer = document.querySelector('.int');
let calculateButton = document.querySelector('#calculate');


calculateButton.addEventListener('click', function() {
//takes the substring starting at 3.1 so the value will be that number of numbers after the decimal point
  let result = (value.substr(0, 2).concat(value.substr(2, integer.value)));
  console.log(result);
  //update inner html to show the result
  piAnswer.innerHTML = result;

  if (result.length <= 10) {
    document.getElementById('pi-circle').style.width = "180px";
    document.getElementById('pi-circle').style.height = "180px";
  } else if(result.length > 10 && result.length <= 20) {
    document.getElementById('pi-circle').style.width = "250px";
    document.getElementById('pi-circle').style.height = "250px";
  } else if(result.length > 20 && result.length <= 30) {
    document.getElementById('pi-circle').style.width = "420px";
    document.getElementById('pi-circle').style.height = "420px";
  } else if(result.length > 30 && result.length <= 40) {
    document.getElementById('pi-circle').style.width = "600px";
    document.getElementById('pi-circle').style.height = "600px";
  }//bracket for calculate function
});
