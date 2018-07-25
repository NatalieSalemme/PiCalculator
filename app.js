const value = ('3.1415926535897932384626433832795028841971693993751058');
const piAnswer = document.querySelector('#piResult');
let integer = document.querySelector('.int');
let calculateButton = document.querySelector('#calculate');


calculateButton.addEventListener('click', function() {
//takes the substring starting at 3.1 so the value will be that number of numbers after the decimal point
  console.log(value.substr(0, 2).concat(value.substr(2, integer.value)));

});
