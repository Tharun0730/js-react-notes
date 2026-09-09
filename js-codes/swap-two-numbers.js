let a = 10;
let b = 30;

function swapTwoNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a, b);
}

swapTwoNumbers(a, b);
