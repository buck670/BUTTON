const button = document.getElementById("incrementButton");
const counterDisplay = document.getElementById("counter");

let counter = 0;

const redSlider = document.getElementById("rangeRed");
const greenSlider = document.getElementById("rangeGreen");
const blueSlider = document.getElementById("rangeBlue");
const body = document.querySelector("body");

function updateBackgroundColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

button.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
