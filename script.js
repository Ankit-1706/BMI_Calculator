const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(e);

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || isNaN(height) || height === '') {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight < 0 || isNaN(weight) || weight === '') {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: ${BMI}`;
  }
});

