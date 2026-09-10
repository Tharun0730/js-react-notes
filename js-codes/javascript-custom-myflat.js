Array.prototype.myFlat = function (cb) {
  return this.map(cb).flat();
};

const numbers = [1, 2, 3];

console.log(
  numbers.myFlat(x => [x, x * 2])
);
