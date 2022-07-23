const inputName = document.querySelector("#name-input");
const showName = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
  if (inputName.value === "") {
    return (showName.textContent = "Anonymous");
  }
  showName.textContent = event.currentTarget.value;
});
