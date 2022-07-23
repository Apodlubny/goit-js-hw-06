function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxes);
function getAmount() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = i * 10 + 30;
    const newDiv = document.createElement("div");
    newDiv.style.cssText = `width: ${size}px; height: ${size}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(newDiv);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
