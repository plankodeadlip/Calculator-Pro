let calculation = localStorage.getItem('calculation') || '';

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