const clickPlusBtn = document.querySelector('[data-action="increment"]');

const clickMinusBtn = document.querySelector('[data-action="decrement"]');

const basicValue = document.querySelector("#value");

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
clickPlusBtn.addEventListener("click", () => {
  counterValue.increment();
  basicValue.textContent = counterValue.value;
});
clickMinusBtn.addEventListener("click", () => {
  counterValue.decrement();
  basicValue.textContent = counterValue.value;
});
