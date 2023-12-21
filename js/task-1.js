const categoryIdList = document.getElementById("categories");
const categoryItems = categoryIdList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent;
  const totalLi = item.querySelectorAll("ul li");
  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${totalLi.length}`);
});
