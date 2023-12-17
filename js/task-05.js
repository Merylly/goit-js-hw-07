function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBg = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btn.addEventListener("click", () => {
  colorBg.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
});
