const arr = [1, 983, 34, 2, 2, 34];

function sorting(data, type = "asc") {
  if (!data) return "";
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result[i] = data[i];
  }

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (
        (type === "asc" && result[j] > result[j + 1]) ||
        (type === "desc" && result[j] < result[j + 1])
      ) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

console.log(sorting(arr));
