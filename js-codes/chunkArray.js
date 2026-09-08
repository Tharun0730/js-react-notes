const arr = [1, 2, 3];
const size = 1;

function chunkArray(arr, size) {
  const result = [];
  let temp = [];

  for (const item of arr) {
    if (temp.length === size) {
      result.push(temp);
      temp = [];
    }

    temp.push(item);
  }

  if (temp.length) {
    result.push(temp);
  }

  return result;
}

console.log(chunkArray(arr, size));
