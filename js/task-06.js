const input = document.querySelector('#controls input[type="number"]');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    boxSize += 10;
    boxes.insertAdjacentHTML(
      "afterbegin",
      `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`
    );
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", (event) => {
  const inputNum = parseInt(input.value);
  if (inputNum <= 100 && inputNum >= 0) {
    createBoxes(inputNum);
  } else {
    alert("This field can not be empty");
  }
  input.value = "";
});

btnDestroy.addEventListener("click", destroyBoxes);
