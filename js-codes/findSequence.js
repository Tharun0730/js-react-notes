let arr = [100, 4, 200, 1, 3, 2, 5];

function findSequence(arr) {
  let min = Infinity;
  let temp = new Set(arr);
  let result = [];

  for (const value of arr) {
    if (min > value) {
      min = value;
    }
  }

  while (temp.has(min)) {
    result.push(min);
    min++;
  }

  console.log(result);
  console.log("Start:", result[0]);
  console.log("End:", result[result.length - 1]);
  console.log("Length:", result.length);
}

find(arr);
