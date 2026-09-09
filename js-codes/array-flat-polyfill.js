Array.prototype.myFlat = function (depth = 1) {
  const result = [];

  function flatten(arr, depth) {
    arr.forEach((data) => {
      if (Array.isArray(data) && depth > 0) {
        flatten(data, depth - 1);
      } else {
        result.push(data);
      }
    });

    return result;
  }

  return flatten(this, depth);
};

const arr = [1, [2, [3, [4, 5]]]];

console.log(arr.myFlat());
console.log(arr.myFlat(2));
console.log(arr.myFlat(Infinity));
