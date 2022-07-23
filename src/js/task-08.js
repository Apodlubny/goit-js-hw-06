const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Поля не должны быть пустыми");
  }
  console.log(`Логин: ${email.value}, пароль: ${password.value}`);
  event.currentTarget.reset();
}
