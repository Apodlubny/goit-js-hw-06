const quantityOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", quantityOfCategories.length);
quantityOfCategories.forEach((element) => {
  console.log(`Categories: ${element.querySelector("h2").textContent}
      Elements: ${element.querySelectorAll("li").length}`);
});
// const arrayOfElements = [...quantityOfCategories.children];
// arrayOfElements.forEach((element) => {
// console.log("Category:", element.children[0].textContent);
// console.log("Elements:", element.children[1].childElementCount);
// });
