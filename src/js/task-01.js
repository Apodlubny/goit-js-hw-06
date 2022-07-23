const quantityOfCategories = document.querySelector("#categories");
console.log("Number of categories:", quantityOfCategories.childElementCount);

const arrayOfElements = [...quantityOfCategories.children];
arrayOfElements.forEach((element) => {
  console.log("Category:", element.children[0].textContent);
  console.log("Elements:", element.children[1].childElementCount);
  //   console.log(`Categories: ${element.querySelector("h2").textContent}
  //     Elements: ${element.querySelectorAll("li").length}`);
});
