let input = document.querySelector("input");
let plus = document.querySelector(".plus-btn");
let minus = document.querySelector(".minus-btn");
let defaultBtn = document.querySelector(".default-btn");
plus.addEventListener("click", function () {
  input.value++;
});
minus.addEventListener("click", function () {
  input.value--;
  if (input.value < 1) {
    input.value = 1;
  }
});
defaultBtn.addEventListener("click", function () {
  input.value = 1;
});
