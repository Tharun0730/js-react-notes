function privateCounter() {
  let counter = 0;

  return function () {
    return counter++;
  };
}

const a = privateCounter();
const b = privateCounter();

console.log(a(), a(), a(), b());

// Output: 0 1 2 0
