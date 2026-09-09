const zeroArray = [0, 1, 0, 3, 12];

function moveZeroToEnd(arr) {
  let lastIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      const lastValue = arr[lastIndex];

      arr[lastIndex] = arr[i];
      arr[i] = lastValue;

      lastIndex--;
    }
  }

  return arr;
}

console.log(moveZeroToEnd(zeroArray));
