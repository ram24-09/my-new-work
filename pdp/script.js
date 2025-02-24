function increaseQuantity(button) {
  const input = button.previousElementSibling;
  input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(button) {
  const input = button.nextElementSibling;
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}
