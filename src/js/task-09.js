function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
buttonEl.addEventListener("click", onButtonClickChangeColor);
function onButtonClickChangeColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  return (colorNameEl.textContent = color);
}
