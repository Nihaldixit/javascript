const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  height = height / 100;
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Invalid height or weight input";
    bmiResult.innerHTML ='';
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Invalid height or weight input";
    bmiResult.innerHTML ='';
  } else {
    const bmiIndex = (weight / (height * height)).toFixed(2);
    result.innerHTML = `<span>${bmiIndex}</span>`;
    const bmiResult = document.querySelector("#bmiResult");
    if (bmiIndex < 18.5) {
      bmiResult.innerHTML = "<strong>underweight</strong>";
    } else if (bmiIndex < 24.9) {
      bmiResult.innerHTML = "<strong>normal weight</strong>";
    } else if (bmiIndex < 29.9) {
      bmiResult.innerHTML = "<strong>overweight</strong>";
    } else if (bmiIndex < 34.9) {
      bmiResult.innerHTML = "<strong>obesity</strong>";
    } else {
      bmiResult.innerHTML = "<strong>extreme obesity</strong>";
    }
  }
});
