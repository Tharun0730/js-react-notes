const input = [2, 7, 11, 15];
const target = 9;

function findSumOfNumbers(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
}

console.log(findSumOfNumbers(input, target));
