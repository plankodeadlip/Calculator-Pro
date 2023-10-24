let calculation = localStorage.getItem('calculation') || '';

window.addEventListener('keyup', function(event) {
  if (event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' ||
      event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' ||
      event.key === '8' || event.key === '9' || event.key === '+' || event.key === '-' ||
      event.key === '*' || event.key === '/' || event.key === '=' || event.key === '.') {

    if (event.key === '=') {

      calculation = eval(calculation);
      document.querySelector('.screen2').innerHTML = calculation;
    } else {
      updateCalculation(event.key);
    }
  } else if (event.key === 'Enter') {

    calculation = eval(calculation);
    document.querySelector('.screen2').innerHTML = calculation;
  }
});


function updateCalculation(value) {
  const buttonElement = document.querySelector('.number-button');
  calculation += value;
  console.log(calculation);
  document.querySelector('.screen').innerHTML = `${calculation} `;
  localStorage.setItem('calculation', calculation);
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}