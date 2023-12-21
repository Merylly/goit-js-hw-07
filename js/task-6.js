function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
const controls = document.getElementById("controls");
const input = controls.firstElementChild;

function destroyBoxes() {
  boxes.textContent = "";
}

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  const boxDivArr = [];
  for (let i = 0; i < amount; i++) {
    const boxDiv = document.createElement("div");
    boxDiv.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    boxDivArr.push(boxDiv);
    size += 10;
  }
  boxes.append(...boxDivArr);
  input.value = "";
}

createBtn.addEventListener("click", () => {
  if (input.value > 0 && input.value <= 100) {
    createBoxes(input.value);
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
