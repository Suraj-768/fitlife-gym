function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('bmi-result');

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let message = "";

  if (bmi < 18.5) message = "Underweight";
  else if (bmi < 24.9) message = "Normal weight";
  else if (bmi < 29.9) message = "Overweight";
  else message = "Obese";

  result.textContent = `Your BMI is ${bmi} – ${message}`;
}
